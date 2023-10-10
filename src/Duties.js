import { useState } from "react";
import { Other } from "./Other";
import { Meals } from "./Meals";

export function Duties() {
  const [dutyDays, setDutyDays] = useState(``);
  const [water, setWater] = useState(false);
  const [litterbox, setLitterbox] = useState(false);

  function handleAddDays(days) {
    const result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }

  function handleDutyDays(value) {
    if ((value / 2).toString().length === 3) setDutyDays(false);
    if ((value / 2).toString().length === 1) setDutyDays(true);
    if ((value / 2).toString().length === 3 && dutyDays === false)
      setDutyDays("");
    if ((value / 2).toString().length === 1 && dutyDays === true)
      setDutyDays("");
    setWater(false);
    setLitterbox(false);
  }

  return (
    <div className="flex w-160 flex-col items-center justify-center overflow-hidden rounded-xl bg-bg ">
      <h2 className="flex w-full justify-center bg-primary p-1 text-4xl">
        DUTIES
      </h2>
      <Meals />
      <Other
        dutyDays={dutyDays}
        water={water}
        setWater={setWater}
        litterbox={litterbox}
        setLitterbox={setLitterbox}
        onAddDays={handleAddDays}
        onDutyDays={handleDutyDays}
      />
    </div>
  );
}
