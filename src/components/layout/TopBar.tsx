'use client';

import { PanelLeftClose, PanelLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useSidebar } from '@/contexts/SidebarContext';

export function TopBar() {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center justify-between h-12 px-4 border-b border-border bg-card/50 backdrop-blur-sm">
      {/* Left side - Sidebar Toggle + Theme Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted transition-colors"
          title={sidebarOpen ? 'Collapse sidebar (⌘B)' : 'Expand sidebar (⌘B)'}
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="w-4 h-4 text-muted-foreground" />
          ) : (
            <PanelLeft className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        <ThemeToggle />
      </div>

      {/* Right side - empty for now */}
      <div />
    </div>
  );
}
