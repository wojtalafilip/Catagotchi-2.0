import { DutyDayCheckBox } from "./DutyDayCheckBox";

export function DutyDaysCheckBoxGrid({ dutyDays, onAddDays, onDutyDays }) {
  function handleDutyIconPosition(data) {
    let icon;
    if (dutyDays === ``) icon = null;
    if (dutyDays === true && !data) icon = `🐱`;
    if (dutyDays === false && data) icon = `🐱`;
    return icon;
  }

  return (
    <div className="grid grid-cols-7 gap-x-5 p-6">
      {Array.from({ length: 7 }, (_, i) => i + 1).map((num, i) => (
        <p className="flex justify-center text-2xl" key={num}>
          {onAddDays(i).toLocaleString("en-GB", {
            weekday: "short",
          })}
        </p>
      ))}
      {Array.from({ length: 7 }, (_, i) => i + 1)
        .map((_, i) => ({
          data: ((i + 1) / 2).toString().length === 3 ? false : true,
        }))
        .map((obj, i) => (
          <DutyDayCheckBox
            key={i}
            index={i}
            value={obj.data}
            onDutyDays={onDutyDays}
          >
            {handleDutyIconPosition(obj.data)}
          </DutyDayCheckBox>
        ))}
    </div>
  );
}
