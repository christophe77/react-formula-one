import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FormulaOneItem } from '../../types/formulaOneItem';
import './SectionCard.css';

interface ISectionCardProps {
  item: FormulaOneItem;
}

const SectionCard: FC<ISectionCardProps> = ({ item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Card className='section-card-container'>
      <SectionTitle title={item.sectionTitle} />
      <CardMedia component='img' height='140' image={item.headerImageUrl} alt={item.title} />
      <CardContent className='section-card-content'>
        <Grid container spacing={2}>
          {!isMobile && (
            <Grid item sm={2}>
              <div className='section-card-content-img-container'>
                <img src={item.sectionImageUrl} alt={item.title} />
              </div>
            </Grid>
          )}
          <Grid item xs={12} sm={10}>
            {item.title && <h5>{item.title}</h5>}
            {item.subTitle && <h6>{item.subTitle}</h6>}
            {item.description && <p className='content-text'>{item.description}</p>}
            {item.DescriptionElement && <item.DescriptionElement />}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
