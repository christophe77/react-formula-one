import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { DriverStanding } from '../../../types/standing';
import './DriverStandingsList.css';

interface IDriverStandingsTableProps {
  driverStandings: DriverStanding[];
}
const DriverStandingsList: FC<IDriverStandingsTableProps> = ({ driverStandings }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        driverStandings.map((driverStanding : DriverStanding)=>(
          <ListItem key={driverStanding.position}>
            <ListItemAvatar>
              <Avatar>
              {driverStanding.position}
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={`${driverStanding.Driver.givenName} ${driverStanding.Driver.familyName}`}
              secondary={`${driverStanding.Constructors[0].name}`} 
            />
            <ListItemText 
              primary={`${driverStanding.points} pts`}
              secondary={`${driverStanding.wins} wins`} 
            />
        </ListItem>
       
        ))
      }
    </List>
  );
};
export default DriverStandingsList;
