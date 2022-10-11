import './App.css';
import Cards from './Cards';
import users from './users.json';

function App() {
  return (
    <div className='container'>
      <div className='cards'>
        <Cards users={users}/>
      </div>
    </div>
  );
}

export default App;
