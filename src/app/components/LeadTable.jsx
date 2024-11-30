import React from "react";
import { MoreVertical } from "lucide-react"; // Icône burger

const LeadTable = ({ leads = [], onActionClick }) => {
  const getStatusColor = (status) => {
    const colors = {
      Nouveau: "bg-blue-500",
      "RDV fixé": "bg-yellow-300",
      "Visite technique": "bg-orange-500",
      "Démarche administrative": "bg-purple-900",
      Pose: "bg-green-500",
      CONSUEL: "bg-indigo-400",
      "Raccordement EDF": "bg-pink-500",
      "Suivis": "bg-cyan-500",
      "Archive": "bg-red-600", // Rouge plus foncé pour l'archive
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-4 text-left font-medium text-gray-600">Nom</th>
            <th className="p-4 text-left font-medium text-gray-600">E-mail</th>
            <th className="p-4 text-left font-medium text-gray-600">Numéro de téléphone</th>
            <th className="p-4 text-left font-medium text-gray-600">Date</th>
            <th className="p-4 text-left font-medium text-gray-600">Statut</th>
            <th className="p-4 text-left font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              {/* Nom */}
              <td className="p-4">{lead.name}</td>

              {/* E-mail */}
              <td className="p-4">{lead.email}</td>

              {/* Numéro de téléphone */}
              <td className="p-4">{lead.phone}</td>

              {/* Date */}
              <td className="p-4">{new Date(lead.dateTime).toLocaleDateString()}</td>

              {/* Statut */}
              <td className="p-4">
                <span
                  className={`px-3 py-1.5 rounded-full text-white text-sm font-medium ${getStatusColor(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>
              </td>

              {/* Actions (icône burger) */}
              <td className="p-4 text-center">
                <button
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => onActionClick(lead)}
                  title="Actions"
                >
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
