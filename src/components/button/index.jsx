
import Container from './style'

const Button = ({children, pinkSchema = true, smallSchema = false, ...rest}) => {
  return (
    <Container pinkSchema={pinkSchema} smallSchema={smallSchema} children={children} {...rest}/>
  )
}

export default Button