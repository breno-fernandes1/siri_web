'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const Logo = styled('img')({
    height: '100px',
    margin: '0 auto',
    display: 'block',
});

export default function NavBar() {
const url = usePathname()
    const router = useRouter();
    const currentUrl = router;
    console.log(url)
    const [displayNavbar, setDisplayNavbar] = useState("none")    
    useEffect(()=>{
        console.log("use effect iniciou")
        if (url== "/"){
            setDisplayNavbar("none")
            console.log("use effect none")
        }
        else{
            setDisplayNavbar("block")
            console.log("use effect block")
        }
     },[url])
    return (
        
<Box display={displayNavbar}>
        <AppBar  position="fixed" sx={{ backgroundColor: '#172E4D' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <Logo src="/senaiNav.png" alt="Logo" />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
        </Box>
    );
}

