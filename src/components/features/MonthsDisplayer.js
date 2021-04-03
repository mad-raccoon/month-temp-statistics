import React from "react";
import { Graph } from "../shared";
import { year2020, getMaxTempPerMonth } from "./utils";

export const displayTypes = {
  MIN: "min",
  MAX: "max",
};

const MonthsDisplayer = ({ title, type }) => {
  getMaxTempPerMonth(year2020);

  return (
    <div>
      <h2>{title}</h2>
      <Graph />
    </div>
  );
};

export default MonthsDisplayer;
