import React from "react";

// Interface Import
import { ITool } from "@/interfaces/ITool";

// Material UI Components import
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Components import
import ToolCard from "@/components/ToolCard";

// Styles import
import Image from "next/image";
import { RecentlyViewedToolsStyles, ToolDetailsStyles } from "./styles";

interface IProp {
  open: boolean;
  handleCloseModal: () => void;
  tool: ITool;
  recentlyViewedTools: ITool[];
}

const mountRecentViewedToolsList = (list: ITool[]) => {
  return list.map((tool) => (
    <Grid key={tool.app_id} item xs={12} sm={4} md={4}>
      <ToolCard tool={tool} />
    </Grid>
  ));
};

const mountToolDetails = (tool: ITool, fullScreen: boolean) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={5} justifyContent="center">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{ textAlign: `${fullScreen ? "center" : "right"}` }}
      >
        <Image
          width={150}
          height={150}
          src={tool.icon}
          alt={tool.name}
          className="iconStyle"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{ textAlign: `${fullScreen ? "center" : "left"}` }}
      >
        <Typography variant="h6"> {tool.name} </Typography>
        <Button target="_blank" variant="contained" href={tool.link}>
          Acessar
        </Button>
      </Grid>
    </Grid>
  );
};

const ToolDialog = ({
  open,
  handleCloseModal,
  tool,
  recentlyViewedTools,
}: IProp): JSX.Element => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={"md"}
      fullWidth={true}
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title" style={{ textAlign: "right" }}>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ToolDetailsStyles color={tool.color}>
          {mountToolDetails(tool, fullScreen)}
        </ToolDetailsStyles>
        {recentlyViewedTools.length > 0 ? (
          <RecentlyViewedToolsStyles>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={5}
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                style={{ textAlign: `${fullScreen ? "center" : "left"}` }}
              >
                <Typography variant="h5">
                  {" "}
                  ??ltimas Ferramentas Visualizadas{" "}
                </Typography>
              </Grid>
              {mountRecentViewedToolsList(recentlyViewedTools)}
            </Grid>
          </RecentlyViewedToolsStyles>
        ) : (
          <></>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ToolDialog;
