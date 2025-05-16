import { Drawer, Grid, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Add, BarChart, Group, Home, Settings } from "@mui/icons-material";
import { GridView } from "@mui/icons-material";

const drawerWidth = 80;

const Sidebar = () => {
  const icons = [
    { icon: <Home /> },
    { icon: <GridView /> },
    { icon: <Add /> },
    { icon: <Group /> },
    { icon: <BarChart /> },
    { icon: <Settings /> },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          display: "flex",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
