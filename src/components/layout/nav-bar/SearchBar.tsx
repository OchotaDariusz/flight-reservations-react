import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { TextField } from '@mui/material';

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

type RouteOption = { label: string; value: string; route: string };

const autocompleteOptions: RouteOption[] = [
  { label: 'Flight Search', value: 'flight search', route: 'search' },
  { label: 'About', value: 'about', route: 'about' },
];

const SearchBar = () => {
  const [value, setValue] = React.useState<RouteOption | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (value !== null) {
      navigate(`/${value.route}`);
    }
  }, [value, inputValue]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        disablePortal
        options={autocompleteOptions}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as RouteOption);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
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
      />
    </Search>
  );
};

export default SearchBar;
