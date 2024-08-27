import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RootState } from '../../app/store';
import DriverStandingsList from './DriverStandingsList/DriverStandingsList';
import DriverStandingsTable from './DriverStandingsTable/DriverStandingsTable';
import './DriverStandings.css';

const DriverStandings: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const driverStandings = useSelector((state: RootState) => state.formulaOne.driverStandings);
  return (
    <div className='driver-standings-container'>
      {isMobile ? (
        <DriverStandingsList driverStandings={driverStandings} />
      ) : (
        <DriverStandingsTable driverStandings={driverStandings} />
      )}
    </div>
  );
};
export default DriverStandings;
