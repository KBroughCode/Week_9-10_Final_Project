import React from 'react'
import './board.css'
import Coins from './Coins'

const Board = (props) => {

  const numbers = props.numbers.map((number, index) => {
    if ((index+1)===2||(index+1)===4||(index+1)===6||(index+1)===8||(index+1)===10||(index+1)===11||(index+1)===13||(index+1)===15||(index+1)===17||(index+1)===20||(index+1)===22||(index+1)===24||(index+1)===26||(index+1)===28||(index+1)===29||(index+1)===31||(index+1)===33||(index+1)===35) {
      return (
        <div className='numbers-background' onClick={()=>{props.clickBox(index+1)}}>
          <Coins box={index+1} board={props.board} containerClass='box-coin-stack-cont'/>
          <div className='black-numbers numbers'>{number}</div>
        </div>
      )
    } else {
      return (
        <div className='numbers-background'  onClick={()=>{props.clickBox(index+1)}}>
          <Coins box={index+1} board={props.board} containerClass='box-coin-stack-cont'/>
          <div className='numbers'>{number}</div>
        </div>
      )
    }
  })



  return(
    <>
      <div className='zero-grid'>
        <div className='zero' onClick={()=>{props.clickBox('0')}}>
          0
          <Coins className='zero-coins' box={'0'} board={props.board} containerClass='outer-coin-stack-cont zero-coins'/>
        </div>
        <div className='double-zero' onClick={()=>{props.clickBox('00')}}>
          <Coins className='zero-coins' box={'00'} board={props.board} containerClass='outer-coin-stack-cont double-zero-coins'/>
          00
        </div>
      </div>
      <div className='board-grid'>
        <div className='numbers-cont'>
          {numbers}
        </div>
        <div className='one-to-eighteen' onClick={()=>{props.clickBox('1to18')}}>
          <Coins className='outer-grid' box={'1to18'} board={props.board} containerClass='outer-coin-stack-cont'/>
          1 TO 18
        </div>
        <div className='nineteen-to-thirtysix' onClick={()=>{props.clickBox('19to36')}}>
          <Coins className='outer-grid' box={'19to36'} board={props.board} containerClass='outer-coin-stack-cont'/>
          19 TO 36
        </div>
        <div className='row1' onClick={()=>{props.clickBox('row1')}}>
          <Coins className='outer-grid' box={'row1'} board={props.board} containerClass='outer-coin-stack-cont row-coins'/>
          2 TO 1
        </div>
        <div className='row2' onClick={()=>{props.clickBox('row2')}}>
          <Coins className='outer-grid' box={'row2'} board={props.board} containerClass='outer-coin-stack-cont row-coins'/>
          2 TO 1
        </div>
        <div className='row3' onClick={()=>{props.clickBox('row3')}}>
          <Coins className='outer-grid' box={'row3'} board={props.board} containerClass='outer-coin-stack-cont row-coins'/>
          2 TO 1
        </div>
        <div className='one-to-twelve' onClick={()=>{props.clickBox('1to12')}}>
          <Coins className='outer-grid' box={'1to12'} board={props.board} containerClass='outer-coin-stack-cont'/>
          1 TO 12
        </div>
        <div className='thirteen-to-twentyfour' onClick={()=>{props.clickBox('13to24')}}>
          <Coins className='outer-grid' box={'13to24'} board={props.board} containerClass='outer-coin-stack-cont'/>
          13 TO 24
        </div>
        <div className='twentyfive-to-thirtysix' onClick={()=>{props.clickBox('25to36')}}>
          <Coins className='outer-grid' box={'25to36'} board={props.board} containerClass='outer-coin-stack-cont'/>
          25 TO 36
        </div>
        <div className='even-box' onClick={()=>{props.clickBox('even')}}>
          <Coins className='outer-grid' box={'even'} board={props.board} containerClass='outer-coin-stack-cont bottom-row-coins'/>
          EVEN
        </div>
        <div className='odd-box' onClick={()=>{props.clickBox('odd')}}>
          <Coins className='outer-grid' box={'odd'} board={props.board} containerClass='outer-coin-stack-cont bottom-row-coins'/>
          ODD
        </div>
        <div className='red' onClick={()=>{props.clickBox('red')}}>
          <Coins className='outer-grid' box={'red'} board={props.board} containerClass='outer-coin-stack-cont bottom-row-coins'/>
          RED
        </div>
        <div className='black' onClick={()=>{props.clickBox('black')}}>
          <Coins className='outer-grid' box={'black'} board={props.board} containerClass='outer-coin-stack-cont bottom-row-coins'/>
          BLACK
        </div>
        <div className='empty1'></div>
        <div className='empty2'></div>
      </div>
    </>
  )
}

export default Board
