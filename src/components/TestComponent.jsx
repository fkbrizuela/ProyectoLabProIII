const TestComponent = (props) => {
    // console.log(props);
    return (
        <h1 onClick={() => props.saludar()}>Componente de presentación {props.name}</h1>
    )
}
export default TestComponent;
