import React from 'react'

// Material UI Components import
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { SearchBarStyles } from './styles';

const SearchBar = ({ setSearchQuery }: React.SetStateAction<any>): JSX.Element => (
    <form>
      <SearchBarStyles>
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <TextField
          id="search-bar"
          fullWidth
          onInput={(e) => {
            setSearchQuery((e.target as HTMLInputElement).value);
          }}
          label="Entre com o nome da Ferramenta"
          placeholder="Buscar Ferramenta"
        />
      </SearchBarStyles>
    </form>
  );

export default SearchBar;