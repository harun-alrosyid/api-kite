import { MoreHorizontal } from 'lucide-react';
import React from 'react';

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

function DropDownItem({ label }: { label: string }) {
  return (
    <DropdownMenu>
      {label}
      <DropdownMenuTrigger asChild>
        <MoreHorizontal className="absolute right-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="start"
        className="min-w-56 rounded-lg"
      >
        <DropdownMenuItem asChild>
          <a href="#">item</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownItem;
