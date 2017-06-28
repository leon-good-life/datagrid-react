import React from 'react';
import DataGrid from './DataGrid/DataGrid';
import dataArr from './dataArr';
import './App.css';

class App extends React.Component {
  render() {
    let actions = [{
      name: 'Delete',
      fn: (row)=>{
        alert('Delete Clicked.');
        console.log('Delete Clicked. Row:', row);
      }
    }, {
      name: 'Edit',
      fn: (row)=>{
        alert('Edit Clicked.');
        console.log('Edit Clicked. Row:', row);
      }
    }]
    return (
      <DataGrid data={dataArr}
            hiddenColumns={['id']}
            actions={actions} />
    );
  }
}

export default App;
