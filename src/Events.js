import { useState } from "react";
import { EventItem } from "./EventItem";
import { EventsNav } from "./EventsNav";

const dayNow = new Date().getDate();
const monthNow = new Date().getMonth();
const yearNow = new Date().getFullYear();
const listOfYears = Array.from({ length: 11 }, (_, i) => 2023 + i);
const listOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function listOfDays(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

export function Events() {
  const [events, setEvents] = useState([]);
  const [eventDescription, setEventDescription] = useState(``);
  const [eventDay, setEventDay] = useState(dayNow);
  const [eventMonth, setEventMonth] = useState(listOfMonths[monthNow]);
  const [eventYear, setEventYear] = useState(yearNow);

  function handleAddEvent() {
    const eventDate = new Date(
      `${eventYear}-${eventMonth}-${eventDay}`,
    ).valueOf();
    const dateNow = new Date(
      `${yearNow}-${monthNow + 1}-${dayNow}T00:00:00`,
    ).valueOf();

    if (eventDescription === ``) return;
    if (dateNow - eventDate > 0) return;

    const id = Date.now();
    const event = {
      eventDescription,
      eventDay: eventDay,
      eventMonth: listOfMonths.indexOf(eventMonth),
      eventYear: eventYear,
      id,
    };
    setEvents([...events, event]);
    setEventDescription(``);
    setEventDay(dayNow);
    setEventMonth(listOfMonths[monthNow]);
    setEventYear(yearNow);
  }

  function handleRemoveItem(id) {
    const newArr = events.filter((event) => event.id !== id);
    setEvents(newArr);
  }

  return (
    <div className="w-112 overflow-hidden rounded-xl bg-bg">
      <h2 className="flex items-center justify-center bg-primary p-1 text-4xl">
        EVENTS
      </h2>
      <EventsNav
        listOfDays={listOfDays}
        listOfMonths={listOfMonths}
        listOfYears={listOfYears}
        monthNow={monthNow}
        yearNow={yearNow}
        eventDescription={eventDescription}
        setEventDescription={setEventDescription}
        eventDay={eventDay}
        setEventDay={setEventDay}
        eventMonth={eventMonth}
        setEventMonth={setEventMonth}
        eventYear={eventYear}
        setEventYear={setEventYear}
        onAddEvent={handleAddEvent}
      />
      <ul className="no-scrollbar mx-4 h-container overflow-scroll overflow-x-hidden border-b-2 border-t-2">
        {events.map((e) => (
          <EventItem
            key={e.id}
            event={e}
            events={events}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
}
