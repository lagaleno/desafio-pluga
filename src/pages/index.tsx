import LayoutDefault from "@/layout/Default";
import ListTools from "./ListTools";
import { getToolsData } from "@/utils/getToolsData";
import { sortDataByName } from "@/utils/sortDataByName";
import { ITool } from "@/interfaces/ITool"

interface IProp {
  tools: ITool[];
}

export async function getStaticProps() {
  const rawTools = await getToolsData();
  const tools = sortDataByName(rawTools);
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
