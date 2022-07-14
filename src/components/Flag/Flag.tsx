import { ReactElement } from "react";
import "./Flag.css";

interface FlagProps {
  country: string;
  emoji: string;
}

export const Flag = ({ country, emoji }: FlagProps): ReactElement<unknown> => {
  return (
    <div className="flag-wrapper">
      <p className="flag-title">{country}</p>
      <p className="flag">{emoji}</p>
    </div>
  );
};
