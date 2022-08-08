import {Route, Switch} from 'react-router-dom'
import Login from '../pages/Login/index'
import Register from '../pages/register'
import Dashboard from '../pages/dashboard'
import { useState } from 'react'
import { useEffect } from 'react'

const Routes = () => {

  const [authenticated , setAuthenticated] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@kenziehub:token'))

    if(token) {
      return setAuthenticated(true)
    }

  },[authenticated])

  return (

    <Switch>
        <Route exact path="/">
            <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </Route>
        <Route path="/register">
            <Register authenticated={authenticated}/>
        </Route>
        <Route path="/dashboard">
            <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </Route>
    </Switch>
   
  )
}

export default Routes