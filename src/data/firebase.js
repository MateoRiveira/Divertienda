
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, query, where, addDoc } from "firebase/firestore"
import products from "./products"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN ,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGEBUCKET ,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINDSENDERID ,
  appId: import.meta.env.VITE_FIRESTORE_APPID
};


const app = initializeApp(firebaseConfig);
const db= getFirestore (app)

export async function getProducts(){
    const productsRef = collection(db, "products");

    const productsSnapshot = await getDocs(productsRef)

    const dataDocs = productsSnapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data() }
    })
   


    return dataDocs;
}

export async function getProductbyId(idParam) {
    const docRef = doc(db, "products", idParam) 

    const documentSnapshot = await getDoc(docRef)

    return {id: documentSnapshot.id, ...documentSnapshot.data()}

}

export async function getProductsbyCategory(categoryParam) {
    const productsRef = collection(db, "products");

    const q = query(productsRef, where("category", "==", categoryParam));

    const productsSnapshot = await getDocs(q);

    const dataDocs = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
     
     if (dataDocs.length < 1)
     throw (new Error("No encontramos ningun resultado"));

    
    return dataDocs
}


export async function createOrder(orderData) {
    const ordersRef = collection(db, "orders");

    const newDoc =  await addDoc(ordersRef, orderData)
    return newDoc
}


export async function subirProductosAFirestore(params) {
    for(let item of products) {
        delete item.id;
        const newDoc = await addDoc(collection(db, "products"),item)
        console.log("item creado", newDoc.id)
    }
     
}





export default app; 