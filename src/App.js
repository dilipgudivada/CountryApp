import React, {useState, useEffect} from 'react';
import DataTable from './components/dataTable';

const  App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries-v1.p.rapidapi.com/all',{ method: 'get', headers: {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"useQueryString": true
    }}).then((repsonse) => repsonse.json()).then((data) => {      setCountries([
        {name: 'India', code: 'Ind'},
        {name: 'USA', code: 'US'},
        {name: 'United of Kingdom', code: 'UK'}
      ]);
    });   
  },[])
  return (
    <div>
      <DataTable countries={countries}/>
    </div>
  );
}

export default App;
