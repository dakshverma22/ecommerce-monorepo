import { Typography, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";


import {MenuBar} from './Menu'


 const NavBar = () => {

    const navigate = useNavigate()

    return(
            <div style={{display:'flex', justifyContent:'space-between', padding:10, borderRadius:5, backgroundColor:'#3b82f680'}} >
                <span> <Typography variant='h5' >Flipzon</Typography> </span>
                    <div>
                        <Button variant='outlined' style={{color:'white'}}  onClick={() => navigate("/signup")} >Signup</Button>
                        <Button variant='contained' style={{marginLeft:10}} onClick={() => navigate("/login")} >Login</Button>
                    </div>
                    {/* <div>
                        <MenuBar/>
                    </div> */}
            </div>
    )
}
export default NavBar