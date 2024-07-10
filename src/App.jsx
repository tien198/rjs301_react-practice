import Expenses from "./components/Expenses";
import './App.css';

function App() {
  const par = document.createElement('p');
  par.textContent = 'Parameters Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem tenetur quae earum facere laborum cupiditate beatae quos suscipit quo quis, quia, a quidem et qui. Officia corrupti eveniet laboriosm';
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  document.getElementById('root').append(par);
  return (
    <div className="App-header">
      {/* <header className='App-header'> */}
      <h1>Let get started!</h1>
      <Expenses items={expenses} />
      {/* </header> */}
    </div>
  );
}

export default App;
