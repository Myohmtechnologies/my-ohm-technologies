import React from 'react';
import { Calendar } from 'lucide-react';

const AdvancedFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filtre par date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Période</label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <input
                type="date"
                name="dateFrom"
                value={filters.dateFrom}
                onChange={(e) => onFilterChange('dateFrom', e.target.value)}
                className="w-full pl-8 pr-2 py-2 border rounded-md"
              />
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative flex-1">
              <input
                type="date"
                name="dateTo"
                value={filters.dateTo}
                onChange={(e) => onFilterChange('dateTo', e.target.value)}
                className="w-full pl-8 pr-2 py-2 border rounded-md"
              />
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Filtre par source */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Source</label>
          <select
            name="source"
            value={filters.source}
            onChange={(e) => onFilterChange('source', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Toutes les sources</option>
            <option value="site_web">Site Web</option>
            <option value="telephone">Téléphone</option>
            <option value="recommandation">Recommandation</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        {/* Filtre par statut résidentiel */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Statut résidentiel</label>
          <select
            name="residentialStatus"
            value={filters.residentialStatus}
            onChange={(e) => onFilterChange('residentialStatus', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Tous les statuts</option>
            <option value="proprietaire">Propriétaire</option>
            <option value="locataire">Locataire</option>
          </select>
        </div>
      </div>

      {/* Boutons de réinitialisation et d'application */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => onFilterChange('reset')}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
        >
          Réinitialiser
        </button>
        <button
          onClick={() => onFilterChange('apply')}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Appliquer
        </button>
      </div>
    </div>
  );
};

export default AdvancedFilters;
