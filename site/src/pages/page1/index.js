import './index.scss';
import '../../assets/common.scss';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar'

export default function Index() {
    const [NumberLeftRightX, setNumberLeftRightX] = useState('');

    const ref = useRef();

    function randomPosition() {
        const randomNumber = Math.floor(Math.random() * 31) - 15;
        setNumberLeftRightX(`translateX(${randomNumber}em)`);
        ref.current.continuousStart();

    }

    setTimeout(() => {
        randomPosition()
        ref.current.complete(); 
    }, 300);

    return (
        <main className='main-pg1'>

            <LoadingBar color='#99889C' ref={ref} />

            <h1 className='h1-pg1'> Selecione </h1>

            <p className='p-pg1'> Quem é a pessoa mais linda do mundo? </p>
            <div className='div1-pg1'>
                <button className='button1' style={{transform: NumberLeftRightX}}> Giuseppe </button>

                <Link to='/surpresa'> <button className='button2'> Lara </button> </Link>
            </div>
        </main>
    );
}

