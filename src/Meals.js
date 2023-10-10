import { useState } from "react";
import { MealButton } from "./MealButton";

export function Meals() {
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);

  return (
    <div className="flex w-full flex-col items-center justify-center pt-3">
      <h3 className="pb-1 text-3xl">MEALS</h3>
      {morning && afternoon && evening ? (
        <div
          style={{
            border: "4px dashed #181b1e",
          }}
          className="bg-achieved flex h-32 flex-col justify-center gap-2 rounded-xl px-8"
        >
          <p className="text-2xl">Achievment unlocked! ⭐</p>
          <p className="text-4xl">🐱‍🏍 Full belly secured 🐱‍🏍</p>
        </div>
      ) : (
        <div className="flex h-32 justify-between gap-12">
          <span className="flex flex-col justify-center gap-1">
            <p className="flex justify-center text-2xl">MORNING</p>
            <MealButton state={morning} onSetState={setMorning} />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="flex justify-center text-2xl">AFTERNOON</p>
            <MealButton state={afternoon} onSetState={setAfternoon} />
          </span>
          <span className="flex flex-col justify-center gap-1">
            <p className="flex justify-center text-2xl">EVENING</p>
            <MealButton state={evening} onSetState={setEvening} />
          </span>
        </div>
      )}
    </div>
  );
}
