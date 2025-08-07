import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { SidebarMenuButton, SidebarMenuSub } from '@/components/ui/sidebar';

import TreeMenu, { Item } from '../..';
import DropDownItem from '../dropdownItem';

function CollapsibleContainer({
  label,
  item,
}: {
  label: string;
  item?: Item[];
}) {
  return (
    <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
      <CollapsibleTrigger asChild>
        <SidebarMenuButton>
          <ChevronRight className="transition-transform" />
          <DropDownItem label={label} />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      {item && item?.length > 0 && (
        <CollapsibleContent className="pr-0 mr-0">
          <SidebarMenuSub className="pr-0 mr-0">
            {item.map((child, idx) => (
              <TreeMenu key={idx} item={child} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

export default CollapsibleContainer;
