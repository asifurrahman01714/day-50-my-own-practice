import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [nayok, setNayok] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => { 
      // console.log(data);
      setNayok(data);
    })
  },[]);
  const nayokNames =[
    {name: 'alamgir', nayika: 'sabnur'},
    {name: 'razzak', nayika: 'bobita'},
    {name: 'bapparaz', nayika: 'cheka'}
  ];
  const headingStyle = {backgroundColor:"cyan"};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
          console.log(nayok)
        }
        <h1 style={headingStyle}>Calling nayok from the useEffect api</h1>
        {
          nayok.map(nk => <Nayok name={nk.name} key={nk.username}></Nayok>)
        }

        <h2 style={headingStyle}>Calling the Nayok component from nayoks array</h2>
        {
          nayokNames.map(nayok => <Nayok name={nayok.name} nayika={nayok.nayika}></Nayok>)
        }
      
      <MovieCounter></MovieCounter>
      </header>
    </div>
  );
}

function Nayok(props) {
  //console.log(props);
  const {name, nayika} = props;
  //console.log(name, nayika);
  const nayokStyle = {border: '1px solid cyan', margin: '5px', };
  return(
    <div style={nayokStyle}>
      <h1>Nayok : {name}</h1>
      <h1>Nayok : {nayika}</h1>
      <h2>I have done 5 movies </h2>
    </div>
  )
}

const MovieCounter = () => {
  const [movie, setMovie] = useState(0);
  //console.log(movie, setMovie);
  return (
    <div>
      <button onClick={() =>setMovie(movie+1)}>Add movie</button>
      <h1>Number of Movies:{movie} </h1>
      <MovieActed countMovie ={movie}></MovieActed>
    </div>
  );
};

function MovieActed(props) {
  const {countMovie} = props;
  return(
    <div>
      <h1>The movies I have acted:{countMovie} </h1>
    </div>
  )
}
export default App;
