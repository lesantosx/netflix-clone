import React, { useEffect, useState } from "react"
import 'App.css'
import Tmdb from "./Tmdb"

import MovieRow from "components/MovieRow"
import FeaturedMovie from "components/FeaturedMovie"
import Header from "components/Header"
import Footer from "components/Footer"

export default function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let orignals = list.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (orignals[0].items.results.length - 1))
      let chosen = orignals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv') 

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      
      <section className="lists">
        {movieList.map((item, key) => {
          return (
            <MovieRow key={key} title={item.title} items={item.items}/>
          )
        })}

      </section>
      <Footer />
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading"/>
        </div>
      }
    </div>
  );
}
