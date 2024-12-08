import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  link: string;
}

const BlogCard = ({ title, description, image, category, author, date, link }: BlogCardProps) => {
  return (
    <Link href={link} className="block">
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

          {/* Footer */}
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-600">
              PAR <span className="font-semibold text-[#6C8D2F]">{author}</span>
            </p>
            <p className="text-xs text-gray-600">{date}</p>
          </div>

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
