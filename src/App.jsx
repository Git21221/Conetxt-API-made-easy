import Button from './component/Button'
import Result from './component/Result'
import ButtonContextProvider from './context/ButtonContextProvider'
import './App.css'

function App() {

  return (
    <ButtonContextProvider>
      <Result />
      <Button />
    </ButtonContextProvider>
  )
}

export default App
