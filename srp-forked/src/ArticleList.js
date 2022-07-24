import { useState, useEffect, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  isLoading: true,
  articles: null
};

const ArticleList = () => {
  const [formattedArticles, setFormattedArticles] = useState([]);
  const [state, dispatch] = useReducer(Reducer, initialState);

  const showDetails = (id) => {
    const article = formattedArticles.find((item) => item.id === id);

    dispatch({ type: "LOADING_SUCCESS", payload: true });
    fetch("https://gorest.co.in/public-api/users?id=" + article.user_id)
      .then((responce) => responce.json())
      .then((user) => {
        dispatch({ type: "LOADING_SUCCESS", payload: false });

        // тут могла быть мега логика вывода в модальном окне, но пусть она остается за рамками)
        console.log({ ...article, ...user.data[0] });
      });
  };

  useEffect(() => {
    dispatch({ type: "LOADING_SUCCESS", payload: true });

    fetch("https://gorest.co.in/public-api/posts")
      .then((responce) => responce.json())
      .then((articles) => {
        dispatch({ type: "LOADING_SUCCESS", payload: false });
        dispatch({ type: "GET_DATA_SUCCESS", payload: articles });
      });
  }, []);

  // тут могла быть фильтрация, или что то ещё, но, за неимением последней, пускай работает воображение)
  useEffect(() => {
    setFormattedArticles(state.articles?.data);
  }, [state.articles]);

  return (
    <>
      <div>Fetching status: {state.isLoading ? "loading" : "loaded"}</div>

      {formattedArticles?.map((article) => (
        <section key={article.id} onClick={() => showDetails(article.id)}>
          <span>{article.title}</span>
        </section>
      ))}
    </>
  );
};

export default ArticleList;
