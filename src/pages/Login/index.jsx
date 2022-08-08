import Container from './style'
import Input from '../../components/input';
import Button from '../../components/button';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import  api  from '../../services/api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';



function Login ({authenticated, setAuthenticated}){

    const formSchema = yup.object().shape({
        
        email: yup.string().required("Email obrigatório").email("email inválido"),
        password: yup.string().required("informe uma senha").matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()__+.]){1,}).{8,}$/, "A senha deve ter 8 dígitos"),
        
      })
     
      const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(formSchema)
      })

     const history = useHistory()

      const onSubmit = (data) => {
        api
            .post('/sessions', data)
            .then((response) => {
                const {token, user} = response.data
                localStorage.setItem("@kenziehub:token", JSON.stringify(token))
                localStorage.setItem("@kenziehub:id", JSON.stringify(user.id))
                setAuthenticated(true)
                return history.push("/dashboard")
            })
            .catch((err) => toast.error("Email ou senha invalidos"))
      }

      if(authenticated){
        return <Redirect to="/dashboard"/>
      }

    return (
        
    <Container onSubmit={handleSubmit(onSubmit)}>
       <h3>Login</h3>
         <div>
           <label>Email</label>
            <Input  register={register} name="email" placeholder="Digite seu email"></Input>
       </div>
       <div>
           <label>Senha</label>
            <Input  register={register} name="password" placeholder="Digite sua senha "></Input>
       </div>
       <Button type="submit" pinkSchema={true}>Logar-se</Button>
       <div>
            <p>Ainda não possui uma conta?</p>
            <Button onClick={() => history.push("/register")} pinkSchema={false}>Cadastrar-se</Button>
        </div>
    </Container>
           
    )
}

export default Login;