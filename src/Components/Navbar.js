import React,{useState,useEffect} from 'react';
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
import netLogo from '../netlogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const styles = {
  navigationBar:{
    background:"#141414",
    height:68,
    transition:"1s",
    boxShadow:"none",
  },
  navigationBarOnScroll:{
    background:"transparent",
    height:68,
    transition:"1s",
    boxShadow:"none",
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

  menuFirst:{
    marginLeft:25,fontSize:14,color:"#e5e5e5"
  },
  links:{
    textDecoration:"none",
    paddingTop:5,
    fontSize:14,
    paddingLeft:21,
    color:"#e5e5e5"
  },
  badge:{
  marginTop:7,

  },
  notifications:{
  fontSize:28,
  }
}

export default function PrimarySearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [offset, setOffset] = useState(0);
  const [offsetController,setOffSetController] = useState(false);

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

 
  useEffect(() =>{
    isScroll();
  })

  const isScroll = () =>{
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    offset > 1 ? setOffSetController(true) : setOffSetController(false);
  }

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
      <AppBar style = {!offsetController ?  styles.navigationBarOnScroll : styles.navigationBar} position="fixed">
        <Toolbar className = "m-left" style = {styles.mLeft}>
            <img className = "logo" alt = "logo" src = {netLogo} style = {styles.logo}/>
            {props.account.length !== 0 ? 
            <React.Fragment>
            <React.Fragment>
     <NavLink to = "/" activeClassName = "active"  style = {styles.links} > <span style = {styles.menuFirst}>Ana Sayfa</span> </NavLink>
     <NavLink to = "/watchagain"  activeClassName = "active"   style = {styles.links}> Yeniden İzle </NavLink>
     <NavLink to = "/Series"  activeClassName = "active" style = {styles.links}> Diziler </NavLink>
     <NavLink to = "/Films"  activeClassName = "active" style = {styles.links}> Filmler </NavLink>
     <NavLink to = "/Newpopular"  activeClassName = "active" style = {styles.links}> Yeni ve Popüler </NavLink>
     <NavLink to = "/mylist"  activeClassName = "active" style = {styles.links} >Listem </NavLink>
     </React.Fragment>

     <React.Fragment>
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
              <Badge style = {styles.badge} badgeContent={11} color="error">
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
              <img alt = "auth" style = {styles.smiles} src = {props.account.image} />
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
          </React.Fragment>
          </React.Fragment>
     : null }

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}