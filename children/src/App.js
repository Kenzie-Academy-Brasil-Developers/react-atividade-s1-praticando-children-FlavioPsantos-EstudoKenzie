import './App.css';
import './componets/centeredCard'
import CenteredCard from './componets/centeredCard';
const names = [{
    nome: 'Ana',
    age: 37,
    quarter: 1
  },
  {
    nome: 'Bruno',
    age: 37,
    quarter: 1
  },
  {
    nome: 'Carlos',
    age: 37,
    quarter: 1
  }
]
const name = names.map((item)=>
  <span>{item.nome}</span>
)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CenteredCard children={name}/>
      </header>
    </div>
  );
}

export default App;
