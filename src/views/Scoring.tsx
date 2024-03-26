import Icon from "../components/Icon";
import Title from "../components/Title";
import Description from "../components/Description";
import Number from "../components/Number";
import Button from "../components/Button";
import { useState } from "react";

interface Props {
    saveScore: (value: number) => void;
    selectedNumber: number | null;
    setSelectedNumber: (number: number | null) => void;

}

function Scoring({saveScore, selectedNumber, setSelectedNumber}: Props) {
    const [currentScore, setCurrentScore] = useState(0)


  return (
    <div className="bg-black h-screen flex justify-center items-center w-full">
      <div className="bg-gradient-to-b from-cardColor1 to-cardColor2  max-w-[400px] rounded-xl">
        <div className="p-7">
          <Icon />
          <Title title="How did we do?" />
          <Description description="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!" />
          <ul className="flex justify-center items-center mt-6 mb-7">
            <Number number={1} onClick={setCurrentScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            <Number number={2} onClick={setCurrentScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            <Number number={3} onClick={setCurrentScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            <Number number={4} onClick={setCurrentScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            <Number number={5} onClick={setCurrentScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
          </ul>
          <Button onClick={() => saveScore(currentScore)}/>
        </div>
      </div>
    </div>
  );
}

export default Scoring;
