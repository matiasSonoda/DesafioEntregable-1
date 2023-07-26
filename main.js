class productManager{
  static lastId= 0;
  constructor (tittle, description, price, thumbnail,code, stock)
   {
      this.tittle= tittle;
      this.description= description;
      this.price= price;
      this.thumbnail= thumbnail;
      this.code=code;
      this.stock=stock;
      this.id= ++productManager.lastId;
   }
}
let arrayProducts = [];

function addproduct(array, producto){
 let result= array.find(element =>
   element.code === producto.code);

   if (result === undefined){
    array.push(producto)
   }
   else{
    console.error("(Error)Productos ya guardados")
   }
}
function getProducts (array){
  array.forEach((e)=>{
    console.log(e)
  });
}
function getproductByID(array, id){
  let result= array.find(element=>element.id === id)
    if (result !== undefined)
      {
        console.log("PRODUCTO ENCONTRADO")
        console.log(result)
      }
    else
      {
        console.error("Error: producto no encontrado")
      }
}
getProducts(arrayProducts)
let product1 = new productManager("avena","alimento saludable",1500,"Imagen","123",20)
let product2 = new productManager("nueces","hacen bien a la piel",500,"imagen","151",30)
addproduct(arrayProducts,product1);
addproduct(arrayProducts,product2);
getProducts(arrayProducts)
addproduct(arrayProducts,product1);
addproduct(arrayProducts,product2);
getproductByID(arrayProducts,1)
getproductByID(arrayProducts,3)