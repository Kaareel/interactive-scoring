import Description from "../components/Description";
import Image from "../components/Image";
import Title from "../components/Title";

interface Props {
    score: number,
}

function Thanks({score}: Props) {
  return (
    <div className="bg-black h-screen flex justify-center items-center w-full">
      <div className="bg-gradient-to-b from-cardColor1 to-cardColor2  max-w-[400px] rounded-xl">
        <div className="p-7">
          <div className="flex flex-col justify-center items-center">
            <Image />
            <p className=" text-orange-500 bg-iconColor rounded-xl px-3 py-1 mt-7">You selected out of {score}</p>
            <Title title="Thanks you!" />
            <Description description="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
