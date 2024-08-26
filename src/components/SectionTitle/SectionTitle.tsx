import React, { FC } from 'react';
import './SectionTitle.css';

interface ISectionTitleProps {
  title: string;
}
const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
  return <div className='section-title-container'><h3>{title}</h3></div>;
};

export default SectionTitle;
