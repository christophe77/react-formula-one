import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Grid } from '@mui/material';
import FormulaOneItem from '../../types/formulaOneItem';
import './SectionCard.css';

interface ISectionCardProps {
  item: FormulaOneItem;
}

const SectionCard: FC<ISectionCardProps> = ({ item }) => {
  return (
    <Card className='section-card-container'>
      <CardMedia component='img' height='140' image={item.headerImageUrl} alt={item.title} />
      <CardContent className='section-card-content'>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={item.sectionImageUrl} alt={item.title} />
          </Grid>
          <Grid item xs={10}>
            <h5>{item.title}</h5>
            <h6>{item.subTitle}</h6>
            <p className='content-text'>{item.description}</p>
            {
              item.DescriptionElement && <item.DescriptionElement />
            }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
