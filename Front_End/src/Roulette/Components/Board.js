import React from 'react'
import './board.css'

const Board = (props) => {

  const numbers = props.numbers.map((number, index) => {
      if (index % 2 === 0) {
        return (
          <div className='numbers-background'>
            <div className='odd numbers'>{number}</div>
          </div>
        )
      } else {
        return (
          <div className='numbers-background'>
            <div className='even numbers'>{number}</div>
          </div>
        )
      }

    })


  return(
    <>
      <div className='zero-grid'>
        <div className='zero'>0</div>
        <div className='double-zero'>00</div>
      </div>
      <div className='board-grid'>
        <div className='numbers-cont'>
          {numbers}
        </div>
        <div className='one-to-eighteen'>1 TO 18</div>
        <div className='nineteen-to-thirtysix'>19 TO 36</div>
        <div className='row1'>2 TO 1</div>
        <div className='row2'>2 TO 1</div>
        <div className='row3'>2 TO 1</div>
        <div className='one-to-twelve'>1 TO 12</div>
        <div className='thirteen-to-twentyfour'>13 TO 24</div>
        <div className='twentyfive-to-thirtysix'>25 TO 36</div>
        <div className='even-box'>EVEN</div>
        <div className='odd-box'>ODD</div>
        <div className='red'>RED</div>
        <div className='black'>BLACK</div>
        <div className='empty1'></div>
        <div className='empty2'></div>
      </div>
    </>
  )
}

export default Board
