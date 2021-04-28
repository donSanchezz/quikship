import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
