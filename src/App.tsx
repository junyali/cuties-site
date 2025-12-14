import './App.css';
import { Link } from 'react-router';
import { Header } from './components/Header';
import { Divider } from './components/Divider';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Section88x31 } from './components/Section88x31';
import { Konami } from './components/Konami';

export function App() {
  return (
    <div className="latte min-h-screen bg-ctp-base text-ctp-text">
      <Konami/>
      <Header/>
      <Divider/>
      <NavBar/>
      <Divider/>
      <div className="flex-grow">
        <section>
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="leading-relaxed">
              <div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
                <h1 className="text-3xl md:text-5xl text-ctp-pink-400 font-bold">
                  hewwo!
                </h1>
              </div>
              <h2 className="text-xl md:text-3xl font-bold">
                <span className="text-ctp-pink-200">i'm </span>
                <span className="text-ctp-pink-400/80">junya </span>
                <span className="text-ctp-pink-200">(</span>
                <span className="text-ctp-mauve-200/60">she</span>
                <span className="text-ctp-pink-200">/</span>
                <span className="text-ctp-mauve-400/60">her</span>
                <span className="text-ctp-pink-200">)</span>
                <span className="text-ctp-pink-200"> :3</span>
              </h2>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">welcome to my lil corner of the internet hehe~</span>
              </p>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">just a silly kitty making stuff mraow :3</span>
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="text-right leading-relaxed">
              <div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
                <h2 className="text-xl md:text-3xl text-ctp-pink-200 font-bold">
                  about me
                </h2>
              </div>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">i've been programming since 2018 and i love all things tech!</span>
              </p>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">you might find me playing games or travelling around or organising events</span>
              </p>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">feel free to get in </span>
                <Link
                  to="/contact"
                  className="text-ctp-pink font-bold underline decoration-ctp-mauve decoration-2 underline-offset-4 hover:text-ctp-mauve transition-colors"
                >
                  contact
                </Link>
                <span className="text-ctp-pink/90"> with me, i'd love to chat {'<3'}</span>
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="leading-relaxed">
              <div className="relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-ctp-pink via-ctp-mauve to-ctp-lavender blur-lg opacity-20"></div>
                <h2 className="text-xl md:text-3xl text-ctp-pink-200 font-bold">
                  my hobbies
                </h2>
              </div>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">outside of programming and being silly...</span>
              </p>
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-semibold text-ctp-mauve">i like playing games - all sorts!</h3>
                <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ctp-pink/20 border border-ctp-pink/30 text-ctp-pink text-sm">
                  osu!
                </span>
                  <span className="px-3 py-1 bg-ctp-mauve/20 border border-ctp-mauve/30 text-ctp-pink text-sm">
                  minecraft
                </span>
                  <span className="px-3 py-1 bg-ctp-lavender/20 border border-ctp-lavender/30 text-ctp-pink text-sm">
                  terraria
                </span>
                  <span className="px-3 py-1 bg-ctp-pink/20 border border-ctp-pink/30 text-ctp-pink text-sm">
                  scp: containment breach speedruns
                </span>
                </div>
              </div>
              <p className="text-lg md:text-2xl">
                <span className="text-ctp-pink/90">i also like playing theme songs on the piano and uhh.. sleeping :3</span>
              </p>
            </div>
          </div>
        </section>
        <Section88x31/>
      </div>
      <Divider/>
      <Footer/>
    </div>
  )
}
