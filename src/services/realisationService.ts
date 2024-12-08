import { MongoClient, ObjectId } from 'mongodb';
import { Realisation } from '@/types';
import { clientPromise } from '@/lib/mongodb';

export class RealisationService {
  private static async getCollection() {
    const client = await clientPromise as MongoClient;
    const db = client.db('myohm');
    return db.collection('realisations');
  }

  static async getAllRealisations(page = 1, limit = 10, filter?: {
    city?: string;
    type?: string;
    year?: number;
  }): Promise<{ realisations: Realisation[], pagination: { total: number, page: number, pages: number } }> {
    const collection = await this.getCollection();
    
    // Construire la requête en fonction des filtres
    const query: any = {};
    if (filter?.city) query.city = filter.city;
    if (filter?.type) query.type = filter.type;
    if (filter?.year) query.year = filter.year;

    const total = await collection.countDocuments(query);
    const realisations = (await collection
      .find(query)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()).map(doc => ({
        ...doc,
        _id: doc._id.toString(),
        date: new Date(doc.date)
      })) as Realisation[];

    return {
      realisations,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async getRealisationById(id: string): Promise<Realisation | null> {
    const collection = await this.getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    if (!doc) return null;
    
    return {
      ...doc,
      _id: doc._id.toString(),
      date: new Date(doc.date)
    } as Realisation;
  }

  static async createRealisation(realisation: Omit<Realisation, '_id'>): Promise<Realisation> {
    const collection = await this.getCollection();
    
    const result = await collection.insertOne({
      ...realisation,
      date: new Date(realisation.date),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return {
      ...realisation,
      _id: result.insertedId.toString(),
    } as Realisation;
  }

  static async updateRealisation(id: string, updates: Partial<Realisation>): Promise<boolean> {
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

    return result.modifiedCount > 0;
  }

  static async deleteRealisation(id: string): Promise<boolean> {
    const collection = await this.getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  static async getStats(): Promise<{
    totalRealisations: number,
    cities: string[],
    types: string[],
    yearlyStats: { year: number, count: number, totalPower: number }[]
  }> {
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

  static async getFeaturedRealisations(limit = 6): Promise<Realisation[]> {
    const collection = await this.getCollection();
    
    const docs = await collection
      .find({ featured: true })
      .sort({ date: -1 })
      .limit(limit)
      .toArray();

    return docs.map(doc => ({
      ...doc,
      _id: doc._id.toString(),
      date: new Date(doc.date)
    })) as Realisation[];
  }

  static async searchRealisations(query: string): Promise<Realisation[]> {
    const collection = await this.getCollection();
    
    const docs = await collection
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { type: { $regex: query, $options: 'i' } },
          { city: { $regex: query, $options: 'i' } }
        ]
      })
      .sort({ date: -1 })
      .toArray();

    return docs.map(doc => ({
      ...doc,
      _id: doc._id.toString(),
      date: new Date(doc.date)
    })) as Realisation[];
  }

  static async toggleFeatured(id: string): Promise<boolean> {
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

    return result.modifiedCount > 0;
  }
}
