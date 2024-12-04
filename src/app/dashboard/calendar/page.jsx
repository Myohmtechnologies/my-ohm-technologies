'use client';
import '../../../styles/dashboard.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from 'react';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('/api/calendar');
      const data = await response.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />;
};

export default Calendar;
