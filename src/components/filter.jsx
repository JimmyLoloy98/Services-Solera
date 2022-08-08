import React, { useState } from "react";

const categories = [
  { id: "A", name: "Autos" },
  { id: "S", name: "Salud" },
  { id: "H", name: "Hogar" },
];

export default function Filter({ menuFilter }) {
  return (
    <nav className="py-3 px-6 my-6 w-full bg-gray-100">
      <ul className="flex gap-4">
        <li>
          <button
            onClick={() => menuFilter(null)}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Todos
          </button>
        </li>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => menuFilter(category.id)}
                className="text-gray-600 hover:text-gray-900 active:text-gray-900 cursor-pointer"
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
