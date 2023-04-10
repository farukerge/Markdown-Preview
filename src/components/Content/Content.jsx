import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../../features/markdownSLice'

const Content = () => {

  const dispatch = useDispatch();
  const textUser = useSelector((state) => state.markdown.textUser);
  const textHelp = useSelector((state) => state.markdown.textHelp);
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp)
  console.log(textUser,textHelp)

  return (
    <div className=' flex  w-2/4 mx-auto items-center  justify-center  gap-10 '>
      <textarea
        className=' w-2/4  h-[40rem] p-5 rounded-lg bg-secondary  text-paragraph scrollbar scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-yellow-700 '
        value={isShowingHelp ? textHelp : textUser}
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
              
        <div className=' overflow-y-auto h-[40rem] w-2/4 p-5 bg-secondary rounded-lg text-paragraph '>
            <ReactMarkdown
              children={isShowingHelp ? textHelp : textUser}
              remarkPlugins={[remarkGfm]}
            />
        </div>
    </div>
  )
}

export default Content