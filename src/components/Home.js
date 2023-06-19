import { Route, Routes } from "react-router-dom";

const Home = (props) => {
  return (
    <section>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </section>
  )
}

export default Home;