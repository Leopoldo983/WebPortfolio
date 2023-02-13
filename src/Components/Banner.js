import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeletenig] = useState(false);
    const  toRotate = ["Web Developer", "Frontend Developer", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText == fullText){
            setIsDeletenig(true);
            setDelta(period);
        }else if( isDeleting && updatedText === ''){
            setIsDeletenig(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
 
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aling-items-center' id='ContainerBanner'>
                    <Col xs={12} md={7}>
                                <span className='tagline'>
                                    Welcome to my portfolio
                                </span>
                                <h1>{`Hi I'm Gabriel `}<span className='wrap'>{text}</span></h1>
                                <p>
                                If I had to describe myself I would say that I am an autodidact person, very committed to work and with a big 
                                curiosy to learn new things.
                                </p>
                                <button onClick={() => console.log("Connected")}>
                                    <a href='#connect'>Let's connect <ArrowRightCircle size={25}/></a>
                                </button>
                    </Col>
                    <Col xs={12} md={7}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
