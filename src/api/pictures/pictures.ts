import { formulaOnePictures } from './data';

export const getRandomPicture = (): string => {
  const randomNumber = Math.floor(Math.random() * 10);
  const response = formulaOnePictures[randomNumber];
  return response;
};
