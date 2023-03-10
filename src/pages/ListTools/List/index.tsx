import React, { useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

// Component import
import ToolCard from "@/components/ToolCard";
import Loading from "@/components/Loading";

// TODO: padronizar import do MUI nos arquivos
// Material UI Components import
import { Box, Grid, Typography } from "@mui/material";

// Interfaces import
import { ITool } from "@/interfaces/ITool";

interface IProps {
  tools: ITool[];
  searching: boolean;
}

interface Response {
  hasNextPage: boolean;
  data: ITool[];
}

// CONSTANTS
const RESPONSE_TIME_IN_MS = 500; // delay time to render next page
const PAGE_MAX_SIZE = 12;

const loadTools = (
  startCursor = 0,
  items: ITool[],
  total: number
): Promise<Response> => {
  return new Promise((resolve) => {
    let newArray: ITool[] = [];
    let hasNextPage = false;
    setTimeout(() => {
      if (startCursor < total) {
        let missingElements = total - startCursor;
        let newElemetnsSize =
          missingElements > PAGE_MAX_SIZE ? PAGE_MAX_SIZE : missingElements;

        for (let i = startCursor; i < startCursor + newElemetnsSize; i++) {
          const newItem = items[i];
          newArray = [...newArray, newItem];
        }

        hasNextPage = true;
      }
      resolve({ hasNextPage, data: newArray });
    }, RESPONSE_TIME_IN_MS);
  });
};

export const useLoadTools = (tools: ITool[]) => {
  const [loading, setLoading] = useState(false);
  const [currentTools, setCurrentTools] = useState<ITool[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const loadMore = async () => {
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadTools(
        currentTools.length,
        tools,
        tools.length
      );

      setCurrentTools((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, currentTools, hasNextPage, error, loadMore };
};

const renderUnsuccessfulSearch = (): JSX.Element => {
  return (
    <>
      <Box
        m={6}
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Nenhum resultado encontrado.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" display="block" align="center">
              Tente uma nova busca ou procure a ferramenta pela listagem
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const renderSearchList = (tools: ITool[]): JSX.Element => {
  if (!tools) return <Loading />;

  return (
    <>
      {tools.length > 0
        ? tools.map((tool) => (
            <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
              <ToolCard tool={tool} />
            </Grid>
          ))
        : renderUnsuccessfulSearch()}
    </>
  );
};

const renderPaginatedList = (
  tools: ITool[],
  loading: boolean,
  hasNextPage: boolean,
  sentryRef:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined
): JSX.Element => {
  return (
    <>
      {tools.map((tool) => (
        <Grid key={tool.app_id} item xs={12} sm={6} md={4}>
          <ToolCard tool={tool} />
        </Grid>
      ))}
      {(loading || hasNextPage) && (
        <div
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          ref={sentryRef}
        >
          <Loading />
        </div>
      )}
    </>
  );
};

const List = ({ tools, searching }: IProps): JSX.Element => {
  let { loading, currentTools, hasNextPage, error, loadMore } =
    useLoadTools(tools);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <Box sx={{ m: 6 }}>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        {searching
          ? renderSearchList(tools)
          : renderPaginatedList(currentTools, loading, hasNextPage, sentryRef)}
      </Grid>
    </Box>
  );
};

export default List;
