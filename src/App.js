import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 25),
      description: 'Телевизор',
      amount: 1254.99
    },
    {
      date: new Date(2021, 2, 12),
      description: 'Джинсы',
      amount: 49.99
    },
    {
      date: new Date(2021, 2, 12),
      description: 'Рубашка',
      amount: 73.99
    }
  ];

  return (
    <div>
      <h1>Начнем изучение React!</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
