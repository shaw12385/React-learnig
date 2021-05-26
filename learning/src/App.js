import Expence from './components/Expences/Expence';


function App() {
  const expences = [
    {title:'Car Insurence', amount:250, date:new Date(2021,5,22)},
    {title:'Byke Insurence', amount:150, date:new Date(2021,5,22)},
    {title:'Super Car Insurence', amount:350, date:new Date(2021,5,22)},
    {title:'Motor Car Insurence', amount:950, date:new Date(2021,5,22)},
    
  ]
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Kunal Shaw
        </h1>
        <Expence items={expences}/>
      </div>
    </div>
  );
}

export default App;
