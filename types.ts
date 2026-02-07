import React from 'react';

export interface MenuItem {
  label: string;
  action?: () => void;
}

export interface ToolItem {
  icon: React.ElementType;
  label?: string;
  active?: boolean;
  color?: string;
}