import { FC } from "react";

type FormulaOneItem = {
  id: number;
  sectionTitle: string;
  title: string;
  subTitle: string;
  description: string;
  DescriptionElement? : FC;
  headerImageUrl: string;
  sectionImageUrl: string;
};
export default FormulaOneItem;
