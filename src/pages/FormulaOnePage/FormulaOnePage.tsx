import React, { useEffect, FC } from 'react';
import SectionList from '../../components/SectionList/SectionList';
import Header from '../../components/Header/Header';
import useFormulaOnePage from './useFormulaOnePage';

const FormulaOnePage: FC = () => {
  const { setItems } = useFormulaOnePage();

  useEffect(() => {
    setItems();
  }, []);

  return (
    <>
      <Header />
      <div className='page-container'>
        <SectionList />
      </div>
    </>
  );
};
export default FormulaOnePage;
