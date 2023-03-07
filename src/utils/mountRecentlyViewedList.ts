// Interface import
import { ITool } from "@/interfaces/ITool";

/**
 *
 * @param list
 * @returns list with limited size and no duplicate
 */
export const mountRecentlyViewedList = (
  list: ITool[],
  newTool: ITool
): ITool[] => {
  list.push(newTool);
  // check for duplicate
  const uniquelist = list.filter(
    (value, index, self) =>
      index === self.findIndex((element) => element.app_id === value.app_id)
  );
  // Limit list length
  if (uniquelist.length <= 3) {
    return uniquelist;
  }
  return uniquelist.slice(1);
};
