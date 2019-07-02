import React from 'react'
import Player from './Player'

const Players = ({ names }) => {
  const namesEl =
    names && names.map((name, index) => <Player key={index} name={name} />)
  return <section>{namesEl}</section>
}

export default Players
