import React, {useState, useEffect} from 'react';
import DataTable from './components/dataTable';

const  App = () => {
  const [countries, setCountries] = useState([]);
  const [pageNo, setPageNo]= useState(1);
  const [entries, setEntries] =useState(5);
  const [paginationCount, setPaginationCount]=useState(1);

  const getCountriesApiCall = (_pageNo, _entries) => {
   return fetch(`http://localhost:5000/api/countries?pageNo=${_pageNo}&entries=${_entries}`,{ method: 'get'}).then((repsonse) => repsonse.json()).then((data) => {   
      setCountries(data.list);
        const paginationCount = Math.round(data.count / entries);
        console.log(paginationCount)
        setPaginationCount(paginationCount);
    });
  }
  // inital Call
  useEffect(() => {
    getCountriesApiCall(pageNo, entries);
  },[]);
  // on Change Page No and Entries
  useEffect(() => {
    getCountriesApiCall(pageNo, entries);
  },[pageNo, entries]);

  const handlePageNo = (pageNo) => {
    setPageNo(pageNo);
  }
  
  const handleEntries = (entries) => {
    setPageNo(1);
    setEntries(entries);
    
  }
  return (
    <div>
      <DataTable 
      countries={countries}
      handlePageNo={handlePageNo}
      handleEntries={handleEntries}
      paginationCount={paginationCount}
      pageNo={pageNo}
      entries={entries}
      />
    </div>
  );
}

export default App;
