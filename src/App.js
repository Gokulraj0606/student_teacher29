import './App.css';
import UserComponent from './Components/UserComponent';
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { AddUser } from './Components/AddUser';
import { data } from './Data/data';
import { useState } from 'react';
import NoPage from './Components/NoPage';
import UserDetails from './Components/UserDetails';
import EditUser from './Components/EditUser';

import UserComponentt from './Components/UserComponentt';
import { AddUsert } from './Components/AddUsert';
import { datat } from './Data/TeachersData';
import UserDetailst from './Components/UserDetailst';
import EditUsert from './Components/EditUsert';


function App() {
  const [user, setUser] = useState(data)
  const [usert, setUsert] = useState(datat)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserComponent
              user={user}
              setUser={setUser} />
          </Route>

          <Route path="/t">
            <UserComponentt
              usert={usert}
              setUsert={setUsert} />
          </Route>


          <Route path="/adduser">
            <AddUser
              user={user}
              setUser={setUser} />
          </Route>

          <Route path="/addusert">
            <AddUsert
              usert={usert}
              setUsert={setUsert} />
          </Route>


          <Route path="/edit/:id">
            <EditUser
              user={user}
              setUser={setUser}
            />
          </Route>

          <Route path="/editt/:tid">
            <EditUsert
              usert={usert}
              setUsert={setUsert}
            />
          </Route>


          <Route path="/user/:id">
            <UserDetails user={user} />
          </Route>

          <Route path="/usert/:tid">
            <UserDetailst usert={usert} />
          </Route>


          <Route path="**">
            <NoPage />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

