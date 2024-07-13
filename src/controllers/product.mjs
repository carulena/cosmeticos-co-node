import  getProducts  from '../services/products.mjs'


export default async function getAllProducts (req, res){
    try{
        const produtos = await getProducts()
        res.send(produtos)    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}
