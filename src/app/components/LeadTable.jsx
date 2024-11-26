import React from "react";
import { MoreVertical } from "lucide-react"; // Icône burger

const LeadTable = ({ leads = [], onActionClick }) => {
  const getStatusColor = (status) => {
    const colors = {
      Nouveau: "bg-gray-500",
      "RDV fixé": "bg-blue-500",
      "Visite technique": "bg-yellow-500",
      "Démarche administrative": "bg-purple-500",
      Pose: "bg-green-500",
      CONSUEL: "bg-red-500",
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
                  className={`px-2 py-1 rounded-full text-white text-sm ${getStatusColor(
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
