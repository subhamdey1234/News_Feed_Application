import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
function Newsboard({category}) {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${category}&from=2025-01-14&to=2025-01-14&sortBy=popularity&apiKey=b29025f5b56b4a70a1c0829d74bbd838`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Debug the API response
        setarticles(data.articles || []); // Handle potential undefined articles
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-8 mb-5 font-bold text-3xl text-white underline">
        Latest <span className="">News</span>
      </h2>
      <div className=" mt-3 ms-4  grid sm:grid-cols-1   justify-evenly md:grid-cols-2 lg:grid-cols-4 gap-9">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <Newsitem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center mt-4">No articles available.</p>
        )}
      </div>
    </div>
  );
}

export default Newsboard;
