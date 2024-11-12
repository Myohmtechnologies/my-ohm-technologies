"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    sections: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      if (!slug) return;

      try {
        const response = await fetch(`/api/blogs/${slug}`);
        if (!response.ok) throw new Error("Erreur lors de la récupération du blog");

        const data = await response.json();
        setBlog(data);
        setFormData({
          title: data.title,
          content: data.content,
          sections: data.sections || [],
        });
      } catch (error) {
        setError(error.message);
      }
    }

    fetchBlog();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { title: "", content: "", image: null }],
    });
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleImageChange = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedSections = [...formData.sections];
      updatedSections[index] = { ...updatedSections[index], image: reader.result };
      setFormData({ ...formData, sections: updatedSections });
    };
    reader.readAsDataURL(file);
  };

  const deleteSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });
      if (!response.ok) throw new Error("Erreur lors de la mise à jour du blog");

      const updatedBlog = await response.json();
      setBlog(updatedBlog);
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du blog :", error);
      setError(error.message);
    }
  };

  const toggleEditMode = () => setIsEditing(!isEditing);

  if (error) return <p>Erreur: {error}</p>;
  if (!slug) return <p>Chargement du slug...</p>;
  if (!blog) return <p>Chargement des données du blog...</p>;

  return (
    <div>
      <h1>{isEditing ? "Modifier le blog" : blog.title}</h1>

      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Titre du blog"
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Contenu principal du blog"
          />

          {formData.sections.map((section, index) => (
            <div key={index} style={{ marginBottom: "1em" }}>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                placeholder={`Titre de la section ${index + 1}`}
              />
              <textarea
                value={section.content}
                onChange={(e) => handleSectionChange(index, "content", e.target.value)}
                placeholder={`Contenu de la section ${index + 1}`}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
              {section.image && (
                <img src={section.image} alt={`Section ${index + 1} image`} style={{ maxWidth: "100px", marginTop: "0.5em" }} />
              )}
              <button type="button" onClick={() => deleteSection(index)}>
                Supprimer la section
              </button>
            </div>
          ))}

          <button type="button" onClick={addSection}>
            Ajouter une section
          </button>
          <button type="button" onClick={handleSave}>
            Enregistrer
          </button>
          <button type="button" onClick={toggleEditMode}>
            Annuler
          </button>
        </div>
      ) : (
        <div>
          <p>{blog.content}</p>
          {blog.sections &&
            blog.sections.map((section, index) => (
              <div key={index}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
                {section.image && <img src={section.image} alt={`Image de la section ${index + 1}`} style={{ maxWidth: "200px" }} />}
              </div>
            ))}
          <button onClick={toggleEditMode}>Modifier</button>
        </div>
      )}
    </div>
  );
}
