// Interface import
import { ITool } from "@/interfaces/ITool";

export const limitRecentlyViewedList = (list: ITool[]): ITool[] => {
    if (list.length < 3) {
        return list;
    }
    return list.slice(1);
}