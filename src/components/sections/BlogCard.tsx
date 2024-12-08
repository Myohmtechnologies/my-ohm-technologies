import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  slug: string;
}

const BlogCard = ({ title, description, image, category = 'Blog', slug }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Category */}
          <p className="text-xs font-semibold text-[#6C8D2F] mb-2 uppercase">{category}</p>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-6">
            {description.length > 100 ? description.slice(0, 100) + '...' : description}
          </p>

          {/* Read More */}
          <div className="mt-4">
            <span className="text-sm font-medium text-[#6C8D2F] hover:text-[#557021] transition">
              Lire la suite →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
