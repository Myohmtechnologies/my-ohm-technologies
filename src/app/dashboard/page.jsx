"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../components/Sidebar";
import NewContactForm from "../components/NewContactForm";
import '../../styles/dashboard.css';

// Mapping des couleurs par statut
const statusColors = {
  Nouveau: "#3B82F6", // blue-500
  "RDV fixé": "#EAB308", // yellow-500
  "Visite technique": "#F97316", // orange-500
  "Démarche administrative": "#A855F7", // purple-500
  "Pose": "#22C55E", // green-500
  "CONSUEL": "#6366F1", // indigo-500
  "Raccordement EDF": "#EC4899", // pink-500
  "Suivis": "#06B6D4", // cyan-500
  "Archive": "#DC2626", // red-600
};

const DashboardPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewContactForm, setShowNewContactForm] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/calendar-events');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des événements');
        }
        const data = await response.json();
        
        // Formater les événements pour FullCalendar
        const formattedEvents = data.map(event => ({
          id: event._id,
          title: event.title,
          start: event.start,
          end: event.end,
          backgroundColor: statusColors[event.status] || "#6B7280",
          borderColor: statusColors[event.status] || "#6B7280",
          textColor: "#ffffff",
          extendedProps: {
            status: event.status,
            description: event.description,
            leadName: event.leadName,
            leadPhone: event.leadPhone,
            leadEmail: event.leadEmail
          }
        }));
        
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

  const handleEventClick = (info) => {
    const event = info.event;
    const props = event.extendedProps;
    alert(
      `Rendez-vous : ${event.title}\n` +
      `Client : ${props.leadName}\n` +
      `Téléphone : ${props.leadPhone}\n` +
      `Email : ${props.leadEmail}\n` +
      `Statut : ${props.status}\n` +
      `Notes : ${props.description || 'Aucune note'}`
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Calendrier des Rendez-vous
              </h1>
              <p className="text-gray-600 mt-2">
                Gérez vos rendez-vous et consultez votre planning
              </p>
            </div>
            <button
              onClick={() => setShowNewContactForm(true)}
              className="px-6 py-3 bg-customGreen text-white rounded-lg hover:bg-opacity-90 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nouveau Contact
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {loading ? (
              <div className="flex items-center justify-center h-[600px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="calendar-container">
                <FullCalendar
                  plugins={[
                    timeGridPlugin,
                    dayGridPlugin,
                    interactionPlugin,
                  ]}
                  initialView="timeGridWeek"
                  slotDuration="01:00:00"
                  slotMinTime="08:00:00"
                  slotMaxTime="20:00:00"
                  height="auto"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  buttonText={{
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour"
                  }}
                  locale="fr"
                  events={events}
                  eventClick={handleEventClick}
                  nowIndicator={true}
                  weekends={true}
                  allDaySlot={false}
                  dayHeaderFormat={{
                    weekday: 'long',
                    day: 'numeric',
                    month: 'numeric'
                  }}
                  eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  }}
                  slotLabelFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  }}
                  dayMaxEvents={true}
                  eventDisplay="block"
                  stickyHeaderDates={true}
                  firstDay={1}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {showNewContactForm && (
        <NewContactForm onClose={() => setShowNewContactForm(false)} />
      )}
    </div>
  );
};

export default DashboardPage;
