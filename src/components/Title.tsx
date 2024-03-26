interface Props {
    title: string,
}

function Title(props: Props) {
    return <h1 className="mt-5 mb-3 text-white text-2xl">{props.title}</h1>
}

export default Title