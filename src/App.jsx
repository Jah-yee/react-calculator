import styles from './App.module.css'
import Display from './components/Display'
import ButtonSection from './components/ButtonSection'
import AppHeader from './components/AppHeader'
import { useState } from 'react'
function App() {
    let buttons=['C','1','2','+','3','4','-','5','6','*','7','8','.','9','0','/','=']
    const [display,setDisplay]=useState('')

    const buttonHandling=(event)=>{
        console.log(event.target.innerText);
        if(event.target.innerText==='C'){
            setDisplay('')
        }
        else if(event.target.innerText==='='){
            try{
                setDisplay(eval(display).toString())
            }
            catch{
                setDisplay('Error')
            }
        }
        else{
            setDisplay(display+event.target.innerText)
        } 
    }

  return (
    <>
    <center>
        <AppHeader />
        <div className={styles.calculator}>
          <Display display={display}/>
          <ButtonSection buttons={buttons} buttonHandling={buttonHandling}/>
        </div>
      </center>
    </>
  )
}

export default App
