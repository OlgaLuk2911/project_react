import Authorization from './components/Authorization/Authorization';
import ListOfWords from './components/ListOfWords/ListOfWords';
import './style/app.scss';
import data from './data.json'
import AddWord from './components/AddWord/AddWord';

function App() {
  return (
    <div>
      <Authorization/>
      <h3 className='title'>Список слов</h3>
      <AddWord/>
      {data.map(item=><ListOfWords {...item}/> )}
         
    </div>
  );
}

export default App;
