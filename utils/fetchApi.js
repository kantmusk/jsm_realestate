import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'f85cc6e2b9mshcd7ea3365765810p1c7bf2jsne0116659e6c5'
      },
  });
    
  return data;
}
