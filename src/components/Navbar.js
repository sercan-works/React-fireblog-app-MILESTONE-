import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { firebase } from '../helpers/firebase';
import { signOut } from 'firebase/auth';
import { Divider } from '@mui/material';

const pages = [''];
const settings = ['Create Blog', 'Profile', 'Account', 'Logout'];

const Navbar = () => {
  const navigate = useNavigate()
  const{currentUser} = useContext(AuthContext);

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const signOutFunc = async()=>{
    await signOut(firebase);
    navigate("/");
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <a href="/"><img src={logo} alt="log" style={{ width: '100px' }} /></a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <a href="/"><img src={logo} alt="log" style={{ width: '50px' }} /></a>
              {/* <MenuIcon /> */}
            </IconButton>


          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'flex', md: 'none' }}
          >
            ST blog
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          {/* USER MENU CURRENT USER CONTROL */}
          {currentUser ? (
                    <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,color:'orange' }}>
                        <Avatar 
                        alt={currentUser.displayName}
                        src="/static/images/avatar/2.jpg" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                       <MenuItem>
                        
                        <Typography 
                        variant='dashed'
                        color='orange'
                        sx={{}}>{currentUser.displayName}</Typography>
                     
                       
                    </MenuItem> 
                    <Divider />
                      <MenuItem>
                        
                          <Typography textAlign="center" onClick={()=>navigate("/new-blog")}>Create Blog</Typography>
                       
                         
                      </MenuItem> 
        
                      <MenuItem>
                       
                          <Typography textAlign="center" onClick={()=>navigate("/profile")}>Profile</Typography>
                       
                      </MenuItem>
        
                      <MenuItem>
                        <Typography textAlign="center"
                        onClick={()=>signOutFunc()}
                        >Log Out</Typography>
                      </MenuItem>
        
                    </Menu>
                  </Box>

                ):(

                  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                alt={null}
                src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              <MenuItem>
                
                <Typography textAlign="center" onClick={()=>navigate("/login")}>Login</Typography>
             
               
            </MenuItem>
            <MenuItem>
                
                <Typography textAlign="center" onClick={()=>navigate("/register")}>Register</Typography>
             
               
            </MenuItem>


              {/* <MenuItem>
                
                  <Typography textAlign="center" onClick={()=>navigate("/new-blog")}>Create Blog</Typography>
               
                 
              </MenuItem>  */}

            </Menu>
          </Box>
                )}
                
        {/* CURRENT USER CONTROL END************ */}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
