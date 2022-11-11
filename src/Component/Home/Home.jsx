import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import{BiPlay} from 'react-icons/bi'
import{AiOutlinePlus} from 'react-icons/ai'


const apiKey ="e252cb8d85b497b9507025c4cce594b2"
const url ="https://api.themoviedb.org/3/"
const upcoming = "upcoming"
const imgUrl = "https://image.tmdb.org/t/p/w500"
const nowPlaying = "now_playing"
const popular ="popular"
const toprated ="top_rated"


const Card =({img}) =>(
  <img className='card' src={img} alt="cover" />
)

const Row =({title,arr=[{
  img:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
}]}) =>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
        {
          arr.map((item,index)=>(
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
          ))
        }
    </div>
  </div>
)

const Home = () => {


  const [upcomingMovie,setUpcomingMovie]= useState([])
  const [jnowPlaying,setnowPlaying]= useState([])
  const [jpopular,setpopular]= useState([])
  const [jtoprated,settoprated]= useState([])
  const [genre,setGenre]=useState([])

  


  useEffect(()=>{
    const fetchUpcoming = async()=>{
      const {data:{results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setUpcomingMovie(results)
     };
     

     const fetchnowPlaying = async()=>{
      const {data:{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setnowPlaying(results)
     };
    

     const fetchpopular = async()=>{
      const {data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setpopular(results)
     };
     

     const fetchtoprated = async()=>{
      const {data:{results}}= await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`)
      settoprated(results)
     };

     const getAllgener = async()=>{
      const {data:{genres}}= await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
      setGenre(genres)
     };



     fetchtoprated()
     fetchpopular()
     fetchnowPlaying()
     fetchUpcoming()
     getAllgener()
     

  },[])


  return (
   
    <>
      <section className="home">
        <div className="banner" style={{
          backgroundImage:jpopular? `url(${`${imgUrl}/${jpopular[0].poster_path}`})` : "rgb(7, 7, 7)"
        }}>
          {
                 jpopular[0] &&(
                  <h1>{jpopular[0].original_title}</h1>
                 )
          }
          {
                 jpopular[0] &&(
                  <p>{jpopular[0].overview}</p>
                 )
          }
          <div>
              <button><BiPlay/> Play</button>
              <button>My List <AiOutlinePlus/></button>
         </div>
        </div>
        <Row title={"Upcoming Movies"} arr={upcomingMovie}/>
        <Row title={"Now-playing"} arr={jnowPlaying}/>
        <Row title={"Popular"} arr={jpopular}/>
        <Row title={"Top-rated"} arr={jtoprated}/>

        <div className="genreBox">
          {genre.map((item)=>(
            <Link key={item.name} to={`/genre/${item.name}`}>{item.name}</Link>
          ))}
        </div>
      
      </section>
    </>
  )
}

export default Home






    