"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import LeadTable from "./LeadTable";
import ActionsModal from "./ActionsModal";

const FilteredLeadsPage = ({ status }) => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  const openActions = (lead) => setSelectedLead(lead);
  const closeActions = () => setSelectedLead(null);

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/get-submissions");
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      } else {
        console.error("Erreur lors de la récupération des leads.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    setFilteredLeads(leads.filter((lead) => lead.status === status));
  }, [leads, status]);

  const handleUpdateLead = (updatedLead) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === updatedLead.id ? updatedLead : lead
      )
    );
    closeActions();
  };

  return (
    <div className="dashboard-container flex h-screen bg-gray-100">
      <Sidebar />
      <div className="main-content flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Clients : {status}
        </h1>
        {filteredLeads.length > 0 ? (
          <LeadTable leads={filteredLeads} onActionClick={openActions} />
        ) : (
          <p className="text-gray-600">Aucun client pour cette étape.</p>
        )}
      </div>
      {selectedLead && (
        <ActionsModal
          lead={selectedLead}
          onClose={closeActions}
          onSave={handleUpdateLead}
        />
      )}
    </div>
  );
};

export default FilteredLeadsPage;
