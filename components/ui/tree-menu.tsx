import { ChevronRight, Folder, MoreHorizontal } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from './dropdown-menu';
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from './sidebar';

interface IInfo {
  _postman_id: string;
  name: string;
  schema: string;
  _exporter_id: string;
  _collection_link: string;
}

interface AuthBearer {
  key: string;
  value: string;
  type: string;
}

interface Auth {
  type: string;
  bearer: AuthBearer[];
}

interface RequestHeader {
  key: string;
  value: string;
  type?: string;
  disabled?: boolean;
}

interface Request {
  auth?: Auth;
  method: string;
  header?: RequestHeader[];
}

interface Url {
  raw: string;
  protocol: string;
  host: string[];
  path: string[];
}

interface OriginalRequestBodyOptions {
  raw: {
    language: string;
  };
}

interface OriginalRequestBody {
  mode: string;
  raw: string;
  options: OriginalRequestBodyOptions;
}

interface OriginalRequest {
  method: string;
  header?: RequestHeader[];
  body: OriginalRequestBody;
  url: Url;
}

interface ResponseHeader {
  key: string;
  value: string;
  type?: string;
  disabled?: boolean;
}

interface Response {
  name?: string;
  status?: string;
  code?: number;
  _postman_previewlanguage?: string;
  originalRequest?: OriginalRequest;
  header?: ResponseHeader[];
  cookie: never[];
  body?: string;
}

interface Item {
  name: string;
  request?: Request;
  header?: RequestHeader[];
  response?: Response[];
}

interface CollectionItem {
  info?: IInfo;
  item?: Item[];
}

interface TreeMenuProps {
  item: CollectionItem;
}

function TreeMenu({ item }: TreeMenuProps) {

  if (!("info" in item)) {
    const data = item as Item;
 
    if (!("request" in data)) {

      const datas = item as Item;
      return (
        <Collapsible
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        >
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <DropdownMenu>
                <ChevronRight className="transition-transform" />
                {datas.name}
                <DropdownMenuTrigger asChild>
                  <MoreHorizontal className="absolute right-0" />
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
              {item?.item &&
                item?.item?.length > 0 &&
                item.item.map((subItem, index) => (
                  <TreeMenu key={index} item={subItem as CollectionItem} />
                ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <SidebarMenuButton
        className="data-[active=true]:bg-transparent truncate"
      >
        <DropdownMenu>
          {`${data.request?.method} ${data.name}`}
          <DropdownMenuTrigger asChild>
            <MoreHorizontal className=" absolute right-0" />
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
        // defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <DropdownMenu>
              <ChevronRight className="transition-transform" />
              {item.info?.name}
              <DropdownMenuTrigger asChild>
                <MoreHorizontal className="absolute right-0" />
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
            {item?.item &&
              item?.item?.length > 0 &&
              item.item.map((subItem, index) => (
                <TreeMenu key={index} item={subItem as CollectionItem} />
              ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

export default TreeMenu;
