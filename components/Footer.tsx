import React from "react";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <p className="text-center border-t border-border py-5 text-sm text-gray-500">
            © Copyright {new Date().getFullYear()} BrewCraft. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
