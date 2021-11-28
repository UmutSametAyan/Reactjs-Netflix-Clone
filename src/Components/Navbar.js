import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Smiles from '../smilesn.png'
import netLogo from '../netlogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const styles = {
  navigationBar:{
    background:"#141414",
    height:68,
    boxShadow:"none"
  },
  smiles:{
    width:32,
    borderRadius:5,
    marginTop:5
  },
  IconDown:{
    marginLeft:3,
    fontSize:20
  },
  logo:{
    width:93,
    marginTop:5
  },
  mLeft:{
    marginLeft:35,
    marginRight:32
  },
  menuItems:{
    fontSize:14,
    paddingLeft:21,
  },
  menuFirst:{
    marginLeft:44,fontSize:14,color:"#e5e5e5"
  },
  links:{
    textDecoration:"none",
    paddingTop:4
  },
  badge:{
  marginTop:7,

  },
  notifications:{
  fontSize:28,
  }
}

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon  />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style = {styles.navigationBar} position="static">
        <Toolbar className = "m-left" style = {styles.mLeft}>
            <img className = "logo" alt = "logo" src = {netLogo} style = {styles.logo}/>
     <NavLink to = "/" activeClassName = "active" className = "menu-item" style = {styles.links} > <span style = {styles.menuFirst}>Ana Sayfa</span> </NavLink>
     <NavLink to = "/watchagain"  activeClassName = "active"  className = "menu-item" style = {styles.links}>  <span style = {styles.menuItems}>Yeniden İzle</span> </NavLink>
     <NavLink to = "/Series"  activeClassName = "active" style = {styles.links}> <span  className = "menu-item" style = {styles.menuItems}>Diziler</span> </NavLink>
     <NavLink to = "/Films"  activeClassName = "active" style = {styles.links}> <span  className = "menu-item" style = {styles.menuItems}>Filmler</span> </NavLink>
     <NavLink to = "/Newpopular"  activeClassName = "active" style = {styles.links}> <span  className = "menu-item" style = {styles.menuItems}>Yeni ve Popüler</span> </NavLink>
     <NavLink to = "/mylist"  activeClassName = "active"  className = "menu-item" style = {styles.links} > <span style = {styles.menuItems}>Listem</span> </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge  color="error">
                <SearchIcon style = {{marginTop:7}} />
              </Badge>
            </IconButton>
            <IconButton>
              <span style = {{color:"white",fontSize:14,marginTop:6}}>Çocuk</span>
              </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge style = {styles.badge} badgeContent={17} color="error">
                <NotificationsIcon style = {styles.notifications} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img alt = "auth" style = {styles.smiles} src = {Smiles} />
              <KeyboardArrowDownIcon style = {styles.IconDown}/>

            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}