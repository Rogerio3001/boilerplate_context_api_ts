import React, { useContext } from 'react'

import CompanyContext from './context/company';
import UserContext from "./context/user";

function App() {

  const { state: stateUser, setState: setStateUser } = useContext(UserContext)
  const { state: stateCompany, setState: setStateCompany } = useContext(CompanyContext)

  function handleChangeName(name){
    setStateUser({ name })
  }

  function handleChangeCompany(name){
    setStateCompany({ name })
  }
  
  return (
    <div className="App">
      <h1>Nome do user: {stateUser.name}</h1>
      <button onClick={_ => handleChangeName('Rogerio Botelho')}>Change Name</button>
      <h1>Worked on: {stateCompany.name}</h1>
      <button onClick={_ => handleChangeCompany('Canon Brasil')}>Change Company</button>
    </div>
  );
}

export default App;
