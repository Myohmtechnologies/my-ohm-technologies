'use client';

import { RegionData } from '@/config/seo';
import { StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface Props {
  region: RegionData;
}

const LocalReviews = ({ region }: Props) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Témoignages de nos clients dans le {region.name}
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Découvrez les retours d&apos;expérience de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {region.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              {/* En-tête du témoignage */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-700">{testimonial.city}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-[#FFDF64]" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
              </div>

              {/* Type d'installation */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {testimonial.installationType}
                </span>
              </div>

              {/* Commentaire */}
              <p className="text-gray-800 mb-4">
                {testimonial.comment}
              </p>

              {/* Date */}
              <div className="text-sm text-gray-700">
                {new Date(testimonial.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalReviews;
