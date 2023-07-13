import './index.scss';
import '../../assets/common.scss';
import { useState } from 'react'

export default function Index() {
    const [Number01, setNumber01] = useState(0);
    const [leftOrRight, setLeftOrRight] = useState(0);
    const [NumberLeftRight, setNumberLeftRight] = useState(0)
    

    function randomPosition() {
        setNumber01(Math.floor(Math.random() * 12));
        
        if(Number01 === 0) {
            setLeftOrRight('left')
        } else if (Number01 === 1) {
            setLeftOrRight('right')
        }
        setNumberLeftRight(Math.floor(Math.random() * 100));
    }

    setTimeout(() => {
        randomPosition()
    }, 700);

    return (
        <main className='main-pg1'>

            <h1 className='h1-pg1'> Selecione </h1>

            <p className='p-pg1'> Quem </p>
            <div className='div1-pg1'>
                <button className='button1' style={{{leftOrRight} {NumberLeftRight}}} 
                > Eu </button>

                <button className='button2'> Ela </button>
            </div>

        </main>
    );
}