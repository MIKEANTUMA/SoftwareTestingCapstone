import logo from './logo.svg';
import './App.css';
import { writeUserData } from './Firebase/WriteUser'
import { authUser } from './Firebase/Auth'
 
function App() {
 
  const createUser = (userEmail, userPassword, name, userId) =>{
   
    console.log("AUTH USER: ", authUser(userEmail, userPassword))
    // if(user !==  false){
    //   writeUserData(userId, name, userEmail)
    // }else{
    //   console.log('auth user failed')
    // }
    // console.log(user)s
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => createUser('mike@123.com', 'mike12', 'mike', 1) }>press me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
export default App;