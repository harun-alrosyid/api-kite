import { ChevronRight, File, Folder, MoreHorizontal } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from './dropdown-menu';
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from './sidebar';

function TreeMenu({
  item,
}: {
  item: string | Array<string | Array<string | Array<string | Array<string>>>>;
}) {
  const [name, ...items] = Array.isArray(item) ? item : [item];
  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >
        <DropdownMenu>
          <File />
          {name}
          <DropdownMenuTrigger asChild>
            <MoreHorizontal className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={"right"}
            align={"start"}
            className="min-w-56 rounded-lg"
          >
            <DropdownMenuItem asChild>
              <a href={"item.url"}>{"item"}</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <DropdownMenu>
              <ChevronRight className="transition-transform" />
              <Folder />
              {name}
              <DropdownMenuTrigger asChild>
                <MoreHorizontal className="ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side={"right"}
                align={"start"}
                className="min-w-56 rounded-lg"
              >
                <DropdownMenuItem asChild>
                  <a href={"item.url"}>{"item"}</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="pr-0 mr-0">
          <SidebarMenuSub className="pr-0 mr-0">
            {items.map((subItem, index) => (
              <TreeMenu key={index} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

export default TreeMenu;
