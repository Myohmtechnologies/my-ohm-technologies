"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../components/Sidebar"; // Importation de la Sidebar
import '../../styles/dashboard.css'

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Calendrier des Rendez-vous
          </h1>
          <FullCalendar
            plugins={[
              timeGridPlugin,
              googleCalendarPlugin,
              dayGridPlugin,
              interactionPlugin,
            ]}
            initialView="timeGridWeek"
            slotDuration="02:00:00"
            slotLabelInterval="02:00"
            slotLabelFormat={{
              hour: "numeric",
              minute: "2-digit",
              meridiem: false,
              hourCycle: "h23",
            }}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,dayGridMonth",
            }}
            googleCalendarApiKey="VOTRE_GOOGLE_CALENDAR_API_KEY"
            events={{
              googleCalendarId: "votre-calendar-id@group.calendar.google.com",
            }}
            eventClick={(info) => {
              alert(
                `Rendez-vous : ${info.event.title}\nDébut : ${info.event.start}`
              );
            }}
            nowIndicator={true}
            weekends={true}
            views={{
              timeGridWeek: {
                titleFormat: {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              },
            }}
            dayHeaderClassNames="bg-blue-600 text-white"
            contentHeight="auto"
            dayMaxEvents={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
