import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import type { Realisation } from '@/types';

export class RealisationService {
  private static async getCollection() {
    const client = await clientPromise;
    const db = client.db('myohm');
    return db.collection('realisations');
  }

  static async getAllRealisations(page = 1, limit = 10, filter?: {
    city?: string;
    type?: string;
    year?: number;
  }) {
    const collection = await this.getCollection();
    
    // Construire la requête en fonction des filtres
    const query: any = {};
    if (filter?.city) query.city = filter.city;
    if (filter?.type) query.type = filter.type;
    if (filter?.year) query.year = filter.year;

    const total = await collection.countDocuments(query);
    const realisations = await collection
      .find(query)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return {
      realisations,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async getRealisationById(id: string) {
    const collection = await this.getCollection();
    return collection.findOne({ _id: new ObjectId(id) });
  }

  static async createRealisation(realisation: Omit<Realisation, 'id'>) {
    const collection = await this.getCollection();
    
    const result = await collection.insertOne({
      ...realisation,
      date: new Date(realisation.date),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return {
      id: result.insertedId
    };
  }

  static async updateRealisation(id: string, updates: Partial<Realisation>) {
    const collection = await this.getCollection();
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updates,
          updatedAt: new Date()
        }
      }
    );

    return result.matchedCount > 0;
  }

  static async deleteRealisation(id: string) {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  static async getStats() {
    const collection = await this.getCollection();
    
    const [totalCount, cities, types, yearlyStats] = await Promise.all([
      collection.countDocuments(),
      collection.distinct('city'),
      collection.distinct('type'),
      collection.aggregate([
        {
          $group: {
            _id: { $year: '$date' },
            count: { $sum: 1 },
            totalPower: { $sum: '$powerInstalled' }
          }
        },
        { $sort: { _id: -1 } }
      ]).toArray()
    ]);

    return {
      totalRealisations: totalCount,
      cities,
      types,
      yearlyStats: yearlyStats.map(stat => ({
        year: stat._id,
        count: stat.count,
        totalPower: stat.totalPower
      }))
    };
  }

  static async getFeaturedRealisations(limit = 3) {
    const collection = await this.getCollection();
    
    return collection
      .find({ featured: true })
      .sort({ date: -1 })
      .limit(limit)
      .toArray();
  }

  static async searchRealisations(query: string) {
    const collection = await this.getCollection();
    
    return collection
      .find({
        $or: [
          { city: { $regex: query, $options: 'i' } },
          { type: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } }
        ]
      })
      .sort({ date: -1 })
      .limit(10)
      .toArray();
  }

  static async toggleFeatured(id: string) {
    const collection = await this.getCollection();
    const realisation = await this.getRealisationById(id);
    
    if (!realisation) return false;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          featured: !realisation.featured,
          updatedAt: new Date()
        }
      }
    );

    return result.matchedCount > 0;
  }
}
