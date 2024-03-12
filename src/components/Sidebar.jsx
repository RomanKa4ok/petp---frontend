import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { SYSTEM_COLORS } from '../constants/styles';

export const Sidebar = () => {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const meny = ['Profile', 'Settings'];
  const DemoMenu = ['All mail', 'Trash', 'Spam'];

  const drawer = (
    <div>
      <b>RC</b>
            DEMO
      <List>
        {meny.map((text, index) => (
          <ListItem key={text} disablePadding>
            <Button color={SYSTEM_COLORS.PRIMARY}>
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {DemoMenu.map((text, index) => (
          <ListItem key={text} disablePadding>
            <Button color={SYSTEM_COLORS.PRIMARY}>
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return <>
    <Drawer
      variant={"temporary"}
      open={mobileOpen}
      onTransitionEnd={handleDrawerTransitionEnd}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
    <Drawer
      variant={"permanent"}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      {drawer}
    </Drawer>
  </>;
};