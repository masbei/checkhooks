import React from 'react'
import Moviesdata from '../moviesData'

const Description = ({match}) => {

    const filtredList = Moviesdata.filter(el => el.name == match.params.name)
    return (
        <div>
            <iframe width="560" height="315" 
            src={filtredList[0].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{filtredList[0].description}</p>
        </div>
    )
}

export default Description
