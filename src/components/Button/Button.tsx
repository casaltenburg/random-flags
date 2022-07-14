import { ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  onButtonClick: () => void;
}

export const Button = ({
  onButtonClick,
}: ButtonProps): ReactElement<unknown> => {
  return (
    <button className="button" onClick={onButtonClick}>
      Generate random flag
    </button>
  );
};
