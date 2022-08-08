
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Button from '../../components/button'
import { Header, UserName, Container, Render, Main, Card } from './style'
import Modal from '../../components/modal'
import api from '../../services/api'


const Dashboard = ({setAuthenticated, authenticated}) => {

  const [user, setUser] = useState({})
 
  const [techs, setTechs] = useState([])

  useEffect(() => {
    showTechs()
  }, [])


  const showTechs = () =>{
    api
      .get(`/users/${JSON.parse(localStorage.getItem('@kenziehub:id'))}`)
      .then((response) => {
        setTechs(response.data.techs)
        setUser(response.data)
        
      })
  }
 
  const logout = () =>{
      localStorage.clear()
      setAuthenticated(false)
  }

  const [modalVisibility , setModalVisibility] = useState(false)

  if(!authenticated){
    return <Redirect to="/"/>
      
  }


  return (
    <Container>
        <Header>
            <img src={Logo} alt='kenziehub'/>
            <Button onClick={logout} pinkSchema={false} smallSchema={true}>Sair</Button>
        </Header>
        <UserName>
              <h1>{user.name}</h1>
              <span>{user.course_module}</span>
        </UserName>
        <Main>
            <h2>Tecnologias</h2>
            <Button onClick={() => setModalVisibility(true)} pinkSchema={false} smallSchema={true}>+</Button>
            {modalVisibility && <Modal showTechs={showTechs} setTechs={setTechs} setModalVisibility={setModalVisibility}/>}
        </Main>
        <Render>
         {techs.map((tech) => <Card><h2>{tech.title}</h2><div><p>{tech.status}</p></div></Card>)}
        </Render>
    </Container>
  )
}

export default Dashboard