"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const EditBlogPage = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  const fetchBlog = useCallback(async () => {
    try {
      const res = await fetch(`/api/blogs/${params.slug}`);
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération du blog");
      }
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error("Erreur lors de la récupération du blog:", error);
    }
  }, [params.slug]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("content", e.target.content.value);

    const image = e.target.image.files[0];
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await fetch(`/api/blogs/${params.slug}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        router.push("/dashboard/blogs");
      } else {
        alert("Erreur lors de la mise à jour du blog");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du blog:", error);
    }
  };

  if (!blog) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Modifier le Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre:</label>
          <input type="text" id="title" name="title" defaultValue={blog.title} required />
        </div>
        <div>
          <label htmlFor="content">Contenu:</label>
          <textarea id="content" name="content" defaultValue={blog.content} required />
        </div>
        <div>
          <label htmlFor="image">Image (facultatif):</label>
          <input type="file" id="image" name="image" accept="image/*" />
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditBlogPage;
