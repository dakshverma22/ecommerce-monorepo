import {FormCard, Header } from "ui"

export const Signup = () => {
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
                <Header displayText="Register as Administrator" variant="h4" />
                <FormCard/>
            </div>
        </>
    )
}