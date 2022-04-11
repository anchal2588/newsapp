import React , {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  const capitalizeFirstLetter = (string) => {
    let updatedStr = string.charAt(0).toUpperCase() + string.slice(1);
    return updatedStr;
  };
  

  const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.limit}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setTotalResults(parseData.totalResults);
    setArticles(parseData.articles);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.limit}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setTotalResults(parseData.totalResults);
    setPage(page+1)
    console.log(articles)
    setArticles(articles.concat(parseData.articles));
    setLoading(false);
  };

    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "35px 0px", marginTop:"90px" }}>
            NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
            Headlines
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader= {<Spinner />}
          >
            <div className="container">
            <div className="row my-4">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      discription={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
}

News.defaultProps = {
  category: "science",
  country: "in",
  limit: 8,
};

News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  limit: PropTypes.number,
};

export default News;
