import React from 'react';
import { Phone, Mail, Home, Calendar, FileText, Clock } from 'lucide-react';

const ClientDetails = ({ lead }) => {
  const statusSteps = [
    "Nouveau",
    "RDV fixé",
    "Visite technique",
    "Démarche administrative",
    "Pose",
    "CONSUEL",
    "Raccordement EDF",
    "Suivis",
    "Archive"
  ];

  const getStatusColor = (status) => {
    const colors = {
      "Nouveau": "bg-gray-500",
      "RDV fixé": "bg-blue-500",
      "Visite technique": "bg-yellow-500",
      "Démarche administrative": "bg-purple-500",
      "Pose": "bg-green-500",
      "CONSUEL": "bg-red-500",
      "Raccordement EDF": "bg-orange-500",
      "Suivis": "bg-teal-500",
      "Archive": "bg-gray-700"
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* En-tête */}
      <div className="p-6 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{lead.name}</h2>
            <div className="mt-1 flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(lead.status)}`}>
                {lead.status}
              </span>
              <span className="text-gray-500">ID: {lead.id}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Informations de contact */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <span>{lead.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <span>{lead.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Home className="h-5 w-5 text-gray-400" />
            <span>{lead.residentialStatus}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span>{lead.dateTime ? new Date(lead.dateTime).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }) : 'Date non disponible'}</span>
          </div>
        </div>
      </div>

      {/* Timeline des étapes */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold mb-4">Progression</h3>
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          {statusSteps.map((step, index) => {
            const isCompleted = statusSteps.indexOf(lead.status) >= index;
            const isCurrent = lead.status === step;

            return (
              <div key={step} className="relative flex items-center mb-4 pl-8">
                <div
                  className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                    isCurrent
                      ? "border-blue-500 bg-white"
                      : isCompleted
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300 bg-white"
                  }`}
                />
                <span className={`ml-2 ${isCurrent ? "font-semibold" : ""}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historique des actions */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Historique des actions</h3>
        <div className="space-y-4">
          {lead.notes && lead.notes.length > 0 ? (
            lead.notes.map((note, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">
                    {note.type === 'archive' ? '🗑️ Archivage' : '📝 Action'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {note.date ? new Date(note.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Date non disponible'}
                  </span>
                </div>
                <p className="text-gray-700">{note.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Aucune note disponible</p>
          )}
        </div>
      </div>

      {/* Documents */}
      <div className="p-6 border-t">
        <h3 className="text-lg font-semibold mb-4">Documents</h3>
        <div className="space-y-2">
          {lead.documents && lead.documents.length > 0 ? (
            lead.documents.map((doc, index) => (
              <div key={index} className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-400" />
                <span>{doc.name}</span>
                <a
                  href={doc.url}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir
                </a>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Aucun document</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
