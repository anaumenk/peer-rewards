import React from "react";

interface Props {
  title: string;
  amount: number;
}

const RewardCol = ({ title, amount }: Props) => (
  <div className="col">
    <span>{title}</span>
    <span className="amount">${amount}</span>
  </div>
);

export default RewardCol;
