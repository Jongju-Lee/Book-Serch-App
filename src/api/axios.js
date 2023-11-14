import axios from "axios";

const BASE_URL = "https://dapi.kakao.com/v3/search/book";

export default {
  getArticle: function (id) {
    return axios.get(BASE_URL + `posts/${id}`);
  },
};
