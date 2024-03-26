interface Props {
  description: string;
}

function Description(props: Props) {
  return (
    <p className="text-white text-base font-light">
      {props.description}
    </p>
  );
}

export default Description;
