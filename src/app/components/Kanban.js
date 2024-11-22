import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

export default function Kanban({ clients }) {
  // Initialisation des colonnes du Kanban
  const [columns, setColumns] = useState({
    'Nouveau contact': [],
    'Rendez-vous fixé': [],
    'À recontacter': [],
    'Archivé': [],
  });

  // Répartition initiale des clients dans les colonnes par statut
  useState(() => {
    const groupedClients = {
      'Nouveau contact': [],
      'Rendez-vous fixé': [],
      'À recontacter': [],
      'Archivé': [],
    };

    clients.forEach((client) => {
      if (groupedClients[client.status]) {
        groupedClients[client.status].push(client);
      }
    });

    setColumns(groupedClients);
  }, [clients]);

  // Gestion du drag-and-drop
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

    // Optionnel : Envoyer la mise à jour du statut au backend
    fetch(`/api/get-submissions/${movedClient._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: result.destination.droppableId }),
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4">
        {Object.entries(columns).map(([status, clients]) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-1/4 bg-gray-100 p-4 rounded shadow"
              >
                <h3 className="text-lg font-bold mb-2">{status}</h3>
                {clients.map((client, index) => (
                  <Draggable
                    key={client._id}
                    draggableId={client._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 rounded shadow mb-2"
                      >
                        <p className="text-sm font-semibold">{client.name}</p>
                        <p className="text-xs text-gray-600">{client.email}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
