import { Card, TextField } from "@mui/material"

export interface IFormData {
    username:string;
    email: string;
    password: string;
}

export const FormCard = ({username, email, password}: IFormData) => {
    return(
        <>
            <Card style={{display:"flex", flexDirection:'column', width:400, gap:10, padding:30}}>
                <TextField id="outlined-basic" label="Username" variant="outlined" value={username} />
                <TextField id="outlined-basic" label="Email" variant="outlined" value={email} />
                <TextField id="outlined-basic" label="Password" variant="outlined" value={password} />
            </Card>
        </>
    )
}