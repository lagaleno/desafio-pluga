import React from "react";

// MUI component import
import { CircularProgress } from "@mui/material";

// Styles import
import { LoadingStyle } from "./styles";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyle>
      <CircularProgress />
    </LoadingStyle>
  );
};

export default Loading;
