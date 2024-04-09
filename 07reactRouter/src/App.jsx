import { Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
/*Outlet ka use hmne yha pe isliye kra kyuki Header or Footer hmein har page pe same rkhna hai but un pages mein jo content hai vo change hona chahiye to jha pe bhi hm Outlet use krte hai vo chij change hoti rehti hai.*/