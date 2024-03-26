import { useState } from "react";

interface Props {
    onClick: () => void;
}

function Button({ onClick }: Props) {


  return (
    <button 
    className="bg-orange-500 w-full rounded-xl py-2 text-white"
    onClick={onClick}
    >SUBMIT</button>
  );
}

export default Button;
