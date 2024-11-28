"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; // Votre composant Sidebar
import LeadTable from "./LeadTable";
import ActionsModal from "./ActionsModal";
import Pagination from "./Pagination";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/dashboard.css";

const FilteredLeadsPage = ({ status }) => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 10;

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch(
        `/api/get-submissions?status=${status}&page=${page}&limit=${limit}&search=${search}`
      );
      const data = await response.json();
      setLeads(data.leads || []);
    };

    fetchLeads();
  }, [status, page, search]);

  const handleActionClick = (lead) => {
    setSelectedLead(lead);
  };

  const handleSave = async (updatedData) => {
    try {
      const response = await fetch(`/api/get-submissions/${updatedData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        // Récupérez l'erreur du serveur si la réponse n'est pas OK
        const errorMessage = await response.text();
        console.error("Erreur du backend :", errorMessage); // Erreurs côté serveur
        throw new Error(errorMessage); // Laissez Next.js gérer si critique
      }
  
      const result = await response.json();
      console.log("Réponse du backend :", result);
    } catch (error) {
      // Log contrôlé pour éviter les traces inutiles
      if (process.env.NODE_ENV === "development") {
        console.error("Erreur lors de la mise à jour :", error.message);
      }
      alert("Une erreur est survenue. Veuillez réessayer."); // Message utilisateur
    }
  };
  
  

  return (
    <div className="dashboard-container flex h-screen bg-gray-100">
      <Sidebar />
      <div className="main-content flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Leads - {status}
        </h1>
        <input
          type="text"
          placeholder="Rechercher..."
          className="border p-2 rounded mb-4 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="bg-white shadow-md rounded-lg p-4">
          {leads.length > 0 ? (
            <LeadTable leads={leads} onActionClick={handleActionClick} />
          ) : (
            <div className="text-gray-600 text-center">Aucun lead trouvé.</div>
          )}
        </div>
        <Pagination
          currentPage={page}
          itemsPerPage={limit}
          totalItems={leads.length}
          onPageChange={(page) => setPage(page)}
        />
      </div>
      {selectedLead && (
        <ActionsModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onSave={handleSave}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default FilteredLeadsPage;
