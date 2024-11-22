'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    async function fetchClient() {
      const response = await fetch(`/api/get-submissions/${id}`);
      const data = await response.json();
      setClient(data);
    }
    fetchClient();
  }, [id]);

  const addNote = async () => {
    await fetch(`/api/get-submissions/${id}/add-project-or-note`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'historique', data: { type: 'Note', note, date: new Date() } }),
    });
    setClient((prev) => ({
      ...prev,
      historique: [...prev.historique, { type: 'Note', note, date: new Date() }],
    }));
    setNote('');
  };

  if (!client) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{client.name}</h1>
      <p>Email : {client.email}</p>
      <p>Téléphone : {client.phone}</p>
      <p>Statut : {client.status}</p>
      <p>Adresse : {client.address || 'Non renseignée'}</p>

      <h2 className="text-xl font-semibold mt-6">Historique</h2>
      <ul>
        {client.historique.map((entry, index) => (
          <li key={index}>
            {entry.date} - {entry.type} : {entry.note}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <textarea
          className="w-full border px-2 py-1 mb-2"
          placeholder="Ajouter une note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={addNote} className="bg-green-500 text-white px-4 py-2 rounded">
          Ajouter une note
        </button>
      </div>
    </div>
  );
}
