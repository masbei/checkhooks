import React from 'react'

import {Link} from 'react-router-dom'

const Card = ({movie}) => {
    return (
        <div>
            <div class="card" style={{width: '20rem' , height:'475px' ,marginTop:"50px" ,marginLeft:"0px" ,marginRight:"50px"}}>
  <img src={movie.image} class="card-img-top" alt="..." style={{Height:"500px"}}/>
  <div class="card-body">
    <h5 class="card-title">{movie.name}</h5>
    <p class="card-text">{movie.category}</p>


{
    [1,2,3,4,5,6,7,8,9].map ( el =>(

    el<=movie.rating ? 
    <i key={el}  style={{color:"yellow" }} class="fas fa-star"></i> :<i class="fas fa-star"></i>)) 
}
<br/>

  
    <Link to={`/desc/${movie.name}`}class="btn btn-primary">More details</Link>
  </div>
</div>
            
        </div>
    )
}

export default Card
