import getItembyId from '../services/getItembyId.js'

 export default async function getItemById(req, res){
    
  try {
    const data = await getItembyId(req.params.id);
    const object = data.Items
    return res.json(object);
  } catch (error) {
        return res.status(500).json(error.message);
  }
}