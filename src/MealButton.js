export function MealButton({ state, onSetState }) {
  return (
    <button
      style={{
        backgroundColor: !state ? `#fdb8c2` : `#bcecde`,
        border: "4px dashed #181b1e",
      }}
      className="rounded-xl p-2 text-5xl"
      onClick={() => onSetState(!state)}
    >
      <p className="p-2">{!state ? `😿` : `😻`}</p>
    </button>
  );
}
