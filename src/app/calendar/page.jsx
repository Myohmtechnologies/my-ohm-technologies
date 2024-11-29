'use client';

import React, { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import Sidebar from '../components/Sidebar';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log('Récupération des événements...');
        const response = await fetch('/api/calendar-events');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des événements');
        }
        const data = await response.json();
        console.log('Événements reçus:', data);
        
        // Convertir les chaînes de date en objets Date
        const formattedEvents = data.map(event => {
          console.log('Formatage de l\'événement:', event);
          return {
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
            title: event.title || `RDV - ${event.leadName || 'Client'}`,
          };
        });
        
        console.log('Événements formatés:', formattedEvents);
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();

    // Rafraîchir les événements toutes les minutes
    const interval = setInterval(fetchEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Calendrier des rendez-vous</h1>
        <div className="mb-4">
          {events.length === 0 ? (
            <p className="text-gray-600">Aucun rendez-vous trouvé</p>
          ) : (
            <p className="text-gray-600">{events.length} rendez-vous trouvés</p>
          )}
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-[600px] bg-white rounded-lg shadow">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <Calendar events={events} />
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
