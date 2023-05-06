import { Link, createBrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Button from "./components/UI/Button/Button";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {

  const [active, setActive] = useState(false)
  let navigate = useNavigate()




  useEffect(() => {
    window.addEventListener("popstate", () => setActive(false))
  })

  return (
    <div>
      <Link to={'/login'}>
        <Button onClick={()=>setActive(true)} title={'Регистрация / Авторизация'} color={'yellow'}/>
      </Link>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
