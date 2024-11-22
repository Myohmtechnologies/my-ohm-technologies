import React from "react";

const LeadTable = ({ leads, onActionClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-4 text-left font-medium text-gray-600">Nom</th>
            <th className="p-4 text-left font-medium text-gray-600">Téléphone</th>
            <th className="p-4 text-left font-medium text-gray-600">Résidence</th>
            <th className="p-4 text-left font-medium text-gray-600">Statut</th>
            <th className="p-4 text-left font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{lead.name}</td>
              <td className="p-4">{lead.phone}</td>
              <td className="p-4">{lead.residentialStatus || "Non spécifié"}</td>
              <td className="p-4">
                <span className="px-2 py-1 rounded bg-blue-500 text-white">
                  {lead.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onActionClick(lead)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Actions
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
