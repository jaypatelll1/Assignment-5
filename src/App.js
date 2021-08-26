import './App.css';
import Iconnav from './components/iconnav/index'
import Navbar from './components/navbar/index'
import Hero from './components/hero/index'
import Banner from './components/banner/index'
import Donate from './components/donate/index'
import Add from './components/add/index'
import Money from './components/money/index'
import Add2 from './components/add2/index'
import Form from './components/form/index'
import Event from './components/event/index'
import Footer from './components/footer/index'
import Slider from './components/slider/index'

function App() {
  return (
    <div className="App">
      <>
        <Iconnav />
        <Navbar />
        <Hero />
        <Banner />
        <Donate />
        <Add />
        <Money />
        <Add2/>
        <Slider/>
        <Form />
        <Event/>
        <Footer/>

      </>
    </div>
  );
}

export default App;
