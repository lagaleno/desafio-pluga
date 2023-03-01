import React, { useEffect, useState } from 'react'

// Material UI Imports

// Styles import
import { Title } from "./styles.ts";


const SearchBar = (): JSX.Element => {
  return (
    <>
      <Title> Input </Title>
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
  const [toolsList, setToolsList] = useState([])
  useEffect(() => {
    const url = "https://pluga.co/ferramentas_search.json"

    const getData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json()
        console.log(data)
        setToolsList(data);
      } catch (error) {
        console.log(error);
      } 
    };
    getData()
  }, []);

  return (
    <>
      <SearchBar />
      <List />
    </>
  )
}
