import React from 'react'
import { TextField, Button, Card } from '@mui/material'
const Login = () => {
    return (
        <>
            <Card >
                <TextField label="Username" variant="outlined" type='text' fullWidth />
                <TextField label="Password" variant="outlined" type='password' fullWidth />
                <Button variant='contained' fullWidth>Login</Button>
            </Card>
            
        </>
    )
}

export default Login