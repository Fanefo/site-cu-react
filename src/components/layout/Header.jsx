import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useCustomTheme();

  const menuItems = [
    { title: 'Acasă', path: '/' },
    { title: 'Terapii', path: '/terapii' },
    { title: 'Vezi Programări', path: '/appointments' }
  ];

  const rightMenuItems = [
    { title: 'Cont', path: '/account' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (path) => {
    setMobileMenuOpen(false);
    if (path.includes('#')) {
      const element = document.querySelector(path.split('#')[1]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const MotionLink = motion(Link);

  return (
    <AppBar position="fixed" className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Toolbar>
        <Box className="logo-container">
          <MotionLink to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo-placeholder.png" 
              alt="FizioMed Logo" 
              className="logo"
            />
          </MotionLink>
        </Box>

        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton 
              onClick={toggleDarkMode}
              sx={{ 
                color: '#2196f3',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.08)'
                }
              }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              sx={{ 
                color: '#2196f3',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.08)'
                }
              }}
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileMenuOpen(true)}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              classes={{ paper: 'mobile-menu' }}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem 
                    button 
                    key={item.title}
                    onClick={() => handleMenuClick(item.path)}
                    selected={location.pathname === item.path}
                    sx={{
                      color: '#2196f3',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(33, 150, 243, 0.1) !important',
                        color: '#2196f3'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.title}
                      primaryTypographyProps={{
                        sx: { color: 'inherit', fontWeight: 500 }
                      }}
                    />
                  </ListItem>
                ))}
                {rightMenuItems.map((item) => (
                  <ListItem 
                    button 
                    key={item.title}
                    onClick={() => handleMenuClick(item.path)}
                    selected={location.pathname === item.path}
                    sx={{
                      color: '#2196f3',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(33, 150, 243, 0.1) !important',
                        color: '#2196f3'
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.title}
                      primaryTypographyProps={{
                        sx: { color: 'inherit', fontWeight: 500 }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Box className="desktop-menu">
              {menuItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: '#2196f3',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.08)'
                      }
                    }}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.title}
                  </Button>
                </motion.div>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box className="right-menu">
              <IconButton 
                onClick={toggleDarkMode} 
                sx={{ 
                  color: '#2196f3',
                  marginRight: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(33, 150, 243, 0.08)'
                  }
                }}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              {rightMenuItems.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: '#2196f3',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.08)'
                      }
                    }}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.title}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
