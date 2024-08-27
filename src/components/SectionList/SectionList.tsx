import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Skeleton from '@mui/material/Skeleton';
import { RootState } from '../../app/store';
import SectionCard from '../SectionCard/SectionCard';
import Loading from '../Loading/Loading';
import useSectionList from './useSectionList';
import { FormulaOneItem } from '../../types/formulaOneItem';
import './SectionList.css';

const SectionList: FC = () => {
  const items = useSelector((state: RootState) => state.formulaOne.items);
  const isLoading = useSelector((state: RootState) => state.formulaOne.isLoading);
  const { skeletonItems, skeletonItemHeight } = useSectionList();
  return (
    <div className='section-list-container'>
      {isLoading && (
        <>
          <Loading />
          {skeletonItems.map((skeletonItem) => (
            <div key={skeletonItem.id} className='section-list-item-skeleton'>
              <Skeleton variant='rectangular' height={skeletonItemHeight} />
            </div>
          ))}
        </>
      )}
      {!isLoading &&
        items.map((item: FormulaOneItem) => (
          <motion.div key={item.id} className='section-list-item-container'>
            <SectionCard item={item} />
          </motion.div>
        ))}
    </div>
  );
};

export default SectionList;
