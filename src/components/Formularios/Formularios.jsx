import { useState } from "react"



const Formularios = () => {

  const [nombre, setNombre] = useState("")
  const [color, setColor] = useState("")
  const [dia, setDia] = useState("")
  const [terminos, setTerminos] = useState(false)

  //---------  Formularios complejos --------------------------//

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.checked
    })
  }

  // -------------------------------------------------------------//

  const handleSubmit = (e) => {
    e.preventeDefault()
    alert("El formulario se ha enviado")
  }

  return (
    <div>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /> {/* value={form.nombre} - onChange={handleChange} */}
        <p>Radio botones</p>
        <input type="radio" id="rojo" name="color" value="rojo" defaultChecked onChange={(e) => { setColor(e.target.value) }} />
        <label htmlFor="rojo">Rojo</label>
        <input type="radio" id="blanco" name="color" value="blanco" onChange={(e) => { setColor(e.target.value) }} />
        <label htmlFor="blanco">Blanco</label>
        <input type="radio" id="azul" name="color" value="azul" onChange={(e) => { setColor(e.target.value) }} />
        <label htmlFor="azul">Azul</label>
        <input type="radio" id="negro" name="color" value="negro" onChange={(e) => { setColor(e.target.value) }} />
        <label htmlFor="negro">Negro</label>
        <p>Seleccionar</p>
        <select name="dia" defaultValue="" onChange={(e) => { setDia(e.target.value) }}>
          <option value="">----</option>
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miercoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sabado</option>
          <option value="domingo">Domingo</option>
        </select>
        <h3>Terminos y condiciones</h3>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={(e) => { setTerminos(e.target.checked) }} />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
export default Formularios