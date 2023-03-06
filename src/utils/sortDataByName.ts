import { ITool } from "@/interfaces/ITool";

export const sortDataByName = (data: ITool[]) => {
    data.sort((a: ITool, b: ITool) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
    })
    return data;
}