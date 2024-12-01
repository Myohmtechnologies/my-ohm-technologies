git remote add origin URL_DE_VOTRE_REPO
git push -u origin main'use client';
import '../../../styles/dashboard.css'
import { useEffect, useState } from 'react';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchClients() {
      const response = await fetch(`/api/list?page=${page}&limit=10`);
      const data = await response.json();
      setClients(data.clients);
      setTotal(data.total);
    }
    fetchClients();
  }, [page]);

  return (
    <div>
      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">téléphone</th>
            <th className="px-4 py-2">Statut</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
              <td className="px-4 py-2">{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Précédent
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => setPage(prev => (page * 10 < total ? prev + 1 : prev))}
          disabled={page * 10 >= total}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ClientList;
