import Navbar from './Navbar'
import Login from './pages/login'
import Quiz from './pages/quiz'
import Search from './pages/search'
import Home from './pages/home'
import Map from './pages/map'
import Create from './pages/create'

function App() {
  let Component

  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/search":
      Component = Search
      break
    case "/map":
      Component = Map
      break
    case "/login":
      Component = Login
      break
    case "/quiz":
      Component = Quiz
      break
    case "/create":
      Component = Create
      break
    default:
      Component = Home
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}


export default App