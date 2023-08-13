import { Card } from "@mui/material"

export const Product = () => {
    return(
        <div style={{marginTop:20}} >
            <Card style={{width:400, height:400, border:'2px solid black'}} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Fredmeyer_edit_1.jpg/220px-Fredmeyer_edit_1.jpg" alt="" width={250} />
            </Card>
        </div>
    )
}