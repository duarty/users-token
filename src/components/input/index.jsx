
import InputStyled from './style'

const Input = ({label, icon, register, name, ...rest}) => {
  
  return (
        <InputStyled {...register(name)} {...rest}/>
  )
}

export default Input