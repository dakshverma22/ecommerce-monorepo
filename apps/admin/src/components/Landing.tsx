import {Grid, Button, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {

    const navigate = useNavigate()

    return(
        <Grid container spacing={2}>
        <Grid item xs={12} md={8} style={{ display:'flex',flexDirection:'column',gap:20, paddingTop:'300px', paddingLeft:'100px'}} >
            <Typography variant='h4' >Welcome to Flipzon Admin</Typography>
            <div>
                <Button variant='outlined' style={{width:'200px', marginRight:10}} onClick={() => navigate('/signup')} >Signup</Button>
                <Button variant='contained' style={{width:'200px'}} onClick={() => navigate('/signup')} >Login</Button>
            </div>
        </Grid>
        <Grid item xs={12} md={4} style={{paddingTop:'150px'}} >
          <img src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg" alt="Admin image " />
        </Grid>
        {/* <Grid item xs={12} >
            <Typography>Welcome `adminname`</Typography>
        </Grid> */}
      </Grid>

    )
}