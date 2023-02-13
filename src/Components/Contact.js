import { Col, Row, Container } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg'

export const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="aling-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form action="https://formsubmit.co/fbf80d5748781562f73bd100559890c2" method="POST">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text"  placeholder='Name' name="name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text"  placeholder='Subject' name="subject"/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email"  placeholder='Email Addres' name="email"/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel"  placeholder='Phone No.'name="tel" />
                                </Col>
                                <Col>
                                    <textarea rows='6' placeholder='Message' name="comments"></textarea>
                                    <button type='submit'>
                                        <span>
                                            submit
                                        </span>
                                    </button>
                                </Col>
                            </Row>
                            <input type='hidden' name="_next" value='http://localhost:3000/'/>
                            <input type='hidden' name="_captcha" value='false'/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}