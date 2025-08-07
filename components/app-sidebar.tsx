"use client";

import { ChevronRight, Command, File, Folder, Inbox } from 'lucide-react';
import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader,
    SidebarInput, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, useSidebar
} from '@/components/ui/sidebar';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import TreeMenu from './ui/tree-menu';

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Collections",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Environments",
      url: "#",
      icon: File,
      isActive: false,
    },
  ],
  tree: [
    [
      "appssss      sssssssssssssssss",
      [
        "api",
        ["hello", ["route.ts"]],
        "page.tsx",
        "layout.tsx",
        ["blog", ["page.tsx"]],
      ],
    ],
    [
      "components",
      ["ui", "button.tsx", "card.tsx"],
      "header.tsx",
      "footer.tsx",
    ],
    ["lib", ["util.ts"]],
    ["public", "favicon.ico", "vercel.svg"],
    ".eslintrc.json",
    ".gitignore",
    "next.config.js",
    "tailwind.config.js",
    "package.json",
    "README.md",
  ],
};

const datas = {
  info: {
    _postman_id: "210be4cf-c1c6-4916-bb45-baee784414b9",
    name: "fcm-firebase Copy",
    schema:
      "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    _exporter_id: "45627368",
    _collection_link:
      "https://senyum-mobile.postman.co/workspace/Senyum-Mock-Api~4b0e60fa-cb2f-47bf-a23f-dbc4d78903e2/collection/45627368-210be4cf-c1c6-4916-bb45-baee784414b9?action=share&source=collection_link&creator=45627368",
  },
  item: [
    {
      name: "New Folder",
      item: [
        {
          name: "New Folder",
          item: [
            {
              name: "New Request",
              request: {
                method: "GET",
                header: [],
              },
              response: [],
            },
          ],
        },
        {
          name: "send notification",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{vault:firebase-cloud-messaging-api-key}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [
              {
                key: "Authorization",
                value:
                  "key = AAAAXsYOzmU:APA91bGUJfzyV77QO3uSFp5aWkb4Pm2TOk-d9xI0ddq0ZfC3-R2Z1drmU4rrlw0HlE50hqb1swmXGxn9n00dvnM7l9J3OqrXxefGXpHCR84xyrPHeX-TsuyQEHL4kRK3AVAGotexSDcw",
                type: "text",
                disabled: true,
              },
              {
                key: "Content-Type",
                value: "application/json",
                type: "text",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n "to" : "eryqlqHxSEmmfct5Z4CkHK:APA91bFyXrV_bFkc9y4TnYSAboKyYJWqiNJxcjZdphXgubwwRlWs9L2XRiP9jruKtSHDjOBexUOA6A0NWuPVs3jJx3p7Fqg-k1gRJY-s9CheGCha9QYwfrGA_njqhtFbmWf8VzkJjg4M",\n "data" : {\n     "body" : "is Body of Your Notification in Data",\n     "title": " Title in background",\n     "type" : "Value for key_1",\n     "targetId" : "oke4",\n     "applicationId":"",\n     "productId":"simpedesUMi"\n }\n}',
              options: {
                raw: {
                  language: "json",
                },
              },
            },
            url: {
              raw: "https://fcm.googleapis.com/v1/projects/ddb-senyum-firebase-dev/messages:send",
              protocol: "https",
              host: ["fcm", "googleapis", "com"],
              path: [
                "v1",
                "projects",
                "ddb-senyum-firebase-dev",
                "messages:send",
              ],
            },
          },
          response: [
            {
              name: "send notification",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Authorization",
                    value:
                      "key = AAAAXsYOzmU:APA91bGUJfzyV77QO3uSFp5aWkb4Pm2TOk-d9xI0ddq0ZfC3-R2Z1drmU4rrlw0HlE50hqb1swmXGxn9n00dvnM7l9J3OqrXxefGXpHCR84xyrPHeX-TsuyQEHL4kRK3AVAGotexSDcw",
                    type: "text",
                    disabled: true,
                  },
                  {
                    key: "Content-Type",
                    value: "application/json",
                    type: "text",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n "to" : "eryqlqHxSEmmfct5Z4CkHK:APA91bFyXrV_bFkc9y4TnYSAboKyYJWqiNJxcjZdphXgubwwRlWs9L2XRiP9jruKtSHDjOBexUOA6A0NWuPVs3jJx3p7Fqg-k1gRJY-s9CheGCha9QYwfrGA_njqhtFbmWf8VzkJjg4M",\n "data" : {\n     "body" : "is Body of Your Notification in Data",\n     "title": " Title in background",\n     "type" : "Value for key_1",\n     "targetId" : "oke4",\n     "applicationId":"",\n     "productId":"simpedesUMi"\n }\n}',
                  options: {
                    raw: {
                      language: "json",
                    },
                  },
                },
                url: {
                  raw: "https://fcm.googleapis.com/v1/projects/ddb-senyum-firebase-dev/messages:send",
                  protocol: "https",
                  host: ["fcm", "googleapis", "com"],
                  path: [
                    "v1",
                    "projects",
                    "ddb-senyum-firebase-dev",
                    "messages:send",
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "",
              header: [
                {
                  key: "WWW-Authenticate",
                  value:
                    'Bearer realm="https://accounts.google.com/", error="invalid_token"',
                },
                {
                  key: "Vary",
                  value: "Origin",
                },
                {
                  key: "Vary",
                  value: "X-Origin",
                },
                {
                  key: "Vary",
                  value: "Referer",
                },
                {
                  key: "Content-Type",
                  value: "application/json; charset=UTF-8",
                },
                {
                  key: "Content-Encoding",
                  value: "gzip",
                },
                {
                  key: "Date",
                  value: "Thu, 07 Aug 2025 08:04:20 GMT",
                },
                {
                  key: "Server",
                  value: "scaffolding on HTTPServer2",
                },
                {
                  key: "X-XSS-Protection",
                  value: "0",
                },
                {
                  key: "X-Frame-Options",
                  value: "SAMEORIGIN",
                },
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "Alt-Svc",
                  value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
                },
                {
                  key: "Transfer-Encoding",
                  value: "chunked",
                },
              ],
              cookie: [],
              body: '{\n    "error": {\n        "code": 401,\n        "message": "Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.",\n        "status": "UNAUTHENTICATED"\n    }\n}',
            },
          ],
        },
      ],
    },
    {
      name: "New Folder",
      item: [
        {
          name: "New Request",
          request: {
            method: "GET",
            header: [],
          },
          response: [],
        },
      ],
    },
    {
      name: "New Request",
      request: {
        method: "GET",
        header: [
          {
            key: "Authorization",
            value:
              "key = AAAAXsYOzmU:APA91bGUJfzyV77QO3uSFp5aWkb4Pm2TOk-d9xI0ddq0ZfC3-R2Z1drmU4rrlw0HlE50hqb1swmXGxn9n00dvnM7l9J3OqrXxefGXpHCR84xyrPHeX-TsuyQEHL4kRK3AVAGotexSDcw",
            type: "text",
            disabled: true,
          },
          {
            key: "Content-Type",
            value: "application/json",
            type: "text",
          },
        ],
        body: {
          mode: "raw",
          raw: '{\n "to" : "eryqlqHxSEmmfct5Z4CkHK:APA91bFyXrV_bFkc9y4TnYSAboKyYJWqiNJxcjZdphXgubwwRlWs9L2XRiP9jruKtSHDjOBexUOA6A0NWuPVs3jJx3p7Fqg-k1gRJY-s9CheGCha9QYwfrGA_njqhtFbmWf8VzkJjg4M",\n "data" : {\n     "body" : "is Body of Your Notification in Data",\n     "title": " Title in background",\n     "type" : "Value for key_1",\n     "targetId" : "oke4",\n     "applicationId":"",\n     "productId":"simpedesUMi"\n }\n}',
          options: {
            raw: {
              language: "json",
            },
          },
        },
      },
      response: [
        {
          name: "send notification",
          originalRequest: {
            method: "POST",
            header: [
              {
                key: "Authorization",
                value:
                  "key = AAAAXsYOzmU:APA91bGUJfzyV77QO3uSFp5aWkb4Pm2TOk-d9xI0ddq0ZfC3-R2Z1drmU4rrlw0HlE50hqb1swmXGxn9n00dvnM7l9J3OqrXxefGXpHCR84xyrPHeX-TsuyQEHL4kRK3AVAGotexSDcw",
                type: "text",
                disabled: true,
              },
              {
                key: "Content-Type",
                value: "application/json",
                type: "text",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n "to" : "eryqlqHxSEmmfct5Z4CkHK:APA91bFyXrV_bFkc9y4TnYSAboKyYJWqiNJxcjZdphXgubwwRlWs9L2XRiP9jruKtSHDjOBexUOA6A0NWuPVs3jJx3p7Fqg-k1gRJY-s9CheGCha9QYwfrGA_njqhtFbmWf8VzkJjg4M",\n "data" : {\n     "body" : "is Body of Your Notification in Data",\n     "title": " Title in background",\n     "type" : "Value for key_1",\n     "targetId" : "oke4",\n     "applicationId":"",\n     "productId":"simpedesUMi"\n }\n}',
              options: {
                raw: {
                  language: "json",
                },
              },
            },
            url: {
              raw: "https://fcm.googleapis.com/v1/projects/ddb-senyum-firebase-dev/messages:send",
              protocol: "https",
              host: ["fcm", "googleapis", "com"],
              path: [
                "v1",
                "projects",
                "ddb-senyum-firebase-dev",
                "messages:send",
              ],
            },
          },
          status: "Unauthorized",
          code: 401,
          _postman_previewlanguage: "",
          header: [
            {
              key: "WWW-Authenticate",
              value:
                'Bearer realm="https://accounts.google.com/", error="invalid_token"',
            },
            {
              key: "Vary",
              value: "Origin",
            },
            {
              key: "Vary",
              value: "X-Origin",
            },
            {
              key: "Vary",
              value: "Referer",
            },
            {
              key: "Content-Type",
              value: "application/json; charset=UTF-8",
            },
            {
              key: "Content-Encoding",
              value: "gzip",
            },
            {
              key: "Date",
              value: "Thu, 07 Aug 2025 08:04:20 GMT",
            },
            {
              key: "Server",
              value: "scaffolding on HTTPServer2",
            },
            {
              key: "X-XSS-Protection",
              value: "0",
            },
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "Alt-Svc",
              value: 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
            },
            {
              key: "Transfer-Encoding",
              value: "chunked",
            },
          ],
          cookie: [],
          body: '{\n    "error": {\n        "code": 401,\n        "message": "Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.",\n        "status": "UNAUTHENTICATED"\n    }\n}',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);

  const { toggleSidebar, setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" onClick={toggleSidebar} />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);

                        setOpen(true);
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              My Workspace
            </div>
          </div>
        </SidebarHeader>
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-foreground text-base font-medium">
              {activeItem?.title}
            </div>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              <SidebarMenu>
                <TreeMenu item={datas} />
              </SidebarMenu>
              {/* {mails.map((mail) => (
                <a
                  href="#"
                  key={mail.email}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                    {mail.teaser}
                  </span>
                </a>
              ))} */}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
