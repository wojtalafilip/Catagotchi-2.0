import { useState } from "react";
import { ShoppingListItem } from "./ShoppingListItem";
import { ShoppingListNav } from "./ShoppingListNav";

export function ShoppingList() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(``);

  function handleAddItem() {
    if (description === ``) return;
    const id = Date.now();
    const item = {
      quantity,
      description,
      id,
      done: false,
    };
    const sortedItems = [...items, item]
      .slice()
      .sort((a, b) => Number(a.done) - Number(b.done));
    setItems(sortedItems);
    setQuantity(1);
    setDescription(``);
  }

  function handleMarkAsDone(id) {
    const newArr = items.map((obj) =>
      obj.id !== id ? obj : { ...obj, done: !obj.done },
    );
    setItems(newArr.slice().sort((a, b) => Number(a.done) - Number(b.done)));
  }

  function handleRemoveItem(id) {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  }

  function handleRemoveAll() {
    setItems([]);
    setQuantity(1);
    setDescription(``);
  }

  return (
    <div className="flex w-72 flex-col content-between items-center overflow-hidden rounded-xl bg-bg">
      <h2 className="flex w-full items-center justify-center bg-primary p-1 text-4xl">
        SHOPPING LIST
      </h2>
      <ShoppingListNav
        quantity={quantity}
        description={description}
        setDescription={setDescription}
        setQuantity={setQuantity}
        onAddItem={handleAddItem}
      />
      <ul className="no-scrollbar mx-4 h-96 w-64 overflow-scroll overflow-x-hidden border-b-2 border-t-2 pb-4">
        {items.map((item) => (
          <ShoppingListItem
            item={item}
            key={item.id}
            items={items}
            onRemoveItem={handleRemoveItem}
            onMarkAsDone={handleMarkAsDone}
          />
        ))}
      </ul>
      <button
        style={{ border: "3px dashed #181b1e" }}
        className="mt-8 w-64 rounded-xl bg-tertiary  text-2xl"
        onClick={handleRemoveAll}
      >
        REMOVE ALL
      </button>
    </div>
  );
}
