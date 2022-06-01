import { RewordI } from "../interfaces";

export const rewordsSum = (rewords: RewordI[], fromId?: number) => {
  const initialSum = 0;
  let result = 0;
  if (rewords) {
    result = rewords.reduce((acc, curr) => {
      if (fromId && curr.fromId !== fromId) {
        return acc;
      }
      return acc + curr.amount
    }, initialSum)
  }
  return result;
};
