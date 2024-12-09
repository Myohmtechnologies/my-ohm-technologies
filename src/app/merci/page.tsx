'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { phoneEvents } from '@/utils/analytics';

const ThankYouPage = () => {
  const handlePhoneClick = () => {
    phoneEvents.phoneClick('thank_you_page_header');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec numéro de téléphone */}
      <header className="bg-[#15171A] text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <a
              href="tel:+33123456789"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 hover:text-[#FFDF64] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-bold">01 23 45 67 89</span>
            </a>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-[#15171A]">
            Merci pour votre demande !
          </h1>
          <p className="text-xl text-gray-600">
            Notre équipe d&apos;experts analysera votre projet et vous contactera dans les plus brefs délais.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-green-800">
              Pour toute question urgente, n&apos;hésitez pas à nous contacter directement au{' '}
              <a
                href="tel:+33123456789"
                onClick={() => phoneEvents.phoneClick('thank_you_page_content')}
                className="font-bold text-green-700 hover:text-green-900 transition-colors duration-200"
              >
                01 23 45 67 89
              </a>
            </p>
          </div>
          <div className="pt-8">
            <Link
              href="/"
              className="inline-block bg-[#15171A] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ThankYouPage;
