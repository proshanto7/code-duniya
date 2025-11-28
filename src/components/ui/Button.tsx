

function Button({title ,className , onClick} : {title : string , className?:string, onClick?: () => void}) {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`} >{title}</button>
  )
}

export default Button