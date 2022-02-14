import React from "react";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArticleCard from "../../Features/Card/Card";
import { Link } from "react-router-dom";
import { useArticleContext } from "../../Context/Context";
import "./Articles.css";
import { withRouter } from "react-router-dom";

function Articles(props) {
  const { setArticleContext } = useArticleContext();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);

  const search = async () => {
    console.log({ query, category });
    if (!query && !category) {
      setArticles([]);
    } else if (query && !category) {
      searchByQuery(query);
    } else {
      searchByCategory(query, category);
    }
  };

  const searchByQuery = async (query) => {
    return fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=00b9d4ad8a8546a69549128f68f509b3`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log({ res });
        setArticles(res.articles);
      });
  };

  const searchByCategory = async (query, category) => {
    const paramForQuery = query ? `q=${query}&` : "";
    return fetch(
      `https://newsapi.org/v2/top-headlines?${paramForQuery}category=${category}&apiKey=00b9d4ad8a8546a69549128f68f509b3`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log({ res });
        setArticles(res.articles);
      });
  };

  useEffect(() => {
    search();
  }, [category]);

  console.log({ articles });

  return (
    <>
      <div className="radio-buttons">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Categories
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={category}
            onChange={(e, selectedValue) => {
              setCategory(selectedValue);
            }}
          >
            <FormControlLabel
              control={<Radio />}
              value=""
              label="No Category"
              checked={category === ""}
            />
            <FormControlLabel
              control={<Radio />}
              value="business"
              label="Business"
              checked={category === "business"}
            />
            <FormControlLabel
              control={<Radio />}
              value="entertainment"
              label="Entertainment"
              checked={category === "entertainment"}
            />
            <FormControlLabel
              control={<Radio />}
              value="general"
              label="General"
            />
            <FormControlLabel
              control={<Radio />}
              value="health"
              label="Health"
            />
            <FormControlLabel
              control={<Radio />}
              value="science"
              label="Science"
            />
            <FormControlLabel
              control={<Radio />}
              value="sports"
              label="Sports"
            />
            <FormControlLabel
              control={<Radio />}
              value="technology"
              label="Technology"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="search-input">
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={search}>search</button>
      </div>
      <div className="articles-div">
        {articles.map((article) => {
          return (
            <ArticleCard
              urlToImage={
                article.urlToImage
                  ? article.urlToImage
                  : "https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg"
              }
              title={article.title}
              description={article.description}
              publishedAt={article.publishedAt}
              onClick={(e) => {
                console.log({article});
                setArticleContext(article);
                props.history.push("/article");
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default withRouter(Articles);
