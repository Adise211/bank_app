import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const getCities = () => axios.get(`${url}/cities`);

export const balanceFilter = (start,end) => axios({
  method: 'post',
  url: `${url}/upto`,
  data: {
    start: start,
    end: end
  }
});

export const cardsFilter = (cards) => axios({
  method: 'post',
  url: `${url}/cards`,
  data: {
    number: cards

  }
});

export const cityFilter = (cities) => axios({
  method: 'post',
  url: `${url}/cities`,
  data: {
    city1: cities[0],
    city2: cities[1],
    city3: cities[2],
    city4: cities[3],
    city5: cities[4]

  }
});

export const mortgageFilter = (value) => axios({
  method: 'post',
  url: `${url}/mortgage`,
  data: {
    mortgage: value

  }
});

export const twoFilters = (start,end,radioValue,cards) => axios({
    method: 'post',
    url: `${url}/two`,
    data: {
      start: start,
      end: end,
      mortgage: radioValue,
      number: cards
    }
  });

export const threeFilters = (start,end,radioValue,cards) => axios({
      method: 'post',
      url: `${url}/three`,
      data: {
        start: start,
        end: end,
        mortgage: radioValue,
        number: cards
      }
    });
