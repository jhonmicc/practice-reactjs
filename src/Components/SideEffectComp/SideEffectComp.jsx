import React, { useState, useEffect } from 'react'
import './SideEffectComp.css'

const defaultNews = {
  status: "ok",
  totalResult: 0,
  articles: []
}
const endpoint =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=d4eef434bb2848cca69d497ef7eb2b42";

const SideEffectComp = () => {
  const [news, setNews] = useState(defaultNews)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${endpoint}&page=${page}`)
        const result = await response.json()
        setNews(current => {
          return (
            {
              ...result,
              // artikel diambil dari artikel yg sekarang(current), ditambah dengan hasil dari API
              articles: [...current.articles, ...result.articles],
              totalResults: result.totalResults,
              status: result.status
            }
          )
        })
        if (result.status !== "ok")
          throw new Error('error')
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [page, isRefresh])

  return (
    <>
      <h1>Top Headline News</h1>
      {isLoading && <p> Loading...</p>}
      {isError && <p> Error</p>}
      <ol >
        {news.articles.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ol>
      <button disabled={isLoading}>Load More</button>
      <button disabled={isLoading}>Refresh</button>
    </>
  );
}

export default SideEffectComp;