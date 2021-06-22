import { ButtonHTMLAttributes } from 'react'
import '../styles/genericButton.scss';

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>



export const GenericButton = (props: buttonProps) => {
  return (
    <button className="generic-button" {...props}>

    </button>
  )
}


