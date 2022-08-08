import Container from './style'
import Input from '../../components/input';
import Button from '../../components/button';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import  api  from '../../services/api';
import {  toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import { Redirect } from 'react-router-dom';


function Register (){

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório").matches(/^[ a-zA-Z á]*$/, "Nome deve conter apenas letras"),
        email: yup.string().required("Email obrigatório").email("email inválido"),
        password: yup.string().required("informe uma senha").matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()__+.]){1,}).{8,}$/, "A senha deve ter 8 dígitos"),
        password_confirm: yup.string().required("confirme sua senha").matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()__+.]){1,}).{8,}$/, "A senha deve ter 8 dígitos")
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
        bio: yup.string().required("Biografia obrigatória"),
        contact: yup.string().matches(/^[ 0-9 ]*$/, "Apenas números").required("Informe o número"),
        course_module:yup.string().required("Informe o módulo"),
        
      })
     
      const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(formSchema)
      })
     
      const onSubmit = ({name, email, password, bio, contact,course_module}) => {
        const user = {name, email, password, bio, contact, course_module};
        api
        .post('/users', user)
        .then((response) => {
          toast.success("Conta criada")
          return history.push("/")})
        .catch((err) => toast.error("Verifique seu email"))
      }

      const back = () => {
        return <Redirect to="/"/>
      }

    return (
        
    <Container onSubmit={handleSubmit(onSubmit)}>
       <div>
         <header>
            <img src={Logo} alt='kenziehub'/> <Button onClick={back} pinkSchema={false}  smallSchema={true}>Voltar</Button>
         </header>
       </div>
       <h3>Crie sua conta</h3>
       <p>Rápido e grátis, vamos nessa</p>
       <div>
           <label>Nome</label>
            <Input register={register} name="name" placeholder="Digite seu nome"></Input>
       </div>
       <div>
           <label>Email</label>
            <Input  register={register} name="email" placeholder="Digite seu email"></Input>
       </div>
       <div>
           <label>Senha</label>
            <Input  register={register} name="password" placeholder="Digite sua senha "></Input>
       </div>
       <div>
           <label>Confirmar senha</label>
            <Input  register={register} name="password_confirm" placeholder="Confirme sua senha"></Input>
       </div>
       <div>
           <label>Bio</label>
            <Input  register={register} name="bio" placeholder="Biografia"></Input>
       </div>
       <div>
           <label>Contato</label>
            <Input  register={register} name="contact" placeholder="Digite seu número"></Input>
       </div>
       <div>
           <label>Selecionar módulo</label>
           <select name="course_module" {...register("course_module")}>
                <option value="Primeiro módulo" >Primeiro módulo</option>
                <option value="Segundo módulo">Segundo módulo</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo">Quarto módulo</option>
            </select>
            
       </div>
       <Button type="submit" pinkSchema={true}>Criar</Button>
       
        
    </Container>
           
    )
}

export default Register;