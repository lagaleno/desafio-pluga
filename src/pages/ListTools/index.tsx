import React, { useEffect, useState } from 'react'

// Interface import
import { ITool } from "../../interfaces/ITool";

// Components import
import List from "./List";
import SearchBar from '../../components/SearchBar';

// Material UI Components import
import CircularProgress from '@mui/material/CircularProgress';

// Styles import
import { LoadingStyle } from '@/styles/LoadingStyles';
import { Box, Grid } from '@mui/material';

interface IProp {
  tools: ITool[]
}

const filterData = (query: string, data: ITool[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  }
};

const ListTools = ({ tools }: IProp) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, tools);
  let searching = false;
  if (searchQuery.length > 0) searching = true;
  return (
    <>
      { tools ?
        <> 
          <Box sx={{ m: 2 }}>
            <Grid container>
              <Grid item xs={12}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /><div style={{ padding: 3 }} />
              </Grid>
            </Grid>
          </Box>
          <List tools={dataFiltered} searching={searching }/>
        </> 
      :
        <LoadingStyle>
          <CircularProgress />
        </LoadingStyle>
      }
    </>
  )
}

export default ListTools;
