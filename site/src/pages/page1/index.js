import './index.scss';
import '../../assets/common.scss';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';

import gifPato from '../../assets/img/57615b8c0092a66c1d4058b1692955cc.gif'

export default function Index() {
    const [NumberLeftRightX, setNumberLeftRightX] = useState('');

    const ref = useRef();
    const navigate = useNavigate()

    function navegarLink() {
        ref.current.continuousStart();

        setTimeout(() => {
            ref.current.complete(); 
            
            setTimeout(() => {
                navigate('/surpresa');
            }, 300);
        }, 1300);
    }

    function randomPosition() {
        const randomNumber1 = Math.floor(Math.random() * 31) - 15;
        const randomNumber2 = Math.floor(Math.random() * 31) - 15;
        setNumberLeftRightX(`translateX(${randomNumber1}em) translateY(${randomNumber2}em)`);
    }

    setTimeout(() => {
        randomPosition()
    }, 300);

    return (
        <main className='main-pg1'>

            <LoadingBar color='#99889C' ref={ref} />

            <h1 className='h1-pg1'> Selecione </h1>

            <p className='p-pg1'> Quem é a pessoa mais linda do mundo? </p>
            <div className='div1-pg1'>
                <button className='button1' style={{transform: NumberLeftRightX}}
                > Giuseppe </button>

                <Link onClick={navegarLink}> <button className='button2'> Lara </button> </Link>
            </div>

            <img className='gifPato' src={gifPato} alt=''/>
        </main>
    );
}

