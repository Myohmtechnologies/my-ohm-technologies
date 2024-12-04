"use client";

import React, { useState } from "react";
import "../../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Simulation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Informations de contact :", formData);
    alert(
      "Merci ! Nous avons reçu vos informations. Un commercial vous contactera bientôt."
    );

    // Réinitialisation du formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <Header />
      <main className="simulation-container">
        <h1 className="simulation-title">Simulation d&apos;Énergie</h1>
        <p className="simulation-description">
          Merci de renseigner vos informations pour être contacté par un
          commercial.
        </p>

        <form className="simulation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Entrez votre email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Téléphone :</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>

          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Simulation;
