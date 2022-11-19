import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const Homepage = () => {
    return (
        
        <div className="homepage">
            <form>
                <label>
                    Name: 
                    <input type="text" name="name" />
                </label>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Input placeholder="Placeholder" inputProps={ariaLabel} />
                </Box>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Homepage;