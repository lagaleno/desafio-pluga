import { ITool } from "@/interfaces/ITool";

export const getToolsData = async () => {
  const url = "https://pluga.co/ferramentas_search.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
