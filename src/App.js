import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';


function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => 
      setUsers(response.data))
      .catch(error => console.log(error))
    
  },   [] );  

  return (
    <div className="App">
     <pre>{JSON.stringify(users, null, 2)}</pre> <UserList users={users}/>
    </div>
  );
}

export default App;
