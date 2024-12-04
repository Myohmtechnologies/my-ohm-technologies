import React, { useState, useEffect } from "react";
import LeadCard from "./LeadTable";
import "../../styles/dashboard.css";

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  // Récupérer les données des leads
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/get-submissions");
        if (response.ok) {
          const data = await response.json();
          setLeads(data);
        } else {
          console.error("Erreur lors de la récupération des leads :", response.statusText);
        }
      } catch (error) {
        console.error("Erreur réseau :", error);
      }
    };

    fetchLeads();
  }, []);

  const updateStep = async (leadId, stepIndex, data) => {
    try {
      const response = await fetch(`/api/leads/${leadId}/steps/${stepIndex}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const updatedLead = await response.json();
        setLeads((prevLeads) =>
          prevLeads.map((lead) => (lead._id === leadId ? updatedLead : lead))
        );
      } else {
        console.error("Erreur lors de la mise à jour :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="lead-list">
      {leads.length === 0 ? (
        <p>Aucun lead disponible.</p>
      ) : (
        leads.map((lead) => (
          <LeadCard key={lead._id} lead={lead} onUpdateStep={updateStep} />
        ))
      )}
    </div>
  );
};

export default LeadList;
