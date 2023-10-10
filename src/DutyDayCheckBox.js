export function DutyDayCheckBox({ onDutyDays, value, index, children }) {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-xl text-4xl"
      style={{
        backgroundColor: index === 0 ? "#bcecde" : "#f5f5f5",
        border: "4px dashed #181b1e",
      }}
      value={value}
      onClick={(e) => onDutyDays(value)}
    >
      {children}
    </div>
  );
}
