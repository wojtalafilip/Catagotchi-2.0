export function EventsNav({
  listOfDays,
  listOfMonths,
  listOfYears,
  monthNow,
  yearNow,
  eventDescription,
  setEventDescription,
  eventDay,
  setEventDay,
  eventMonth,
  setEventMonth,
  eventYear,
  setEventYear,
  onAddEvent,
}) {
  return (
    <>
      <div className="flex gap-4 p-4">
        <div className="flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder="Event..."
            className="h-11 w-full rounded-xl bg-secondary px-3 text-xl focus:outline-none"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          ></input>
          <div className="flex h-11 gap-2">
            <select
              style={{ border: "3px dashed #181b1e" }}
              className="rounded-xl px-1 text-xl ring-opacity-0 focus:outline-none"
              value={eventDay}
              onChange={(e) => setEventDay(e.target.value)}
            >
              {Array.from(
                { length: listOfDays(monthNow, yearNow) },
                (_, i) => i + 1,
              ).map((d) => (
                <option value={d} key={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              style={{ border: "3px dashed #181b1e" }}
              className="rounded-xl px-1 text-xl ring-opacity-0 focus:outline-none"
              value={eventMonth}
              onChange={(e) => setEventMonth(e.target.value)}
            >
              {listOfMonths.map((m) => (
                <option value={m} key={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              style={{ border: "3px dashed #181b1e" }}
              className="rounded-xl px-1 text-xl ring-opacity-0 focus:outline-none"
              value={eventYear}
              onChange={(e) => setEventYear(e.target.value)}
            >
              {listOfYears.map((y) => (
                <option value={y} key={y}>
                  {y}
                </option>
              ))}
            </select>
            <button
              style={{ border: "3px dashed #181b1e" }}
              className="w-full rounded-xl bg-secondary text-2xl"
              onClick={onAddEvent}
            >
              + ADD EVENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
