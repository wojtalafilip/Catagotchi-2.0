export function ShoppingListItem({ item, items, onRemoveItem, onMarkAsDone }) {
  const lastItem = items.indexOf(item) + 1 === items.length;

  return (
    <li
      className={`flex items-center justify-between ${
        lastItem ? "" : "border-b-2"
      } p-2 text-xl`}
    >
      <div className="flex items-center gap-3">
        <input
          className="h-6 w-6 appearance-none rounded-md border-2 checked:bg-primary"
          style={{ border: "3px dashed #181b1e" }}
          type="checkbox"
          onChange={() => onMarkAsDone(item.id)}
        ></input>
        <div className="flex items-center gap-2">
          <p className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-200">
            {item.quantity}
          </p>
          <p
            className={`flex w-32 items-center break-all ${
              item.done ? "italic text-done line-through" : ""
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
      <button
        style={{ border: "3px dashed #181b1e" }}
        className="h-6 w-6 rounded-md bg-tertiary text-sm"
        onClick={() => onRemoveItem(item.id)}
      >
        ✖
      </button>
    </li>
  );
}
