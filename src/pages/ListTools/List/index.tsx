import React from 'react'

// Component import
import ToolsCard from "../../../components/Card"

// Interfaces import
import { ITool } from "../../../interfaces/ITool";

interface IProps {
  tools: ITool[];
}

const List = ({ tools }: IProps): JSX.Element => {
  console.log(tools);
    return (
      <>
        <h2> Listagem OI </h2>
        <ToolsCard icon={tools[0].icon} name={tools[0].name} />
      </>
    )
}

export default List;