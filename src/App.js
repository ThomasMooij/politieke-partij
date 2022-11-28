import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Agenda from "./components/Agenda"
import Contact from "./components/Contact"
import Politici from "./components/Politici"
import Stand from "./components/Stand"
import Jur from "./programma/Juridisch"
import Sec from "./programma/Seconomisch"
import Cult from "./programma/Scultureel"

export function App() {
  return (
      <div>
        <Navbar />
          <Main />
          <Agenda />
          <Politici />
          <Stand />
          <Contact />
      </div>
  );
}

export function Juridisch(){
  return(
    <div>
      <Jur />
    </div>
  )
}

export function Seconomisch(){
  return(
    <div>
    <Sec />
    </div>
  )
}

export function Scultureel(){
  return(
    <div>
      <Cult />
    </div>
  )
}

