// import logo from './logo.svg';
import './App.css';
import Header from './header'
import Card from './card'
import data from "./data"

function App() {

  const dataItems = data.map(item =>{
    return <Card
        key={item.id}
        item={item}
    />
    })
  return (
    <div className='App'>
      <Header />
      <section className="card">
                {dataItems}
            </section>
    </div>
  );
}

export default App;
