"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar"; // Sidebar ajoutée
import LeadTable from "../../components/LeadTable";
import AddLeadModal from "../../components/AddLeadModal";
import '../../../styles/dashboard.css'; // Styles du tableau et du dashboard

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/get-submissions");
        if (response.ok) {
          const data = await response.json();

          // Transformation de `_id` en `id`
          const formattedLeads = data.map((lead) => ({
            ...lead,
            id: lead._id,
          }));

          console.log("Leads récupérés :", formattedLeads);
          setLeads(formattedLeads);
        } else {
          console.error("Erreur lors de la récupération des leads.");
        }
      } catch (error) {
        console.error("Erreur lors de la requête API :", error);
      }
    };

    fetchLeads();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addLead = async (newLead) => {
    try {
      const response = await fetch("/api/get-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead),
      });

      if (response.ok) {
        const savedLead = await response.json();
        setLeads([...leads, { ...savedLead, id: savedLead._id }]);
        closeModal();
      } else {
        console.error("Erreur lors de l'ajout du lead.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  };

  return (
    <div className="dashboard-container flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="main-content flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Liste des Leads</h1>

        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={openModal}
          >
            + Ajouter un Lead
          </button>
        </div>

        <Card>
          <CardHeader>
            <Typography variant="h6" className="text-gray-800">Leads</Typography>
          </CardHeader>
          <CardContent>
            <LeadTable leads={leads} />
          </CardContent>
        </Card>
      </div>

      {/* Modal pour ajouter un lead */}
      {isModalOpen && <AddLeadModal onClose={closeModal} onSave={addLead} />}
    </div>
  );
};

export default LeadsPage;
