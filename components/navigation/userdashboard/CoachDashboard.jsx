'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

function ResponsiveDrawer({ main, tree, ...props }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawer = (
    <Box overflow={'auto'}>
      <Box marginTop={2} marginBottom={2}>
        {tree}
      </Box>
      
      <Divider />
      <List>
        {[['Add Class', '/coaches/addclass']].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text[1]} style={{ width: "100%" }}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <AddBoxIcon />}
              </ListItemIcon>
              <ListItemText primary={text[0]} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Box display={{ xs: "block", sm: "block", md: "none" }} sx={{ position: "absolute", top: 64 }}>
          <Button onClick={toggleDrawer(true)}>Menu</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%", // Set the height here
              position: "fixed", // Ensure it does not push content
              top: 64, // Adjust as necessary, assuming a fixed AppBar height },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
      {main ? main : null}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;