import { FC } from 'react';

export type FormulaOneItem = {
  id: number;
  sectionTitle: string;
  title?: string;
  subTitle?: string;
  description?: string;
  DescriptionElement?: FC;
  headerImageUrl: string;
  sectionImageUrl: string;
};
