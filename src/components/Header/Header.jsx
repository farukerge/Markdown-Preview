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
    <div className=''>
      <div
        className=' justify-end flex p-3 '
        onClick={showHelp}>
          <BsQuestionSquare className=' text-5xl bg-secondary cursor-pointer' />
      </div>
      <div className=' justify-center items-center flex'>
        <h1 className=' text-headline text-3xl font-bold mb-10'>Markdown Previewer</h1>
      </div>
    </div>
  )
}

export default Header