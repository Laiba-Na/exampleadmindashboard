import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { EventModals, ConfirmDeleteModal } from "../../Components/modals";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // When a date is clicked
  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setAddEventOpen(true);
  };

  // When an event is clicked
  const handleEventClick = (selected) => {
    setSelectedEvent(selected.event);
    setDeleteModalOpen(true);
  };

  // Save new event from modal
  const handleSaveEvent = (title) => {
    const calendarApi = selectedDate.view.calendar;
    calendarApi.unselect();
    calendarApi.addEvent({
      id: `${selectedDate.dateStr}-${title}`,
      title,
      start: selectedDate.startStr,
      end: selectedDate.endStr,
      allDay: selectedDate.allDay,
    });
    setAddEventOpen(false);
  };

  // Delete event from modal
  const handleDeleteEvent = () => {
    selectedEvent.remove();
    setDeleteModalOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.Secondary[900]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.Third[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar Main View */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2025-8-01" },
              { id: "5678", title: "Timed event", date: "2025-8-02" },
              { id: "91011", title: "Another event", date: "2025-8-03" },
            ]}
          />
        </Box>
      </Box>

      {/* Modals */}
      <EventModals
        open={addEventOpen}
        onClose={() => setAddEventOpen(false)}
        onSave={handleSaveEvent}
      />

      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteEvent}
        eventTitle={selectedEvent?.title}
      />
    </Box>
  );
};

export default Calendar;
