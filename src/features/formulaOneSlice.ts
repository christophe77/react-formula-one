import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormulaOneItem } from '../types/formulaOneItem';
import { DriverStanding } from '../types/standing';

interface FormulaOneState {
  items: FormulaOneItem[];
  driverStandings: DriverStanding[];
  isLoading: boolean;
}

const initialState: FormulaOneState = {
  items: [],
  driverStandings: [],
  isLoading: true,
};

const formulaOneSlice = createSlice({
  name: 'formula-one',
  initialState,
  reducers: {
    addFormulaOneItem: (state, action: PayloadAction<FormulaOneItem>) => {
      state.items.push(action.payload);
    },
    setDriverStandings: (state, action: PayloadAction<DriverStanding[]>) => {
      state.driverStandings = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addFormulaOneItem, setDriverStandings, setIsLoading } = formulaOneSlice.actions;
export default formulaOneSlice.reducer;
