import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { CommandMenu } from './CommandMenu';

export default function Header() {
  return (
    <header className="relative">
      <div className="flex items-center justify-between px-2 py-2">
        <h1>GamepiA</h1>
        {/* TODO: Input */}
        <CommandMenu />

        <ThemeToggle />
      </div>
    </header>
  );
}
