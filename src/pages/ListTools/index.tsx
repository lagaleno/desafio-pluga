import React, { useEffect, useState } from 'react'

// Interface import
import { ITool } from "../../interfaces/ITool";

// Components import
import List from "./List";

// Styles import
import { Title } from "./styles";

interface IProp {
  tools: ITool[]
}

const SearchBar = (): JSX.Element => {
  return (
    <>
      <Title> Input </Title>
    </>
  )
}


export default function ListTools({ tools }: IProp) {

  return (
    <>
      { tools ?
        <><SearchBar /><List tools={tools} /></> 
      :
      <h1> Loading </h1>
      }
    </>
  )
}
