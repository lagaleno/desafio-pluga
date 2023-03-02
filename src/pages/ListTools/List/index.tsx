import { Box, Grid } from '@mui/material';
import React from 'react'

// Component import
import ToolsCard from "../../../components/Card"

// Interfaces import
import { ITool } from "../../../interfaces/ITool";

interface IProps {
  tools: ITool[];
}

const List = ({ tools }: IProps): JSX.Element => {
    return (
      <Box sx={{ m: 6 }}>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          {tools.map((tool) => (
            <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
              <ToolsCard icon={tool.icon} name={tool.name} /> 
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default List;