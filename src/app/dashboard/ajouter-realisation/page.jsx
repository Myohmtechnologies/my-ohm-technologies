"use client"; // Indique que c'est un composant client

import { useState } from 'react';

const RealisationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    mainImage: null,
    marquePanneaux: 'Dualsun', // Option par défaut pour la marque des panneaux solaires
    marqueMicroOnduleur: 'Enphase', // Valeur par défaut
    surfaceMaison: '',
    puissanceMax: '',
    nombrePanneaux: '',
    detailImages: [], // Tableau pour les images de détails
  });

  const [loading, setLoading] = useState(false); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const [success, setSuccess] = useState(false); // Nouveau: état de succès après la soumission

  // Gestion des changements dans les champs texte
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gestion du fichier pour l'image principale
  const handleMainImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      mainImage: e.target.files[0], // Enregistrer l'image principale
    }));
  };

  // Gestion du fichier pour les images de détails
  const handleDetailImagesChange = (e) => {
    const files = Array.from(e.target.files);
    console.log('Images de détail sélectionnées:', files); // Affiche les fichiers de détail dans la console
    setFormData((prevData) => ({
      ...prevData,
      detailImages: files, // Enregistrer les images de détails
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Déclenche le chargement
    setError(null); // Réinitialise l'erreur
    setSuccess(false); // Réinitialise l'état de succès

    // Vérification que des images de détail ont été sélectionnées
    if (formData.detailImages.length === 0) {
      setError('Veuillez télécharger des images de détail.');
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('location', formData.location);
    form.append('date', formData.date);
    form.append('marquePanneaux', formData.marquePanneaux);
    form.append('marqueMicroOnduleur', formData.marqueMicroOnduleur);
    form.append('surfaceMaison', formData.surfaceMaison);
    form.append('puissanceMax', formData.puissanceMax);
    form.append('nombrePanneaux', formData.nombrePanneaux);

    // Ajout de l'image principale
    if (formData.mainImage) {
      form.append('mainImage', formData.mainImage);
    } else {
      setError('Veuillez télécharger une image principale.');
      setLoading(false);
      return;
    }

    // Ajout des images de détail
    formData.detailImages.forEach((file) => {
      form.append('detailImages', file);  // Pas besoin d'index ici
    });

    // Envoyer les données au backend
    try {
      const response = await fetch('/api/dashboard/ajouter-realisation', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'enregistrement de la réalisation.");
      }

      const result = await response.json();
      console.log('Réalisation enregistrée avec succès:', result);
      setSuccess(true); // Marque la soumission comme réussie
      setLoading(false); // Arrête le chargement
    } catch (error) {
      setLoading(false); // Arrête le chargement en cas d'erreur
      setError(error.message); // Affiche l'erreur
      console.error(error);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      date: '',
      mainImage: null,
      marquePanneaux: 'Dualsun',
      marqueMicroOnduleur: 'Enphase',
      surfaceMaison: '',
      puissanceMax: '',
      nombrePanneaux: '',
      detailImages: [],
    });
    setError(null);
    setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Titre"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="Lieu"
        required
      />

      <label>Image principale :</label>
      <input
        type="file"
        onChange={handleMainImageChange}
        accept="image/*"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />

      <label>Marque des panneaux solaires :</label>
      <select
        name="marquePanneaux"
        value={formData.marquePanneaux}
        onChange={handleInputChange}
        required
      >
        <option value="Dualsun">Dualsun</option>
        <option value="Bourgeois global">Bourgeois global</option>
      </select>

      <label>Marque des micro-onduleurs (par défaut : Enphase) :</label>
      <input
        type="text"
        name="marqueMicroOnduleur"
        value={formData.marqueMicroOnduleur}
        disabled
      />

      <input
        type="number"
        name="surfaceMaison"
        value={formData.surfaceMaison}
        onChange={handleInputChange}
        placeholder="Surface de la maison"
        required
      />
      <input
        type="number"
        name="puissanceMax"
        value={formData.puissanceMax}
        onChange={handleInputChange}
        placeholder="Puissance de l'installation (kWc)"
        required
      />
      <input
        type="number"
        name="nombrePanneaux"
        value={formData.nombrePanneaux}
        onChange={handleInputChange}
        placeholder="Nombre de panneaux installés"
        required
      />

      <label>Images de détail :</label>
      <input
        type="file"
        onChange={handleDetailImagesChange}
        accept="image/*"
        multiple
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Enregistrement en cours...' : 'Enregistrer la réalisation'}
      </button>
      <button type="button" onClick={handleReset} disabled={loading}>
        Réinitialiser
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Réalisation ajoutée avec succès!</p>}
    </form>
  );
};

export default RealisationForm;
