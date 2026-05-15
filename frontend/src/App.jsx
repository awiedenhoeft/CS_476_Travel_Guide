import Navbar from './components/Navbar'
import Login from './pages/login_page'
import Quiz from './pages/quiz_page'
import Search from './pages/search_page'
import Home from './pages/home_page'
import Map from './pages/map_page'
import ReviewPage from './pages/review_form_page'
import ExperiencePage from './pages/experience_page'


function App() {
  let Component
  let pageClass = ""

  switch (window.location.pathname) {
    case "/":
      Component = Home
      pageClass = "home"
      break
    case "/search":
      Component = Search
      pageClass = "search"
      break
    case "/map":
      Component = Map
      pageClass = "map"
      break
    case "/login":
      Component = Login
      pageClass = "login"
      break
    case "/quiz":
      Component = Quiz
      pageClass = "quiz"
      break
    case "/experience":
      Component = ExperiencePage
      pageClass = "experience"
      break
    case "/review":
      Component = ReviewPage
      pageClass = "review"
      break
    
    default:
      Component = Home
      pageClass = "home"
  }

  return (
    <>
      <div className={pageClass}>
        <div className='header'>
          <a href="/" id='logo'>Wanderly</a>
          <h2 id='slogan'>rediscover travel</h2>
        </div>

        <Navbar />

        <div className='page-content'>
          <Component />
        </div>
      </div>
    </>
  )
}


export default App