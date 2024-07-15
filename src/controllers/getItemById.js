import getItembyId from '../services/getItembyId.js'

 export default async function getItemById(req, res){
    
  try {
    console.log(req.params.id)
    const data = await getItembyId(req.params.id);
    return res.json(data.Item);
  } catch (error) {
        return res.status(500).json(error.message);
  }
}