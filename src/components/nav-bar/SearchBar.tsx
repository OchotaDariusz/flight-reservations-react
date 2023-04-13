import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    '&::placeholder': {
      marginLeft: theme.spacing(1),
    },
    '&::-webkit-search-cancel-button': {
      display: 'none',
    },
  },
}));

const autocompleteOptions = [
  { label: 'Flight Search', value: 'flight search', route: 'search' },
  { label: 'Account', value: 'account', route: 'profile' },
  { label: 'Contact', value: 'contact', route: 'contact' },
  { label: 'About', value: 'about', route: 'about' },
];

type AutocompleteOptions = { label: string; value: string; route: string };

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<AutocompleteOptions | null>(
    null,
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        freeSolo
        options={autocompleteOptions}
        value={inputValue}
        onChange={(event, newValue) => {
          setInputValue(newValue as AutocompleteOptions);
        }}
        getOptionLabel={(option) => (option as AutocompleteOptions).label}
        renderInput={(params) => {
          return (
            <StyledInputBase
              {...params}
              placeholder="Search…"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          );
        }}
        sx={{ width: '100%' }}
        renderOption={(props, option) => (
          <Box component="div" sx={{ textAlign: 'center' }}>
            <Link
              to={`/${(option as AutocompleteOptions).route}`}
              onClick={() => setInputValue(option as AutocompleteOptions)}
            >
              {(option as AutocompleteOptions).label}
            </Link>
          </Box>
        )}
      />
    </Search>
  );
};

export default SearchBar;
