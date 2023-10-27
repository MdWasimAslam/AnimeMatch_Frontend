import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import "../Components/Styles/Navbar.css"
import { useNavigate } from 'react-router-dom';



export default function Footer() {

    const navigate = useNavigate();

    function navigateTo(path) {
      navigate(path);
    }

    return (
        <Box sx={{ flexGrow: 1 }} className="footer" style={{ backgroundColor: "#333", color: "#fff" }}>
            <AppBar position="static">
                <Toolbar style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "15px" }}>
                    <li onClick={()=>{navigateTo("/")}} style={{ cursor: "pointer" }}><Link color="inherit">Home</Link></li>
                        <li onClick={()=>{navigateTo("/score")}} style={{ cursor: "pointer" }}><Link color="inherit">Check Score</Link></li>
                        <li onClick={()=>{window.location.href="https://github.com/mdWasimAslam"}} style={{ cursor: "pointer" }}><Link color="inherit">Github</Link></li>
                        <li onClick={()=>{window.location.href="https://wasimaslam.cloud/"}} style={{ cursor: "pointer" }}><Link color="inherit">Portfolio</Link></li>
                        <li onClick={()=>{navigateTo("/about")}} style={{ cursor: "pointer" }}><Link color="inherit">About</Link></li>
                        {/* <li onClick={()=>{navigateTo("/admin")}} style={{ cursor: "pointer" }}><Link color="inherit">Admin</Link></li> */}
                    </ul>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
