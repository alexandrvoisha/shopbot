
import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div>
      <h1>Hi i am shopoBot</h1>
      <Button type={"add"} title={"+"} disable={false}/>
      <Button type={"remove"} title={"-"} disable={false}/>
      <Button type={"checkout"} title={"Checkout"} disable={false}/>
    </div>
  );
}

export default App;
