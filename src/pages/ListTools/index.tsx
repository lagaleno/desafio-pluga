import React, { useEffect, useState } from "react";

// Interface import
import { ITool } from "@/interfaces/ITool";

// Components import
import List from "./List";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";

// Styles import
import { Box, Grid } from "@mui/material";
import Footer from "@/components/Footer";

interface IProp {
  tools: ITool[];
}

const filterData = (query: string, data: ITool[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const ListTools = ({ tools }: IProp) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, tools);
  let searching = false;
  if (searchQuery.length > 0) searching = true;
  return (
    <>
      {tools ? (
        <>
          <Box sx={{ m: 2 }}>
            <Grid container>
              <Grid item sx={{ mt: 3 }} xs={12}>
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <div style={{ padding: 3 }} />
              </Grid>
            </Grid>
            <List tools={dataFiltered} searching={searching} />
            <Footer />
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ListTools;
