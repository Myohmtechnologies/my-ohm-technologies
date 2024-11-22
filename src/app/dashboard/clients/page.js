'use client';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';

export default function Clients() {
  const [columns, setColumns] = useState({
    'Nouveau contact': [],
    'Rendez-vous fixé': [],
    'À recontacter': [],
    'Archivé': [],
  });

  useEffect(() => {
    async function fetchClients() {
      const response = await fetch('/api/get-submissions');
      const data = await response.json();

      // Organiser les clients par statut
      const grouped = {
        'Nouveau contact': [],
        'Rendez-vous fixé': [],
        'À recontacter': [],
        'Archivé': [],
      };

      data.forEach((client) => {
        if (grouped[client.status]) {
          grouped[client.status].push(client);
        }
      });

      setColumns(grouped);
    }

    fetchClients();
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceCol = columns[result.source.droppableId];
    const destCol = columns[result.destination.droppableId];

    const [movedClient] = sourceCol.splice(result.source.index, 1);
    destCol.splice(result.destination.index, 0, movedClient);

    setColumns({
      ...columns,
      [result.source.droppableId]: sourceCol,
      [result.destination.droppableId]: destCol,
    });

    // Optionnel : Envoyer la mise à jour au backend
    fetch(`/api/get-submissions/${movedClient._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: result.destination.droppableId }),
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Parcours des Clients</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-6">
          {Object.entries(columns).map(([status, clients]) => (
            <Droppable key={status} droppableId={status} isDropDisabled={false}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/4 bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-700">{status}</h3>
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <Draggable key={client._id} draggableId={client._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-100 p-3 rounded-lg shadow-sm border border-gray-300"
                        >
                          <p className="font-semibold text-gray-800">{client.name}</p>
                          <p className="text-sm text-gray-600">{client.email}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
