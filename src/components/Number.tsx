import { useState } from "react";

interface Props {
    number: number;
    onClick: (number: number) => void;
    selectedNumber: number | null;
    setSelectedNumber: (number: number | null) => void;
  }

function Number({ number, onClick, selectedNumber, setSelectedNumber }: Props) {

    const handleClick = () => {
        if (selectedNumber === number) {
          setSelectedNumber(null);
        } else {
          setSelectedNumber(number);
        }
        onClick(number);
      };
  return (
    <li>
      <button
      className={`${selectedNumber === number ? 'bg-orange-500' : 'bg-buttonBase'}  min-w-12 min-h-12 rounded-full mx-3 flex justify-center items-center text-white hover:bg-slate-400`}
      onClick={handleClick}>
        {number}
      </button>
    </li>
  );
}

export default Number;
