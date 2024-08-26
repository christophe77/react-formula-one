import Circuit from "./circuit";

type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: { date: string };
  SecondPractice: { date: string };
  ThirdPractice: { date: string };
  Qualifying: { date: string };
};

export default Race;