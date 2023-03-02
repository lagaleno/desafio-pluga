import React, { useEffect, useState } from 'react'

// Interface import
import { ITool } from "../../interfaces/ITool";

// Components import
import List from "./List";

// Material UI Components import
import CircularProgress from '@mui/material/CircularProgress';

// Styles import
import { LoadingStyle } from '@/styles/LoadingStyles';

interface IProp {
  tools: ITool[]
}


export default function ListTools({ tools }: IProp) {

  return (
    <>
      { tools ?
        <><List tools={tools} /></> 
      :
        <LoadingStyle>
          <CircularProgress />
        </LoadingStyle>
      }
    </>
  )
}
