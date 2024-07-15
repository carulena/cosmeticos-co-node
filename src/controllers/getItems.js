import getAllItems from '../services/getAllItems.js'

 export default async function getItems(req, res){
    
  try {
    const data = await getAllItems();
    const object = data.Items

    object.forEach(produto => {
         produto["imagem_produto"] = `https://cosmeticos-co-imagens-produtos.s3.amazonaws.com/${produto.produto_id}.jpg`
    });
    return res.json(object);
  } catch (error) {
        return res.status(500).json({ error: "Não foi possível conectar com o banco de dados" });
  }
}