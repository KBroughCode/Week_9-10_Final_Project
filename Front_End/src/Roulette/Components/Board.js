import React from 'react'
import './board.css'

const Board = (props) => {

  const numbers = props.numbers.map((number, index) => {
      if ((index+1)===2||(index+1)===4||(index+1)===6||(index+1)===8||(index+1)===10||(index+1)===11||(index+1)===13||(index+1)===15||(index+1)===17||(index+1)===20||(index+1)===22||(index+1)===24||(index+1)===26||(index+1)===28||(index+1)===29||(index+1)===31||(index+1)===33||(index+1)===35) {
        return (
          <div className='numbers-background'>
            <div className='black-numbers numbers'>{number}</div>
          </div>
        )
      } else {
        return (
          <div className='numbers-background'>
            <div className='numbers'>{number}</div>
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
