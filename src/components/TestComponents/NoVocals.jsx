const NoVocals = () => {

  const keyHandler = (event) => {
    console.log('se introdujo la tecla: ', event.key);
    const vocales = 'aeiouAEIOU'
    if(vocales.search(event.key) !== -1 ){
      event.preventDefault()
    }
  }

  const handlerKey = (event) => {
    console.log('se introdujo la tecla: ', event.key);
    const arrayVocales = ['a','e','i','o','u']
    if(arrayVocales.includes(event.key)){
      event.preventDefault()
    }
    //arrayVocales.includes(event.key.toLowerCase()) && event.preventDefault()  **utilizando ternarios**
  }


  return (
    <div>
      <span>No se admiten vocales</span>
      <input onKeyDown={handlerKey} type="text" placeholder="ingrese aquí" name="" id="" />
    </div>
  )
}
export default NoVocals