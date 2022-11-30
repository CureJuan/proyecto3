import './App.css';
import ColorsCreateForm from './ui-components/ColorsCreateForm'

function App() {


  return (
    <div className="App">
        <h1 className='title'>
         Listado de {process.env.REACT_APP_NAME}
        </h1>
        <ColorsCreateForm />
      <div>
   
        <table className="table-list">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Banda</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                   <td>{process.env.name}</td>
                   <td>{process.env.band}</td>
                   <td>{process.env.year}</td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
