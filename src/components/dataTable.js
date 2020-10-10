import React, { useState, useEffect} from 'react';

const DataTable = ({countries, pageNo, RecordsPerPage}) => {
    const [renderRows, setRenderRows] = useState([]);
    const handeRender =(countries) => {
        let renderRows  = [];
        if(countries && countries.length) {
            countries.forEach((item) => {
                renderRows.push(<tr>
                    <td style={{ width: '50%', borderBottom: '2px solid black' }}> {item.name}</td>
                    <td style={{ width: '50%', borderBottom: '2px solid black'}}> {item.code} </td>
                </tr>)
            });
        } else {
            renderRows= (<tr> 
                <td colSpan={2} style={{ textAlign: 'center', fontSize: 28 , fontWeight: 900 , padding: '100px 0px', borderBottom: '2px solid black'}}>No Data Found</td></tr>)
        }
        return renderRows;
    }
    useEffect(() => {
        console.log(countries);
        
        setRenderRows(handeRender(countries));
        // console.log(renderRows);

    },[countries]);

    const handleChange = (e) => {

        setRenderRows(handeRender(countries.filter( (item) => {return item.name.indexOf(e.target.value) })));
    }
    
  return (
    <div>
        <div>
        <div style={{ display: 'inline-block', margin: '20px 20px', fontSize: 24 }}>
        <label>Show</label> {' '}
    <select style={{ height: 30 }}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="10">20</option>
    </select> {' '}
    <label>entries</label>
    </div>

    <div style={{ display: 'inline-block', margin: 20, fontSize: 24, height: 40, position: 'relative', right: 20, float: 'right' }}>
     <label >Search by Country Name : </label>   
     <input type="search" style={{ height: 30, borderRadius: 5 , wdith: 200 }} onChange={handleChange} />
    </div>
    </div>
    <div style={{ width : '100%'}}>
      <table style={{ width : '100%', border: '2px solid black'}}>
          <tr>
              <th style={{ width: '50%', borderBottom: '2px solid black'}}> Name</th>
              <th style={{ width: '50%', borderBottom: '2px solid black'}}> Code</th>
          </tr>
          {renderRows}
      </table>
      </div>
    </div>
  );
}

export default DataTable;
