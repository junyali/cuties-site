import './App.css';
import { Divider } from './components/Divider';

function App() {
  return (
    <div className="latte min-h-screen bg-ctp-base text-ctp-text">
      <header className="max-w-7xl mx-auto flex items-center justify-center gap-6 px-6 py-16">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender rounded-full blur-2xl opacity-30"></div>
          <img
            src="/junyacat.png"
            alt="meow"
            className="relative w-24 h-24 rounded-2xl border-4 border-ctp-pink/30 shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-ctp-pink">junyaverse</h1>
          <p className="text-sm text-ctp-subtext0 mt-1">ෆ ˖ ⁺ ☁⋆ ੭</p>
        </div>
      </header>
    <Divider/>
    </div>
  )
}

export default App
