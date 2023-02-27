import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => {
    //event.nativeEvent.stopImmediatePropagation()
    router.push(`/?tag=${value}`)
  }
  return (
    <span 
      onClick={(event) => handleClick(event, children)}
      className="mr-1 mb-2 text-xs md:text-sm font-medium uppercase text-sky-500 hover:text-sky-600 dark:hover:text-sky-400">
        {children}
    </span>
  )
}

export default Tag
