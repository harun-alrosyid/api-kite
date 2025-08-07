
import { SidebarMenuButton, SidebarMenuItem } from '../sidebar';
import CollapsibleContainer from './_components/collapsibleContainer';
import DropDownItem from './_components/dropdownItem';

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

interface OriginalRequestBody {
  mode: string;
  raw: string;
  options: {
    raw: { language: string };
  };
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

export interface Item {
  name: string;
  request?: Request;
  header?: RequestHeader[];
  response?: Response[];
  item?: Item[];
}

interface CollectionItem {
  info?: IInfo;
  item?: Item[];
}

interface TreeMenuProps {
  item: CollectionItem | Item;
}

function TreeMenu({ item }: TreeMenuProps) {
  const isCollection = (i: TreeMenuProps["item"]): i is CollectionItem =>
    "info" in i && !!i.info;

  if (isCollection(item)) {
    return (
      <SidebarMenuItem>
        <CollapsibleContainer
          label={item.info ? item.info.name : ""}
          item={item.item}
        />
      </SidebarMenuItem>
    );
  }
  if (!item.request) {
    return <CollapsibleContainer label={item.name} item={item.item} />;
  }

  return (
    <SidebarMenuButton className="data-[active=true]:bg-transparent truncate">
      <DropDownItem label={`${item.request.method} ${item.name}`} />
    </SidebarMenuButton>
  );
}

export default TreeMenu;
