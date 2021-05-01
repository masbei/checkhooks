import React , {useState} from 'react'
import Card from'./Card'
import data from'../moviesData'
import AddModal from'./AddModal'

const MovieList = () => {
const [movies, setMovies] = useState(data)
const [isOpen , setIsOpen] = useState(false)
const[inputFilter,setInputFilter] =useState('')
const[ratingFilter ,setRating]=useState(0)


const closeModal = () => setIsOpen(false)
const addMovie =(newMovie)=> setMovies ([...movies,newMovie])

const filtredList=movies.filter(el=>ratingFilter !==0 ?     el.name.toLowerCase().includes(inputFilter.toLowerCase()) && el.rating== ratingFilter:el.name.toLowerCase().includes(inputFilter.toLowerCase()) )



    return (
        <div>
   <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" onChange={(e)=> setInputFilter(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div>
    {[1,2,3,4,5,6,7,8,9].map(el=>
    
    <i key={el} class="fas fa-star" style={{color: el<= ratingFilter ? "yellow" :"black" ,cursor:"pointer"}} onClick={()=>ratingFilter==el? setRating(el-1): setRating (el)} ></i> )}</div>
  </div>
</nav>
            
         
            <button onClick={()=> setIsOpen(true)} >Add Movie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>
        <div style={{display:"flex" ,justifyContent:"space-around" ,flexFlow:"wrap",}}>

{
    filtredList.map((el,i) => (
        <Card key={i} movie={el}/>  ))

    
}


            
 </div></div>
    )
}

export default MovieList
