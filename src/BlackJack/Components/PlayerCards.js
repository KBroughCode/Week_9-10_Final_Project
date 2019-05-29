import React from 'react'

const PlayerCard = (props) =>{

  const playersCards = props.cards.map((playerCard, i)=> {
    return <Card


    />
  })

  return(
    <div>
    { playerCards }
    </div>
  )
}


export default PlayerCard
