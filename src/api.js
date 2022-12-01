import axios from 'axios';

const searchImages = async (term)=> {
 const response = await axios.get("https://api.unsplash.com/search/photos" , {
  headers: {
   Authorization: 'Client-ID 69QdAk07i8RmXPNNloYfCd3rPO9yXU9eeINtkD9LLYU',
  },
  params: {
   query: term,
  },
 });

 return response.data.results;
}

export default searchImages;