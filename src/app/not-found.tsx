"use client";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">404 - Page Non Trouvée</h1>
        <p className="text-gray-700 mb-6">La page que vous recherchez n&apos;existe pas</p>
        <a 
          href="/" 
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
