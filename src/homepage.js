import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectYear from './yeardropdown';
import SelectCountry from './countrydropdown';
import {Betas} from './betas';
import { multiplyMatrices } from './matmul';

import { Select } from '@mui/material';
import {useState} from 'react';

const ariaLabel = { 'aria-label': 'description' };

const Homepage = () => {
    const [message, setMessage] = useState('');
    // const [year, setYear] = useState('');
    const [nitrogen, setNitrogen] = useState('');
    const [phosphate, setPhosphate] = useState('');
    const [potash, setPotash] = useState('');
    const [synfertil, setSynfertil] = useState('');
    const [manure, setManure] = useState('');
    const [atmosdepo, setAtmosdepo] = useState('');
    const [cropremoval, setCropremoval] = useState('');
    const [biofixation, setBiofixation] = useState('');
    const [pestindex, setPestindex] = useState('');
    const [selected, setSelected] = useState('');
    const [country, setSelectedC] = useState('');
    const [text, setResult] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(message,selected,country,nitrogen,phosphate,potash,synfertil,manure,atmosdepo,cropremoval,biofixation,pestindex)
        let resultarr = [[1,country,selected,nitrogen,phosphate,potash,manure,atmosdepo,cropremoval,biofixation,pestindex]];
        let preresult = 0
        for (let i = 0; i<10;i++) {
            let beta = Betas[i];
            let temp = multiplyMatrices(resultarr,beta);
            preresult += temp[0][0];
        }
        let result = String((preresult/10).toFixed(2));
        console.log('thisisresult',result)
        setResult("The predicted rice yield is "+result+"kg/ha.");
        console.log('thisisfinal',text)
    }
    const refreshPage = () => {
        window.location.reload();
    }
    
    const handleChange = event => {
      setMessage(result);
      console.log('value is:', result);
    };
    return (
        
        <div className="homepage">
            <form onSubmit={handleFormSubmit}>
                <label>
                    Predict your rice yield here
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
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '17ch' }}>
                        <label>Year: </label>
                        <SelectYear name="year" selected={selected} onSelected={setSelected} />
                    </FormControl>
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <label>Country: </label>
                        <SelectCountry name="country" country={country} onSelectedC={setSelectedC} />
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="nitrogen"
                            name="nitrogen"
                            onChange={(e) =>{setNitrogen(e.target.value)} }
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
                            id="phosphate"
                            name="phosphate"
                            onChange={(e) =>{setPhosphate(e.target.value)} }
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
                            name="potash"
                            onChange={(e) =>{setPotash(e.target.value)} }
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
                            name="synfertil"
                            onChange={(e) =>{setSynfertil(e.target.value)} }
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
                            name="manure"
                            onChange={(e) =>{setManure(e.target.value)} }
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
                            name="atmosdepo"
                            onChange={(e) =>{setAtmosdepo(e.target.value)} }
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
                            name="cropremoval"
                            onChange={(e) =>{setCropremoval(e.target.value)} }
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
                            name="biofixation"
                            onChange={(e) =>{setBiofixation(e.target.value)} }
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
                            name="pestindex"
                            onChange={(e) =>{setPestindex(e.target.value)} }
                            endAdornment={<InputAdornment position="end">kg/Ha</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Pesticide Index</FormHelperText>
                    </FormControl>
                </Box>
                <button type="submit" value="Submit">Submit</button>
                <button type="clear" onClick={() =>{refreshPage()}}>Clear input</button>
            </form>
            <label id='result' name='finallabel'>{text}</label>
        </div>
    );
}

export default Homepage;