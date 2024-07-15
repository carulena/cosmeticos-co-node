import getItembyNameDescription from '../services/getItembyNameDescription.js'

 export default async function getItemById(req, res){
    
  try {
    const data = await getItembyNameDescription(req.params.searchTerm);
    const object = data.Items
    return res.json(object);
  } catch (error) {
        return res.status(500).json(error.message);
  }
}