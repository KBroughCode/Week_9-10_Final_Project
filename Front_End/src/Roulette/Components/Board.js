import React from 'react'
import './board.css'

const Board = (props) => {

  const numbers = props.numbers.map((number, index) => {
    if ((index+1)===2||(index+1)===4||(index+1)===6||(index+1)===8||(index+1)===10||(index+1)===11||(index+1)===13||(index+1)===15||(index+1)===17||(index+1)===20||(index+1)===22||(index+1)===24||(index+1)===26||(index+1)===28||(index+1)===29||(index+1)===31||(index+1)===33||(index+1)===35) {
      return (
        <div className='numbers-background'>
          <div className='black-numbers numbers' onClick={()=>{props.clickBox(index+1)}}>{number}</div>
        </div>
      )
    } else {
      return (
        <div className='numbers-background'>
          <div className='numbers' onClick={()=>{props.clickBox(index+1)}}>{number}</div>
        </div>
      )
    }
  })




  return(
    <>
      <div className='zero-grid'>
        <div className='zero' onClick={()=>{props.clickBox('0')}}>0</div>
        <div className='double-zero' onClick={()=>{props.clickBox('00')}}>00</div>
      </div>
      <div className='board-grid'>
        <div className='numbers-cont'>
          {numbers}
        </div>
        <div className='one-to-eighteen' onClick={()=>{props.clickBox('1to18')}}>1 TO 18</div>
        <div className='nineteen-to-thirtysix' onClick={()=>{props.clickBox('19to36')}}>19 TO 36</div>
        <div className='row1' onClick={()=>{props.clickBox('row1')}}>2 TO 1</div>
        <div className='row2' onClick={()=>{props.clickBox('row2')}}>2 TO 1</div>
        <div className='row3' onClick={()=>{props.clickBox('row3')}}>2 TO 1</div>
        <div className='one-to-twelve' onClick={()=>{props.clickBox('1to12')}}>1 TO 12</div>
        <div className='thirteen-to-twentyfour' onClick={()=>{props.clickBox('13to24')}}>13 TO 24</div>
        <div className='twentyfive-to-thirtysix' onClick={()=>{props.clickBox('25to36')}}>25 TO 36</div>
        <div className='even-box' onClick={()=>{props.clickBox('even')}}>EVEN</div>
        <div className='odd-box' onClick={()=>{props.clickBox('odd')}}>ODD</div>
        <div className='red' onClick={()=>{props.clickBox('red')}}>RED</div>
        <div className='black' onClick={()=>{props.clickBox('black')}}>BLACK</div>
        <div className='empty1'></div>
        <div className='empty2'></div>
      </div>
    </>
  )
}

export default Board
