import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const getCities = () => axios.get(`${url}/cities`);

// export const balanceFilter = (start,end) => axios.patch(`${url}/upto`, {
//       params: {
//         start:start,
//         end:end
//       }
//
// });

export const balanceFilter = (start,end) => axios({
  method: 'post',
  url: `${url}/upto`,
  data: {
    start: start,
    end: end
  }
});
