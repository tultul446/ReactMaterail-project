import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItems = ["About", "Services", "Projects", "Contacts"];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black", borderBottom:"solid 1px fafafa"}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ display: "flex", alignItems: "center",  gap: "20px"}}>
              <Typography variant="h6">
                <img src="./public/logo.png.png" alt="Logo" style={{ height: "100px",width:"120px", alignItems:"center" }} />
              </Typography>
              {menuItems.map((item) => (
                <Button key={item} color="inherit" sx={{alignItems:"end", marginRight:"0px"}} >{item}</Button>
              ))}
              <Button 
                variant="outlined" 
                sx={{ 
                  backgroundColor: "#2AB6911A", 
                  color: '#2AB691', 
                  borderRadius: "10px", 
                  "&:hover": { backgroundColor: "#2AB691", color: '#fff' 

                  } 
                }}
              >
                Sign up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => setOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
