import { useState } from "react"
import Modal from "./components/Modal"

function App() {

  const [ show, setShow ] = useState(false);

  return (
    <div>
      <div className="autor">GDcode</div>
      <div className="container">
        <button className="btn" onClick={() => setShow(true)}>Modal</button>
        <Modal show={show} onClose={() => setShow(false)}>
          <h1>Bienvenidos!</h1>
        </Modal>
      </div>
    </div>
  )
}

export default App
