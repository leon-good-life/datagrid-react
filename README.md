# DataGrid ReactJS
## Installation instructions


    git clone https://github.com/leon-good-life/datagrid-react.git
    cd DataGrid
    npm install
    npm start

## Screenshot
![screenshot](screenshot.gif)


## Usage
### Using DataGrid in your project
1. Copy the "datagrid-react/src/DataGrid" directory into your project.
```bash
cp -R PATH_OF_THIS_CLONED_PROJECT/datagrid-react/src/DataGrid PATH_OF_YOUR_PROJECT/DataGrid
```

2. import DataGrid
```javascript
import DataGrid from './DataGrid/DataGrid';
```

3. Create an array of some data.
```javascript
const data = [{
    id: '1481235831572',
    firstName: 'Jeff',
    lastName: 'Bezoz',
    company: 'Amazon',
    phone: '053123456',
    email: 'jeff@amazon.com'
  }, {
    id: '1481235831573',
    firstName: 'Elon',
    lastName: 'Mask',
    company: 'Tesla',
    phone: '053123456',
    email: 'elon@tesla.com'
  }];
```
4. Add DataGrid Component to your project and pass images array.
```html
<DataGrid data={data} />
```
5. This widget is using lodash. If your project has no lodash. Install it:
```bash
npm i --save lodash
```

### Optional props
* **hiddenColumns** - array of columns that passed in data, but are hidden from the user. Example:
  ```html
  <DataGrid data={imagesArr} hiddenColumns={['id']} />
  ```

* **actions** - allows to add and configure a column with custom actions such as delete and edit. The actions prop is an array. Each item in the array has action name and function. Here is an example:
  ```javascript
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
  }];
  ```
  ```html
  <DataGrid data={imagesArr} actions={actions} />
  ```
  
## Demo project
* Simple CRUD (create, read, update, delete) contacts web application wirtten in React and Redux, and using this widget: https://github.com/leon-good-life/reactCRUD
