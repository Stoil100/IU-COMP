import React,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LanguageInput() {
  const [language, setLanguage] = useState('bulgarian');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Език</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={language}
        label="Language"
        onChange={handleChange}
      >

        <MenuItem value="bulgarian">Български</MenuItem>
        <MenuItem value="english">English</MenuItem>
      </Select>
    </FormControl>
  );
}