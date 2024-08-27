import { formulaOneApiInstance } from '../axiosInstance';
import { Result } from '../../types/result';
import { Race } from '../../types/race';
import { DriverStanding } from '../../types/standing';

export const getSchedule = async (): Promise<Race[]> => {
  try {
    const response = await formulaOneApiInstance.get(`current.json`);
    if (response.status === 200) {
      const resultList: Race[] = response.data.MRData.RaceTable.Races;

      return resultList;
    }
    return [] as Race[];
  } catch {
    return [] as Race[];
  }
};

export const getLatestRaceResults = async (): Promise<Result> => {
  try {
    const response = await formulaOneApiInstance.get(`current/last/results.json`);
    if (response.status === 200) {
      const resultList = response.data.MRData.RaceTable.Races[0];
      return resultList;
    }
    return {} as Result;
  } catch {
    return {} as Result;
  }
};

export const getCurrentStandings = async (): Promise<DriverStanding[]> => {
  try {
    const response = await formulaOneApiInstance.get(`current/driverStandings.json`);
    if (response.status === 200) {
      const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      return standings;
    }
    return [] as DriverStanding[];
  } catch {
    return [] as DriverStanding[];
  }
};
