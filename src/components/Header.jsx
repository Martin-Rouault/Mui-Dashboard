import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Menu } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";

const drawerWidth = 80;

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Tableau de bord
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;