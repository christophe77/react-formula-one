import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DriverStanding } from '../../types/standing';

const DriverStandingsTable: FC = () => {
  const driverStandings = useSelector((state: RootState) => state.formulaOne.driverStandings);
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell align='right'>Driver</TableCell>
            <TableCell align='right'>Constructor</TableCell>
            <TableCell align='right'>Wins</TableCell>
            <TableCell align='right'>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {driverStandings.map((driver: DriverStanding) => (
            <TableRow
              key={driver.position}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {driver.position}
              </TableCell>
              <TableCell align='right'>
                {driver.Driver.givenName}&nbsp;{driver.Driver.familyName}
              </TableCell>
              <TableCell align='right'> {driver.Constructors[0].name}</TableCell>
              <TableCell align='right'> {driver.wins}</TableCell>
              <TableCell align='right'> {driver.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DriverStandingsTable;
