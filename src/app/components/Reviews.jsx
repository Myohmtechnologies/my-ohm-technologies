import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    content: "KitStarter a complètement transformé notre processus de développement. La qualité des composants et la facilité d'utilisation sont exceptionnelles.",
    author: "Sophie Martin",
    role: "CTO, TechStart",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    content: "Grâce à KitStarter, nous avons réduit notre temps de développement de 60%. Un investissement qui en vaut vraiment la peine.",
    author: "Thomas Dubois",
    role: "Lead Developer, InnoTech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    content: "La documentation est claire et le support est réactif. C'est exactement ce dont nous avions besoin pour accélérer notre développement.",
    author: "Marie Laurent",
    role: "Founder, WebSolutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Reviews() {
  return (
    <div className="bg-white py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover what our customers say about their experience with KitStarter
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.id} className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center gap-x-4 mb-8">
                <Image
                  className="h-12 w-12 rounded-full bg-gray-50"
                  src={review.image}
                  alt={review.author}
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{review.author}</h3>
                  <p className="text-sm leading-6 text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-6">{review.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
