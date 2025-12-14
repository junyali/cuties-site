import './App.css';
import { Divider } from './components/Divider';
import { WaveText } from './components/WaveText';
import { NavBar } from './components/NavBar';

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
          <WaveText text="junyaverse" />
          <p className="text-sm text-ctp-subtext0 mt-1">ෆ ˖ ⁺ ☁⋆ ੭</p>
        </div>
      </header>
      <Divider/>
      <NavBar/>
      <Divider/>
      <section className="max-w-5xl mx-auto px-6 py-20 relative">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
          <div className="relative bg-ctp-mantle/50 backdrop-blur-lg border-2 border-ctp-overlay2/60 ring-ctp-mauve/30 p-8 shadow-xl">
            <div className="space-y-4 leading-relaxed">
              <h1 className="text-5xl text-ctp-pink-400 font-bold">
                hewwo!
              </h1>
              <h2 className="text-3xl font-bold">
                <span className="text-ctp-pink-200">i'm </span>
                <span className="text-ctp-pink-400/80">junya </span>
                <span className="text-ctp-pink-200">(</span>
                <span className="text-ctp-mauve-200/60">she</span>
                <span className="text-ctp-pink-200">/</span>
                <span className="text-ctp-mauve-400/60">her</span>
                <span className="text-ctp-pink-200">)</span>
                <span className="text-ctp-pink-200"> :3</span>
              </h2>
              <p className="text-2xl">
                <span className="text-ctp-pink/90">welcome to my lil corner of the internet hehe~</span>
              </p>
              <p className="text-2xl">
                <span className="text-ctp-pink/90">just a silly kitty making stuff mraow :3</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// @ts-expect-error shush
export default App
