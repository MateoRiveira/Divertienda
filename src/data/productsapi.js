import products from "./products";

export default function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); 
  });
}

export function getProductbyId(idParam){
    const promiseProduct = new Promise((resolve, reject) => {
        const productRequested = products.find( item=> item.id === Number(idParam))
        console.log("Devolviendo Producto", productRequested)
        setTimeout (() => resolve(productRequested), 1000)
    })
    return promiseProduct;
}

export function getProductbyCategory(categoryParam){
    const promiseProduct = new Promise((resolve, reject) => {
        const productsRequested = products.filter( item=> item.category === (categoryParam))
        console.log("Devolviendo Productos por categoria", productsRequested)
        setTimeout (() => resolve(productsRequested), 1000)
    })
    return promiseProduct;
}







