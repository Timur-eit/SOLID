import { useEffect, useState } from "react";

export const useAllArticles = (url, state, dispatch) => {
  const [formattedArticles, setFormattedArticles] = useState([]);

  useEffect(() => {
    dispatch({ type: "LOADING_SUCCESS", payload: true });
    fetch(url)
      .then((data) => data.json())
      .then((data) => dispatch({ type: "GET_DATA_SUCCESS", payload: data }))
      .finally(() => dispatch({ type: "LOADING_SUCCESS", payload: false }));
  }, [dispatch, url]);

  // тут могла быть фильтрация, или что то ещё, но, за неимением последней, пускай работает воображение)
  useEffect(() => {
    setFormattedArticles(state.articles?.data);
  }, [state.articles]);

  return { articles: formattedArticles };
};

// fetch("https://gorest.co.in/public-api/posts")
