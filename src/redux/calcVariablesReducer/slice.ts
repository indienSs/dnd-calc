import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcVariables } from "./types";

const initialState: CalcVariables = {
  firstNumber: "0",
  secondNumber: "0",
  operation: "",
};

export const calcVariablesSlice = createSlice({
  name: "calcElements",
  initialState,
  reducers: {
    setFirstNumber: (state, action: PayloadAction<string>) => {
      state.firstNumber += action.payload;
    },
    setSecondNumber: (state, action: PayloadAction<string>) => {
      state.secondNumber += action.payload;
    },
    setOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },
  },
});

export const { setFirstNumber, setSecondNumber, setOperation } =
  calcVariablesSlice.actions;

export default calcVariablesSlice.reducer;
