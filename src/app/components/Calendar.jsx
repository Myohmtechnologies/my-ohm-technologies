import React from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'fr': fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Même mapping de couleurs que dans LeadTable
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

const Calendar = ({ events }) => {
  console.log('Props events reçus:', events);

  const eventStyleGetter = (event) => {
    console.log('Style pour l\'événement:', event);
    const backgroundColor = statusColors[event.status] || "#6B7280"; // gray-500 par défaut
    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: 'none',
        display: 'block',
        padding: '2px 5px'
      }
    };
  };

  const CustomEvent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      {event.description && (
        <p className="text-sm">{event.description}</p>
      )}
    </div>
  );

  return (
    <div className="h-[600px] bg-white p-4 rounded-lg shadow">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CustomEvent
        }}
        views={['month', 'week', 'day']}
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
          date: "Date",
          time: "Heure",
          event: "Événement",
          noEventsInRange: "Aucun rendez-vous dans cette période",
        }}
        culture="fr"
        defaultView="month"
        popup
        selectable
        onSelectSlot={(slotInfo) => {
          console.log('Créneau sélectionné:', slotInfo);
        }}
        onSelectEvent={(event) => {
          console.log('Événement sélectionné:', event);
        }}
      />
    </div>
  );
};

export default Calendar;
