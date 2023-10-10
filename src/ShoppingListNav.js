export function ShoppingListNav({
  quantity,
  description,
  setQuantity,
  setDescription,
  onAddItem,
}) {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex justify-between">
        <select
          style={{ border: "3px dashed #181b1e" }}
          className="rounded-xl px-1 text-xl ring-opacity-0 focus:outline-none"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          placeholder="Item..."
          className="w-9/12 rounded-xl bg-secondary px-3 text-xl focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <button
        style={{ border: "3px dashed #181b1e" }}
        className="mt-4 w-full rounded-xl bg-secondary text-2xl"
        onClick={onAddItem}
      >
        + ADD ITEM
      </button>
    </div>
  );
}
