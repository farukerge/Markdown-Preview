import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickButton } from '../../features/markdownSLice'
import { BsQuestionSquare } from 'react-icons/bs'



const Header = () => {
  const dispatch = useDispatch()
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp)

  function showHelp() {
    dispatch(clickButton());
    console.log(isShowingHelp)
  }
  return (
    <div className='flex flex-col '>
      <div
        className=' justify-end flex'
        onClick={showHelp}>
          <BsQuestionSquare />
      </div>
      <div className=' justify-center items-center flex'>
        <h1>Markdown Previewer</h1>
      </div>
    </div>
  )
}

export default Header