import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Stats from "../pages/Stats";

const RouteContent = (props) => {
  return (
    <section>
      <Routes>
        <Route path="/" Component={Main}/>
        <Route path="stats" Component={Stats}/>
      </Routes>
    </section>
  )
}

export default RouteContent;