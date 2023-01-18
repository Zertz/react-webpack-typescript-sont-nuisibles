import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="absolute inset-0 flex flex-col gap-2 bg-gray-700 text-gray-300">
      <aside className="flex items-center justify-center gap-2 p-2">
        <Link to="">Accueil</Link>
        <Link to="static">Static import</Link>
        <Link to="dynamic">Dynamic import</Link>
        <Link to="slides">Diapositives</Link>
        <button
          className="rounded border border-gray-300 bg-gray-600 py-1 px-2 transition-colors hover:bg-gray-700"
          onClick={() => setCount((count) => count + 1)}
        >
          {`Count: ${count}!`}
        </button>
      </aside>
      <main className="relative flex-grow">
        <Outlet />
      </main>
    </section>
  );
}
