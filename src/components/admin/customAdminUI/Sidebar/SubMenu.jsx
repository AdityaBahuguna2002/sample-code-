"use client";

import { List, ListItemText, ListItemButton } from "@mui/material";
import Link from "next/link";

const routeMap = {
  "All Posts": "allItem",
  "Add Posts": "addItem",
  "Category": "category",
  "Profile": "profile",
  "Settings": "settings",
  "Logout": "logout",
};

const SubMenu = ({ item, tags }) => {
  const path = routeMap[item] || "/";
  const basePath = `/admin/${tags}`;
  const formattedPath = `${basePath.replace(/\/$/, "")}/${path}`;

  return (
    <List component="div" disablePadding>
      <Link href={formattedPath} passHref legacyBehavior>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary={item} />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default SubMenu;
