import { Typography } from "@mui/material"

export interface IHeaderProps {
    displayText: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

export const Header = ({displayText,  variant}:IHeaderProps) => {
    return(
        <Typography variant={variant} >{displayText}</Typography>
    )
}