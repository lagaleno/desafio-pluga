import LayoutDefault from "../layout/Default";
import ListTools from "./ListTools";
import { getToolsData } from "../utils/getToolsData";
import { ITool } from "../interfaces/ITool"

interface IProp {
  tools: ITool[];
}

export async function getStaticProps() {
  const tools = await getToolsData();
  return {
    props: {
      tools,
    },
  };
}

export default function Home({tools}: IProp) {
  return (
    <LayoutDefault>
      <ListTools tools={tools}/>
    </LayoutDefault>
  );
};
