import React from 'react'
import Menu from '../../components/menu/menu'
import Rodape from '../../components/rodape/rodape'
import { Container, Carousel, Row, Col, Image, Card, Button, Nav, CardImg } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <Menu />

            <div style={{backgroundColor: "#dcdcdc"}}>
                <Carousel style={{ width: '200vw' }}>
                    <Carousel.Item >
                        <Row >
                            <img
                                className="d-block w-50"
                                height="500px"
                                src="/img/banner1.png"
                                alt="First Slide"
                            />
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row >
                            <img
                                className="d-block w-50"
                                height="500px"
                                src="/img/bannerBRQ2.jpeg"
                                alt="Second slide"
                            />
                        </Row>
                    </Carousel.Item>
                </Carousel>

                <h1 style={{ display: "flex", justifyContent: "center", marginTop: "20px", fontWeight: "bold",  color: "#011826", fontSize: "50px" }}>Seja bem vindo ao Lorem! </h1>

                <h1 style={{ marginLeft: "7.8em", marginRight: "7.8em", fontFamily: "Comfortaa", fontSize: '30px', marginTop: "20px", marginBottom: "25px", textAlign: "center", color: "#000000" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec diam diam. Vivamus sed dignissim metus,
            mollis ultrices ante. Vivamus eget imperdiet purus. Sed eget molestie nisi. Integer faucibus non odio et fermentum. Proin sem risus, imperdiet eu dictum viverra, semper ac urna. Aenean non viverra nunc, nec posuere nulla. Pellentesque pellentesque pellentesque urna</h1>


                <div style={{ display: "flex", marginLeft: "14em", marginTop: "50px" }}>

                    <div style={{ marginRight: "18em", textAlign: "center" }}>

                        <img class="card-img-top" src="/img/brq.2.jpeg" alt="Imagem de capa do card" style={{ width: 300, height: 300 }}></img>


                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em",fontStyle: "normal", color: "#000000" }}>Economize <br /> no tempo e <br /> na papelada!</p>


                    </div>

                    <div style={{ marginRight: "2em", textAlign: "center" }}>

                        <img class="card-img-top" src="/img/brq.1.jpeg" alt="Imagem de capa do card" style={{ width: 300, height: 300 }}></img>

                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", fontStyle: "normal", color: "#000000" }}>Menos <br /> burocracia, mais <br /> produtividade!</p>

                    </div>

                    <div style={{ marginLeft: "15em", textAlign: "center" }}>

                        <img class="card-img-top" src="/img/brq.jpeg" alt="Imagem de capa do card" style={{ width: 300, height: 300 }}></img>

                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", fontStyle: "normal", color: "#000000" }}>Segurança <br /> eficiente nos <br /> Termos da LGPD</p>

                    </div>

                </div>


                <hr style={{ boxSizing: "border-box", width: "88%", marginRight: "6px" }} />


                <div style={{ display: "flex", justifyContent: "space-between", marginRight: "6em", marginLeft: "6em", marginTop: "50px" }}>

                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center", fontFamily: "Ubuntu" }}>PLANO 1</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", marginBottom: "2em", fontStyle: "normal", color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>
                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center" }}>PLANO 2</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", marginBottom: "2em", color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>
                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginBottom: "50px" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center"}}>PLANO 3</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", marginBottom: "2em",  color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>


                </div>

                <hr style={{ boxSizing: "border-box", width: "88%", marginRight: "6px" }} />




                <div style={{ display: "flex", justifyContent: "space-between", marginRight: "6em", marginLeft: "6em", marginTop: "85px" }}>

                    <div style={{ height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ fontWeight: "bold",  fontSize: "70px", color: "#000000" }}>FALE CONOSCO</h3>

                        <p style={{ fontWeight: "bold", fontSize: "40px", fontStyle: "normal", color: "#000000" }}>Acompanhe nossas redes sociais e <br/> fique por dentro do mundo das  <br/> tecnologias digitais. <p style={{  fontWeight: "bold", fontSize: "40px", color: "#F27405" }}>Toda semana conteúdo novo!</p>  </p>
                        <img  src="/img/Logo (1).jpeg" alt="..."  style={{width : 70 , height : 70 , marginRight: "10px"}}  class="img-fluid"/>
                        <img  src="/img/Logo (2).jpeg" alt="..."  style={{width : 70 , height : 70  , marginRight: "10px"}}  class="img-fluid"/>
                        <img  src="/img/Logo (3).jpeg" alt="..."  style={{width : 70 , height : 70  , marginRight: "10px"}}  class="img-fluid"/>
                        <img  src="/img/Logo (4).jpeg" alt="..."  style={{width : 70 , height : 70  , marginRight: "10px"}}  class="img-fluid"/>
                        <img  src="/img/Logo (5).jpeg" alt="..."  style={{width : 70 , height : 70  , marginRight: "10px"}}  class="img-fluid"/>
                        <img  src="/img/Logo (6).jpeg" alt="..."  style={{width : 70 , height : 70 , marginRight: "10px"}}  class="img-fluid"/>

                    </div>

                    <img class="card-img-top" src="/img/bannerBRQ.jpeg" alt="Imagem de capa do card" style={{ width: 800, height: 400, marginRight: "1em", marginBottom: "50px" }}></img>
                   
                </div>

                </div>

            <Rodape />
        </div>



    )

}

export default Home;