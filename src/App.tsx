import './App.css';
import { Header } from './components/Header';
import { Divider } from './components/Divider';
import { NavBar } from './components/NavBar';
import { CardStack } from './components/CardStack';

function App() {
  return (
    <div className="latte min-h-screen bg-ctp-base text-ctp-text">
      <Header/>
      <Divider/>
      <NavBar/>
      <Divider/>
      <CardStack/>
      <div className="py-32">
        {/*filler thing*/}
      </div>
    </div>
  )
}

// @ts-expect-error shush
export default App
