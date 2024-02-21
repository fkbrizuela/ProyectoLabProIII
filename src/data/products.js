const products = [
  { id: 1, title: "Pizza", description: "string", category:"Alimentos", price: 100, pictureURL:"https://i.pinimg.com/564x/b6/94/0e/b6940e530fa87fdf8f4e9cdf5ccafc36.jpg", stock: 5 },
  { id: 2, title: "Ensalada", description: "string", category:"Alimentos", price: 100, pictureURL:"https://i.pinimg.com/564x/eb/cb/b9/ebcbb960d5d992314b90ba13029e05b3.jpg", stock: 10 },
  { id: 3, title: "Hamburguesa", description: "string", category:"Alimentos", price: 100, pictureURL:"https://i.pinimg.com/564x/43/7c/44/437c447768d443d33d9ee3743e87dd08.jpg", stock: 7 },
  { id: 4, title: "Empanadas", description: "string", category:"Alimentos", price: 100, pictureURL:"https://i.pinimg.com/564x/c8/e1/15/c8e115bbcdd3587c1f1a1938f9099eb8.jpg", stock: 6 },
  { id: 5, title: "Coca Cola", description: "string", category:"Bebidas", price: 100, pictureURL:"https://i.pinimg.com/564x/23/42/43/23424317bb4bff6656941d675245bf6f.jpg", stock: 4 },
  { id: 6, title: "Sprite", description: "string", category:"Bebidas", price: 100, pictureURL:"https://i.pinimg.com/564x/e2/4e/40/e24e40f985488e44e4a8e774030eb010.jpg", stock: 2 },
  { id: 7, title: "Fanta", description: "string", category:"Bebidas", price: 100, pictureURL:"https://i.pinimg.com/564x/f5/be/f4/f5bef4f1076728b21249ae7b40b10741.jpg", stock: 9 },
  { id: 8, title: "Vinos", description: "string", category:"Bebidas", price: 100, pictureURL:"https://i.pinimg.com/564x/52/27/42/5227422d3ed1d98e802c112a3ee0e1e3.jpg", stock: 5 },
];

export const getAllProducts = ()=>{
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      return resolve(products)
    },2000)
  })
  return promise
}

export const getProduct = (id)=>{
  const promise = new Promise((resolve)=>{
    const result = products.find((product)=>product.id === parseInt(id) )
    setTimeout(()=>{
      return resolve(result)
    },2000)
  })
  return promise
}


export const getProductsByCategory = (CategoryName)=>{
  const promise = new Promise((resolve)=>{
    const results = products.filter((product)=> product.category === CategoryName )
    setTimeout(()=>{
      return resolve(results)
    },2000)
  })
  return promise
}