import Button from './components/Button'
import ButtonText from './components/ButtonText'
import Input from './components/Input'
import Header from './components/Header'


import { FiMail, FiLock } from 'react-icons/fi'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Button title="Olá"/>
      aaaaa
      <Input type='text' placeholder='olá' icon={FiMail}/>
      bbbb
      <ButtonText title="Socorro" icon={FiLock}/>
    </div>
  )
}