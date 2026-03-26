
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import './NavBar.css'
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react"
import port_logo from '../IMAGES/port_logo.png'

export default function NavBar() {


    const [mobileOpen, setMobileOpen] = useState(false);
    // for menu on click
    const handleToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    // for handling the click   
    const drawer = (
        <Box onClick={handleToggle} sx={{ textAlign: "center", backgroundColor: "rgb(237 , 247, 255)", height: "100%" }}>

            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
                <img src={port_logo} style={{ height: "40px", margin: "10px 10px", borderRadius: "50%" }} />
                <Typography color="rgb(3,57,108)" variant="h5" sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600
                }} >
                    AJAY
                </Typography>

            </Box>

            <Divider />
            <ul className="mobile-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li> <Link to="/projects">Projects</Link>   </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </Box>
    );

    return (
        <>
            <AppBar component="nav" elevation={0} sx={{
                background: "rgba(255, 255, 255, 0)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)"
            }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: "none" } }}
                        onClick={handleToggle}
                    >
                        <MenuIcon sx={{ color: "rgb(3,57,108)" }} />
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <img src={port_logo} style={{ height: "40px", marginRight: "10px", borderRadius: "50%" }} />
                        <Typography color="rgb(3,57,108)" variant="h5" sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600
                        }} >
                            AJAY
                        </Typography>

                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" }, color: "#03396c" }}>
                        <ul className="nevigationMenu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li> <Link to="/projects">Projects</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleToggle}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 240,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </>
    );
}