import React, { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook';


// Component import
import ToolsCard from "../../../components/Card"

// TODO: padronizar import do MUI nos arquivos
// Material UI Components import
import { Box, Grid, CircularProgress } from '@mui/material';

// Styles import
import { LoadingStyle } from '@/styles/LoadingStyles';

// Interfaces import
import { ITool } from "../../../interfaces/ITool";


interface IProps {
  tools: ITool[];
}

interface Response {
  hasNextPage: boolean;
  data: ITool[];
}

// CONSTANTS
const RESPONSE_TIME_IN_MS = 1000; // delay time to render next page
const PAGE_MAX_SIZE = 12;

function loadTools(startCursor = 0, items: ITool[], total: number): Promise<Response> {
  return new Promise((resolve) => {
    let newArray: ITool[] = [];
    let hasNextPage = false;
    setTimeout(() => {
      if (startCursor < total) {
        let missingElements = total - startCursor; 
        let newElemetnsSize = missingElements > PAGE_MAX_SIZE ? PAGE_MAX_SIZE : missingElements;

        for (let i = startCursor; i < startCursor + newElemetnsSize; i++) {
          const newItem = items[i];
          newArray = [...newArray, newItem];
        }

        hasNextPage = true;
      }
      resolve({ hasNextPage , data: newArray });
    }, RESPONSE_TIME_IN_MS);
  });
}

export function useLoadTools(tools: ITool[]) {
  const [loading, setLoading] = useState(false);
  const [currentTools, setCurrentTools] = useState<ITool[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  async function loadMore() {
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadTools(
        currentTools.length, tools, tools.length
      );
      setCurrentTools((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { loading, currentTools, hasNextPage, error, loadMore };
}

const List = ({ tools }: IProps): JSX.Element => {
  const { loading, currentTools, hasNextPage, error, loadMore } = useLoadTools(tools);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });

  return (
    <Box sx={{ m: 6 }}>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        {currentTools.map((tool) => (
          <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
            <ToolsCard icon={tool.icon} name={tool.name}  color={tool.color} /> 
          </Grid>
        ))}
        {(loading || hasNextPage) && (
          <LoadingStyle ref={sentryRef}>
            <CircularProgress />
          </LoadingStyle>
      )}
      </Grid>
    </Box>
  )
}

export default List;