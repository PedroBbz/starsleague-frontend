import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenuOpen = (setAnchor) => (event) => setAnchor(event.currentTarget);
  const handleMenuClose = (setAnchor) => () => setAnchor(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textDecoration: 'none', color: 'inherit' }}>
            LOGO
          </Typography>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleMenuOpen(setAnchorElNav)}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleMenuClose(setAnchorElNav)}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleMenuClose(setAnchorElNav)}>{page}</MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleMenuClose(setAnchorElNav)} sx={{ color: 'white' }}>
                {page}
              </Button>
            ))}
          </Box>
          
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleMenuOpen(setAnchorElUser)}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleMenuClose(setAnchorElUser)}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleMenuClose(setAnchorElUser)}>{setting}</MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;