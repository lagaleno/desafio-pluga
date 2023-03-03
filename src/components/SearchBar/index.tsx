import React from 'react'

// Material UI Components import
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }: any): JSX.Element => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery((e.target as HTMLInputElement).value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

export default SearchBar;