import { Box, Grid } from '@mui/material';
import React, { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook';


// Component import
import ToolsCard from "../../../components/Card"

// Interfaces import
import { ITool } from "../../../interfaces/ITool";

interface IProps {
  tools: ITool[];
}

interface Response {
  hasNextPage: boolean;
  data: ITool[];
}

// TODO: Refactor
function loadItems(startCursor = 0, items: ITool[], total: number): Promise<Response> {
  return new Promise((resolve) => {
    let newArray: ITool[] = [];
    let hasNextPage = false;
    // TODO: magic number
    const RESPONSE_TIME_IN_MS = 1000;
    console.log("start cursor", startCursor, newArray);
    setTimeout(() => {
      if (startCursor < total) {
        let missing = total - startCursor; 
        // TODO: magic number
        let ARRAY_SIZE = missing > 12 ? 12 : missing;
        console.log("MISSING", missing, ARRAY_SIZE);
        for (let i = startCursor; i < startCursor + ARRAY_SIZE; i++) {
          const newItem = items[i] && items[i];
          newArray = [...newArray, newItem];
        }

        hasNextPage = true;
      }
      resolve({ hasNextPage , data: newArray });
    }, RESPONSE_TIME_IN_MS);
  });
}

export function useLoadItems(tools: ITool[]) {
  const [loading, setLoading] = useState(false);
  const [toolsP, setItems] = useState<ITool[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  async function loadMore() {
    console.log("oi", toolsP);
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadItems(
        toolsP.length, tools, tools.length
      );
      setItems((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { loading, toolsP, hasNextPage, error, loadMore };
}

const List = ({ tools }: IProps): JSX.Element => {
  const { loading, toolsP, hasNextPage, error, loadMore } = useLoadItems(tools);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });
  console.log("toolsP", toolsP);
  return (
    <Box sx={{ m: 6 }}>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        {toolsP.map((tool) => (
          <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
            <ToolsCard icon={tool.icon} name={tool.name} /> 
          </Grid>
        ))}
        {(loading || hasNextPage) && (
          <div ref={sentryRef}>
            Loading
          </div>
      )}
      </Grid>
    </Box>
  )
}

export default List;