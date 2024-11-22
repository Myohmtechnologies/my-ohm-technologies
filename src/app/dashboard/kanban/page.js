'use client';
import '../../../styles/dashboard.css'
import { useEffect, useState } from 'react';
import UpdateStatusModal from '../../components/UpdateStatusModal';

export default function Kanban() {
    const [kanbanData, setKanbanData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedClient, setSelectedClient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    // Fonction pour attribuer des couleurs aux colonnes
    const getColumnColor = (columnId) => {
        const colors = {
            'Nouveau contact': 'bg-blue-100',
            'contacté': 'bg-yellow-100',
            'Démarche_administratif': 'bg-green-100',
            'Installation_fini': 'bg-purple-100',
            'échec': 'bg-red-100',
        };
        return colors[columnId] || 'bg-gray-100';
    };

    // Actions disponibles pour chaque statut
    const getActionsForStatus = (status) => {
        const actions = {
            'Nouveau contact': [
                { label: 'Fixer un rendez-vous', value: 'contacté' },
                { label: 'Planifier un rappel', value: 'Nouveau contact' },
                { label: 'Non intéressé', value: 'échec' },
            ],
            'contacté': [
                { label: 'Devis signé', value: 'Démarche_administratif' },
                { label: 'Deuxième rendez-vous', value: 'contacté' },
                { label: 'Non intéressé', value: 'échec' },
            ],
            'Démarche_administratif': [
                { label: 'Validation obtenue', value: 'Installation_fini' },
                { label: 'Refusé', value: 'échec' },
            ],
            'Installation_fini': [
                { label: 'Validation CONSUEL', value: 'Validation CONSUEL' },
                { label: 'Demande de raccordement EDF', value: 'Demande EDF' },
            ],
            'échec': [
                { label: 'Revenir à Nouveau contact', value: 'Nouveau contact' },
                { label: 'Revenir à contacté', value: 'contacté' },
            ],
        };
        return actions[status] || [];
    };


    useEffect(() => {
        setIsClient(true); // Indique que le composant est chargé côté client
    }, []);

    useEffect(() => {
        async function fetchKanbanData() {
            try {
                const response = await fetch('/api/kanban');
                const data = await response.json();

                const mergedData = data.reduce((acc, group) => {
                    if (group._id === 'Nouveau contact' || group._id === 'Nouveau') {
                        const existingGroup = acc.find((g) => g._id === 'Nouveau contact');
                        if (existingGroup) {
                            existingGroup.leads = [...existingGroup.leads, ...group.leads];
                        } else {
                            acc.push({ _id: 'Nouveau contact', leads: group.leads });
                        }
                    } else {
                        acc.push(group);
                    }
                    return acc;
                }, []);

                const orderedData = [
                    { _id: 'Nouveau contact', leads: [] },
                    { _id: 'contacté', leads: [] },
                    { _id: 'Démarche_administratif', leads: [] },
                    { _id: 'Installation_fini', leads: [] },
                    { _id: 'échec', leads: [] },
                ].map((column) => {
                    const found = mergedData.find((group) => group._id === column._id);
                    return found ? found : column;
                });

                setKanbanData(orderedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du Kanban :', error);
            } finally {
                setLoading(false);
            }
        }

        fetchKanbanData();
    }, []);

    const handleEdit = (client) => {
        setSelectedClient(client);
        setIsModalOpen(true);
    };

    const handleSave = async (updatedClientData) => {
        const { status, appointment, reminderDate, notes } = updatedClientData;

        await fetch(`/api/update-status/${selectedClient._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status, appointment, reminderDate, notes }),
        });

        setKanbanData((prevData) =>
            prevData.map((group) => {
                if (group._id === selectedClient.status) {
                    return {
                        ...group,
                        leads: group.leads.filter((lead) => lead._id !== selectedClient._id),
                    };
                }
                if (group._id === status) {
                    return {
                        ...group,
                        leads: [...group.leads, { ...selectedClient, status, appointment, reminderDate, notes }],
                    };
                }
                return group;
            })
        );

        setIsModalOpen(false);
    };

    if (loading) {
        return <div className="p-4">Chargement des données...</div>;
    }

    if (!isClient) {
        return null; // Ne rend rien côté serveur pour éviter les mismatchs
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">MYOHM - Suivi des Clients</h1>
            <div className="grid grid-cols-5 gap-4">
                {kanbanData.map((group) => (
                    <div
                        key={group._id}
                        className={`p-4 rounded shadow ${getColumnColor(group._id)}`}
                    >
                        <h3 className="text-xl font-semibold mb-3">{group._id}</h3>
                        {group.leads.map((lead, index) => (
                            <div
                                key={`${lead._id}-${group._id}-${index}`} // Clé unique
                                className="bg-white p-3 rounded-lg shadow mb-2 border-l-4 border-blue-500"
                            >
                                <p className="font-bold">{lead.name}</p>
                                <p className="text-sm text-gray-600">Téléphone : {lead.phone}</p>
                                {lead.reminderDate && (
                                    <p className="text-sm text-gray-500">
                                        Rappel prévu le : {new Date(lead.reminderDate).toLocaleString()}
                                    </p>
                                )}
                                {lead.appointment?.date && (
                                    <p className="text-sm text-gray-500">
                                        Rendez-vous : {new Date(lead.appointment.date).toLocaleString()}
                                    </p>
                                )}
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => handleEdit(lead)}
                                >
                                    Modifier
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <UpdateStatusModal
                client={selectedClient}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                getActionsForStatus={getActionsForStatus} // Passe les actions disponibles
            />

        </div>
    );
}
