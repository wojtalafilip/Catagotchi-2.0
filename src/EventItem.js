export function EventItem({ event, events, onRemoveItem }) {
  const lastEvent = events.indexOf(event) + 1 === events.length;

  const day = event.eventDay;
  const month = event.eventMonth;
  const year = event.eventYear;

  const eventDate = new Date(
    `${year.toString()}-${(month + 1).toString()}-${day.toString()}`,
  );

  const daysLeft =
    Math.floor((eventDate - new Date()) / 1000 / 60 / 60 / 24) + 1;

  function handleDaysfLeftMessage() {
    let eventDaysLeft;
    if (daysLeft > 1) eventDaysLeft = `${daysLeft} days left`;
    if (daysLeft === 1) eventDaysLeft = `Tommorow`;
    if (daysLeft === 0) eventDaysLeft = `Today`;
    return eventDaysLeft;
  }

  return (
    <li
      className={`text-md flex flex-col gap-1 ${
        lastEvent ? "" : "border-b-2"
      } p-2`}
    >
      <div className="flex items-center justify-between">
        <p className="w-5/6 break-all text-2xl">{event.eventDescription}</p>
        <button
          onClick={() => onRemoveItem(event.id)}
          style={{ border: "3px dashed #181b1e" }}
          className="h-6 w-6 rounded-md bg-tertiary text-sm"
        >
          ✖
        </button>
      </div>
      <div className="flex justify-between">
        <p className="rounded-lg bg-secondary px-2 tracking-wider">
          {handleDaysfLeftMessage()}
        </p>
        <p className="rounded-lg bg-secondary px-2 tracking-wider">
          {day.toString().padStart(2, "0")}/
          {(month + 1).toString().padStart(2, "0")}/{year}
        </p>
      </div>
    </li>
  );
}
