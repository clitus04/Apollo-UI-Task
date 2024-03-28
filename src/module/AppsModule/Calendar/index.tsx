import "./index.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card } from "primereact/card";

function Calendar() {
  const events = [
    {
      title: "Event 1",
      start: "2024-03-01",
      end: "2024-03-02",
    },
    {
      title: "Event 2",
      start: "2024-03-05",
      end: "2024-03-07",
    },
  ];
  return (
    <Card className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        events={events}
        editable
      />
    </Card>
  );
}

export default Calendar;
