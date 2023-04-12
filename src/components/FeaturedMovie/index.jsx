import React from "react"
import './FeaturedMovie.css'


export default function FeaturedMovie({ item }){
  let fistDate = new Date(item.first_air_date)
  let genres = []

  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  return (
    <section className="featured" style={{
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} points</div>
            <div className="featured--year">{fistDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--playbtn">Play</a>
            <a href={`/list/add/${item.id}`} className="featured--mylistbtn">More Info</a>
          </div>
          <div className="featured--genres">Genres: {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}