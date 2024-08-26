import React, { useEffect, FC } from 'react';
import { Container } from '@mui/material';
import SectionList from '../../components/SectionList/SectionList';
import Header from '../../components/Header/Header';
import useFormulaPage from './useFormulaPage';

const FormulaOnePage: FC = () => {
  const { setItems } = useFormulaPage();

  useEffect(() => {
    setItems();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SectionList />
      </Container>
    </>
  );
};
export default FormulaOnePage;
