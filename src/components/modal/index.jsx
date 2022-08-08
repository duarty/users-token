import Container from './style'
import Input from '../../components/input';
import Button from '../../components/button';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({setModalVisibility, setTechs, showTechs }) => {

    const formSchema = yup.object().shape({
      title: yup.string().required("Nome da tecnologia"),
        status: yup.string().required(),

      })
     
      const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(formSchema)
      })
     
      const onSubmit = ({title, status}) => {
        const techs = {title, status};
        api
        .post('/users/techs', techs, { 
          headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('@kenziehub:token'))}`}
      })
        .then((response) => {
          toast.success("Tecnologia adicionada")
          updateTechs()
          })
        .catch((err) => console.log(err))
      }

      const updateTechs = () => {
        api
        .get(`/users/${JSON.parse(localStorage.getItem('@kenziehub:id'))}`)
        .then((response) => 
          setTechs(response.data.techs))
      }


  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
    <header>
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => setModalVisibility(false)}>X</button>
    </header>
      <div>
        <label>Tecnologia</label>
         <Input  register={register} name="title" placeholder="tecnologia"></Input>
         <label>Selecionar status</label>
           <select name="status" {...register("status")}>
                <option value="Iniciante" >Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                
            </select>

            <Button type="submit" pinkSchema={true} smallSchema={false}>Cadastrar tecnologia</Button>
    </div>

 </Container>
  )
}

export default Modal