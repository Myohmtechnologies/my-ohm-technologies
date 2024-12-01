"use client";

import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar"; // Votre composant Sidebar
import LeadTable from "./LeadTable";
import ActionsModal from "./ActionsModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Assurez-vous que les styles sont importés

import Pagination from "./Pagination";


import Sidebar from "./Sidebar";
import LeadTable from "./LeadTable";
import ActionsModal from "./ActionsModal";
import AdvancedFilters from "./AdvancedFilters";
import ClientDetails from "./ClientDetails";
import { ToastContainer } from 'react-toastify';
import Pagination from "./Pagination";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/dashboard.css";

const FilteredLeadsPage = ({ status }) => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    source: "",
    residentialStatus: "",
    search: "",
  });


  const limit = 10;

  useEffect(() => {
    const fetchLeads = async () => {

      const response = await fetch(
        `/api/get-submissions?status=${status}&page=${page}&limit=${limit}&search=${search}`
      );

      const queryParams = new URLSearchParams({
        status,
        page,
        limit,
        ...filters,
      }).toString();

      const response = await fetch(`/api/get-submissions?${queryParams}`);

      const data = await response.json();
      setLeads(data.leads || []);
    };

    fetchLeads();

  }, [status, page, search]);

  const handleActionClick = (lead) => {
    setSelectedLead(lead);
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({
        dateFrom: "",
        dateTo: "",
        source: "",
        residentialStatus: "",
        search: "",
      });
      return;
    }

    if (filterType === 'apply') {
      setPage(1);
      return;
    }

    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleActionClick = (lead) => {
    setSelectedLead(lead);
    setShowDetails(false);
  };

  const handleRowClick = (lead) => {
    setSelectedLead(lead);
    setShowDetails(true);

  };

  const handleSave = async (updatedData) => {
    try {

      const response = await fetch(`/api/get-submissions/${updatedData.id}`, {

      console.log("Mise à jour du lead :", updatedData);
      
      // Mise à jour du lead
      const response = await fetch(`/api/leads/${updatedData.id}`, {

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
  
  


      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Erreur lors de la mise à jour :", errorMessage);
        throw new Error("Erreur lors de la mise à jour du lead");
      }

      const result = await response.json();
      console.log("Lead mis à jour avec succès :", result);

      // Rafraîchir la liste des leads
      const queryParams = new URLSearchParams({
        status,
        page,
        limit,
        ...filters,
      }).toString();

      const refreshResponse = await fetch(`/api/get-submissions?${queryParams}`);
      const refreshData = await refreshResponse.json();
      setLeads(refreshData.leads || []);

      // Fermer la modal
      setSelectedLead(null);
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue lors de la mise à jour");
    }
  };


  return (
    <div className="dashboard-container flex h-screen bg-gray-100">
      <Sidebar />
      <div className="main-content flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Leads - {status}
          </h1>
        </div>

        <AdvancedFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        <div className="flex gap-6">
          {/* Table des leads */}
          <div className={`${showDetails ? 'w-1/2' : 'w-full'} transition-all duration-300`}>
            <div className="bg-white shadow-md rounded-lg p-4">
              {leads.length > 0 ? (
                <LeadTable
                  leads={leads}
                  onActionClick={handleActionClick}
                  onRowClick={handleRowClick}
                />
              ) : (
                <div className="text-gray-600 text-center py-8">
                  Aucun lead trouvé.
                </div>
              )}
            </div>
            <Pagination
              currentPage={page}
              itemsPerPage={limit}
              totalItems={leads.length}
              onPageChange={setPage}
            />
          </div>

          {/* Détails du client */}
          {showDetails && selectedLead && (
            <div className="w-1/2">
              <ClientDetails lead={selectedLead} />
            </div>
          )}
        </div>
      </div>

      {/* Modal d'actions */}
      {selectedLead && !showDetails && (
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
