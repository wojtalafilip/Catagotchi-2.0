import { Logo } from "./Logo";
import { ShoppingList } from "./ShoppingList";
import { Duties } from "./Duties";
import { Events } from "./Events";

export default function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-tr from-rose-400 to-fuchsia-400">
      <div className="flex flex-row justify-center  gap-5 font-headings text-font 2xl:container">
        <ShoppingList />
        <div className="flex flex-col gap-5">
          <Logo />
          <Duties />
        </div>
        <Events />
      </div>
    </div>
  );
}
