import React, { useEffect, useState } from 'react'

// Interface import
import { ITool } from "../../interfaces/ITool";

// Components import
import List from "./List";

// Styles import

interface IProp {
  tools: ITool[]
}


export default function ListTools({ tools }: IProp) {

  return (
    <>
      { tools ?
        <><List tools={tools} /></> 
      :
      <h1> Loading </h1>
      }
    </>
  )
}
