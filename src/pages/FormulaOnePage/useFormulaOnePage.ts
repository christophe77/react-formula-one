import { useDispatch } from 'react-redux';
import {
  getLatestRaceResults,
  getSchedule,
  getCurrentStandings,
} from '../../api/formulaOne/formulaOne';
import { getRandomPicture } from '../../api/pictures/pictures';
import {
  addFormulaOneItem,
  setDriverStandings,
  setIsLoading,
} from '../../features/formulaOneSlice';
import DriverStandings from '../../components/DriverStandings/DriverStandings';
import { FormulaOneItem } from '../../types/formulaOneItem';
import { Result } from '../../types/result';
import { Race } from '../../types/race';
import { DriverStanding } from '../../types/standing';

const useFormulaOnePage = () => {
  const dispatch = useDispatch();

  const setItems = async () => {
    dispatch(setIsLoading(true));
    // API calls
    const schedule: Race[] = await getSchedule();
    const latestRaceResult: Result = await getLatestRaceResults();
    const driverStandings: DriverStanding[] = await getCurrentStandings();

    // Items generation
    const latestRaceResultItem: FormulaOneItem = {
      id: 2,
      sectionTitle: 'Latest race',
      title: `${latestRaceResult.raceName}`,
      subTitle: `${latestRaceResult.date}`,
      description: `And the winner of the 
          ${latestRaceResult.raceName} 
          is number ${latestRaceResult.Results[0].Driver.permanentNumber}, 
          ${latestRaceResult.Results[0].Driver.givenName} ${latestRaceResult.Results[0].Driver.familyName} 
          from ${latestRaceResult.Results[0].Constructor.name}`,
      headerImageUrl: getRandomPicture(),
      sectionImageUrl: process.env.PUBLIC_URL + '/assets/images/tire-red.png',
    };
    const totalRounds = schedule.length + 1;
    const latestRound = Number(latestRaceResult.round);
    const nextRound = latestRound === totalRounds ? latestRound : latestRound + 1;
    const nextRace = schedule[nextRound - 1];

    const nextRaceItem: FormulaOneItem = {
      id: 1,
      sectionTitle: 'Next race',
      title: `${nextRace.raceName}`,
      subTitle: `${nextRace.date}`,
      description: `Next race will be the 
          ${nextRace.raceName} 
          on ${nextRace.date}
          in ${nextRace.Circuit.Location.locality}, ${nextRace.Circuit.Location.country}`,
      headerImageUrl: getRandomPicture(),
      sectionImageUrl: process.env.PUBLIC_URL + '/assets/images/tire-blue.png',
    };

    const driverStandingsItem: FormulaOneItem = {
      id: 3,
      sectionTitle: 'Ranking',
      DescriptionElement: DriverStandings,
      headerImageUrl: getRandomPicture(),
      sectionImageUrl: process.env.PUBLIC_URL + '/assets/images/tire-green.png',
    };
    await Promise.all([
      dispatch(addFormulaOneItem(latestRaceResultItem)),
      dispatch(addFormulaOneItem(nextRaceItem)),
      dispatch(addFormulaOneItem(driverStandingsItem)),
      dispatch(setDriverStandings(driverStandings)),
    ])
      .then(() => dispatch(setIsLoading(false)))
      .catch(console.log);
  };

  return {
    setItems,
  };
};

export default useFormulaOnePage;
