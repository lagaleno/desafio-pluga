// Layput import
import LayoutDefault from "@/layout/Default";

// Components import
import ListTools from "./ListTools";

// Utils import
import { getToolsData } from "@/utils/getToolsData";
import { sortDataByName } from "@/utils/sortDataByName";

// Interface import
import { ITool } from "@/interfaces/ITool";

// MUI components import
import { Box, Grid, Typography } from "@mui/material";

interface IProp {
  tools: ITool[];
}

export const getStaticProps = async () => {
  const rawTools = await getToolsData();
  const tools = sortDataByName(rawTools);
  return {
    props: {
      tools,
    },
  };
};

const renderUnsuccessfulRequest = (): JSX.Element => {
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
              Não foi possível obter dados sobre as ferramentas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" display="block" align="center">
              Entre em contato com a{" "}
              <a href="https://pluga.co/" target="_blank">
                Pluga
              </a>{" "}
              ou tente novamente mais tarde.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default function Home({ tools }: IProp) {
  return (
    <LayoutDefault>
      {tools?.length > 0 ? (
        <ListTools tools={tools} />
      ) : (
        renderUnsuccessfulRequest()
      )}
    </LayoutDefault>
  );
}
