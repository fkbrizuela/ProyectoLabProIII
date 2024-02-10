const TestComponent = (props) => {
    return (
        <p onClick={() => props.saludar()}>Componente de presentación {props.name}</p>
    )
}
export default TestComponent;
