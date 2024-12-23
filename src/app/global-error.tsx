'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Erreur Système</h2>
            <p className="text-gray-700 mb-6">
              Une erreur inattendue s&apos;est produite. Veuillez réessayer.
            </p>
            <button
              onClick={() => reset()}
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
