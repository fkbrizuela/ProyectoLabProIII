import {useState} from 'react';

const FuntionalTestComponent = (props) => {
    const [name, setname] = useState("")
    return (
        <>
            <div>FuntionalTestComponent</div>
            {/* recibe un componente como prop y le setea su propiedad */}
            {props.newComponent({name:"Test2"})}
        </>
    )
}
export default FuntionalTestComponent