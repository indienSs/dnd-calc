import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcItemsSelector } from "../../redux/calcReducer/slice";
import {
  setConstructorCalc,
  setNumbersCalc,
} from "../../redux/calcReducer/slice";
import { calcVariablesSelector } from "../../redux/calcVariablesReducer/slice";
import {
  resetFirstNumber,
  setFirstNumber,
  setStarted,
} from "../../redux/calcVariablesReducer/slice";

import styles from "./ResNumbers.module.scss";

const ResNumbers: FC = () => {
  const dispatch = useDispatch();

  const [floatClicked, setFloatClicked] = useState<boolean>(false);

  const { isConstructor } = useSelector(calcItemsSelector);
  const { firstNumber, started } = useSelector(calcVariablesSelector);

  const removeNumbers = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (isConstructor) {
        dispatch(setNumbersCalc(false));
        dispatch(setConstructorCalc(true));
      }
    }
  };

  const showNumber = (e: any) => {
    const resNumber: string = e.target.innerHTML;
    if (isConstructor || firstNumber.length >= 9) {
      return;
    }

    if (!started) {
      dispatch(resetFirstNumber(""));
      dispatch(setStarted(true));
    }

    dispatch(setFirstNumber(resNumber));
  };

  const floatNumber = (e: any) => {
    const resNumber: string = e.target.innerHTML;
    if (isConstructor || firstNumber.length >= 9) {
      return;
    }

    if (!started) {
      dispatch(setStarted(true));
    }
    if (!floatClicked) {
      dispatch(setFirstNumber(resNumber));
      setFloatClicked(true);
    }
  };

  return (
    <div
      className={styles.res_numbers}
      onClick={removeNumbers}
      draggable={isConstructor}
    >
      <button onClick={showNumber}>7</button>
      <button onClick={showNumber}>8</button>
      <button onClick={showNumber}>9</button>
      <button onClick={showNumber}>4</button>
      <button onClick={showNumber}>5</button>
      <button onClick={showNumber}>6</button>
      <button onClick={showNumber}>1</button>
      <button onClick={showNumber}>2</button>
      <button onClick={showNumber}>3</button>
      <button className={styles.zero_button} onClick={showNumber}>
        0
      </button>
      <button onClick={floatNumber}>.</button>
    </div>
  );
};

export default ResNumbers;
