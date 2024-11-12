"use client"; // Assurez-vous que cette ligne est présente en haut

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BlogList = ({ blogs }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh(); // Recharge la liste des blogs
      } else {
        alert('Erreur lors de la suppression du blog');
      }
    }
  };

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="card-blog" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <p>Date de publication: {new Date(blog.createdAt).toLocaleString()}</p>
            <div>
              {/* Lien pour modifier le blog en utilisant le slug */}
              <Link href={`/dashboard/blogs/edit/${blog.slug}`}>Modifier</Link>
              {/* Lien pour voir les détails du blog en utilisant le slug */}
              <Link href={`/dashboard/blogs/${blog.slug}`}>Détails</Link>
       
        
              {/* Bouton pour supprimer le blog */}
              <button onClick={() => handleDelete(blog._id)} style={{ marginLeft: '10px', color: 'red' }}>
                Supprimer
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun blog trouvé.</p>
      )}
    </div>
  );
};

export default BlogList;
