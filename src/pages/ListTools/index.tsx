import React from 'react'

// Material UI Imports
import Button from '@mui/material/Button';

// Styles import
import { Title } from "./styles.ts";


const SearchBar = (): JSX.Element => {
  return (
    <>
      <Title> Input </Title>
      <Button variant="contained">Contained</Button>
    </>
  )
}

const List = (): JSX.Element => {
  return (
    <>
      <h2> Listagem </h2>
    </>
  )
}

export default function ListTools() {
  return (
    <>
      <SearchBar />
      <List />
    </>
  )
}
