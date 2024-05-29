import { useEffect } from "react"
import { useState } from "react"


const NewsBoard = (category) => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=71c86cba523e4138a8d3a6413fbc7526`;
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles));
   
    },[category])

  return (
    <div>
        <h2 className = "text-center">News <span className="badge bg-dark">Today</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key = {index} title={news.title} descripton={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard