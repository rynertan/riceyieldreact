import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

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
                    {/* form starts here*/}
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="test"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="test"
                            inputProps={{
                            'test': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Nitrogen</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Phosphate</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Potash</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Synthetic Fertilisers</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Manure applied</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Atmospheric Deposition</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Crop Removal</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Bio-fixation</FormHelperText>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Pesticide Index</FormHelperText>
                    </FormControl>
                </Box>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Homepage;