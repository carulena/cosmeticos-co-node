import express from 'express'
import products from './routes/products.mjs'
const app = express()
const port = 8000
   
app.use(express.json())

app.use('/produtos', products)

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})