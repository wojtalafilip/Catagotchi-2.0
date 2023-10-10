import { DutyDaysCheckBoxGrid } from "./DutyDaysCheckboxGrid";

export function Other({
  dutyDays,
  water,
  setWater,
  litterbox,
  setLitterbox,
  onAddDays,
  onDutyDays,
}) {
  function handleDutyMessage() {
    let message;
    if (!water && !litterbox) message = `😼 Ain't no rest for the wicked 😼`;
    if (water && !litterbox) message = `🐱‍👤 Shit happend 🐱‍👤`;
    if (!water && litterbox) message = `🐱‍👓 I'm parched 🐱‍👓`;
    if (water && litterbox) message = `🏆 Purrfect. No duties left! 🏆`;
    return message;
  }

  return (
    <>
      <h3 className="pb-2 pt-4 text-3xl">OTHER</h3>
      <div className="flex h-36 w-11/12 items-center justify-center rounded-xl bg-secondary">
        {dutyDays === `` && (
          <h5 className="text-3xl">Choose duty days pattern below 🐈</h5>
        )}
        {dutyDays === true && (
          <div className="flex flex-col gap-2">
            <p className="flex justify-center text-3xl">
              {handleDutyMessage()}
            </p>
            {water === true && litterbox === true ? (
              ``
            ) : (
              <div className="flex justify-center gap-8 text-2xl">
                <div className="flex items-center gap-2">
                  <input
                    className="checked:bg-achieved h-6 w-6 appearance-none rounded-md border-2 bg-bg"
                    style={{ border: "3px dashed #181b1e" }}
                    onClick={() => setWater(!water)}
                    type="checkbox"
                  ></input>
                  <label>WATER</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="checked:bg-achieved h-6 w-6 appearance-none rounded-md border-2 bg-bg"
                    style={{ border: "3px dashed #181b1e" }}
                    onClick={() => setLitterbox(!litterbox)}
                    type="checkbox"
                  ></input>
                  <label>LITTERBOX</label>
                </div>
              </div>
            )}
          </div>
        )}
        {dutyDays === false && (
          <h5 className="text-3xl">No duties today. See you tommorow! 😸</h5>
        )}
      </div>
      <DutyDaysCheckBoxGrid
        onAddDays={onAddDays}
        onDutyDays={onDutyDays}
        dutyDays={dutyDays}
      />
    </>
  );
}
