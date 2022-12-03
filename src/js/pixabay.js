import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31635899-1cb6f37c9ae866ffd2c461d46';

export async function fetchArticles(query, page, perPage) {
  const res = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return res;
}
