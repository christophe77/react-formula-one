import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DriverStanding } from '../../../types/standing';
import '../DriverStandingsTable/DriverStandingsTable.css';

interface IDriverStandingsTableProps {
  driverStandings: DriverStanding[];
}
const DriverStandingsTable: FC<IDriverStandingsTableProps> = ({ driverStandings }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='driver standings table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Position</TableCell>
            <TableCell align='center'>Driver</TableCell>
            <TableCell align='center'>Constructor</TableCell>
            <TableCell align='center'>Wins</TableCell>
            <TableCell align='right'>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {driverStandings.map((driver: DriverStanding) => (
            <TableRow key={driver.position}>
              <TableCell component='th' scope='row'>
                {driver.position}
              </TableCell>
              <TableCell align='center'>
                {driver.Driver.givenName}&nbsp;{driver.Driver.familyName}
              </TableCell>
              <TableCell align='center'> {driver.Constructors[0].name}</TableCell>
              <TableCell align='center'> {driver.wins}</TableCell>
              <TableCell align='right'> {driver.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DriverStandingsTable;
