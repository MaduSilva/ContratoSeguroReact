import React from 'react'
import Menu from '../../components/menu/menu'
import Rodape from '../../components/rodape/rodape'
import { Container, Carousel, Row, Col, Image, Card, Button, Nav, CardImg } from 'react-bootstrap';
import './home.css'

const Home = () => {
    return (
        <div>
            <Menu />

            <div style={{ backgroundColor: "#dcdcdc", width: "" }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://static.vagas.com.br/portais-de-carreira/images/components/galleries/original/vem-pra-brq-vagas-de-emprego-trabalhe-conosco-1.png?1570805928"
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2020/07/vagas-na-BRQ-img-e1595932519589.png"
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                   
                </Carousel>

                <h1 style={{ display: "flex", justifyContent: "center", marginTop: "20px", fontWeight: "bold", color: "#011826", fontSize: "50px" }}>Seja bem vindo ao Lorem! </h1>

                <h1 style={{ marginLeft: "7.8em", marginRight: "7.8em", fontFamily: "Comfortaa", fontSize: '30px', marginTop: "20px", marginBottom: "25px", textAlign: "center", color: "#000000" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec diam diam. Vivamus sed dignissim metus,
            mollis ultrices ante. Vivamus eget imperdiet purus. Sed eget molestie nisi. Integer faucibus non odio et fermentum. Proin sem risus, imperdiet eu dictum viverra, semper ac urna. Aenean non viverra nunc, nec posuere nulla. Pellentesque pellentesque pellentesque urna</h1>


                <div style={{ display: "flex", marginLeft: "95px", marginTop: "50px" }}>

                    <div style={{ marginRight: "180px", textAlign: "center" }}>

                        <img class="card-img-top" src="https://miriangasparin.com.br/wp-content/uploads/2020/04/BRQ.png" alt="Imagem de capa do card" style={{ width: 250 }}></img>


                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", fontStyle: "normal", color: "#000000" }}>Economize <br /> no tempo e <br /> na papelada!</p>


                    </div>

                    <div style={{ marginRight: "100px", textAlign: "center" }}>

                        <img class="card-img-top" src="https://noticiasconcursos.com.br/wp-content/uploads/2021/02/noticiasconcursos.com.br-brq-digital-solutions-divulga-10-vagas-de-emprego-em-sao-paulo-brq-digital-solutions-1024x683.jpg" alt="Imagem de capa do card" style={{ width: 250 }}></img>

                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", fontStyle: "normal", color: "#000000" }}>Menos <br /> burocracia, mais <br /> produtividade!</p>

                    </div>

                    <div style={{ marginLeft: "78px", textAlign: "center" }}>

                        <img class="card-img-top" src="https://portalerp.com/images/2020/06/26/brq-digital-solutions-anuncia-parceria-com-tableau-softwarejpg.jpeg" alt="Imagem de capa do card" style={{ width: 250 }}></img>

                        <p style={{ fontWeight: "bold", justifyContent: "center", display: "flex", textAlign: "center", fontSize: "1.4em", marginTop: "1em", fontStyle: "normal", color: "#000000" }}>Segurança <br /> eficiente nos <br /> Termos da LGPD</p>

                    </div>

                </div>


                <hr style={{ boxSizing: "border-box", width: "88%", marginRight: "6px" }} />


                <div style={{ display: "flex", justifyContent: "space-between", marginRight: "6em", marginLeft: "6em", marginTop: "50px" }}>

                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center", fontFamily: "Ubuntu" }}>PLANO 1</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "18px", marginTop: "1em", marginBottom: "2em", fontStyle: "normal", color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>
                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center" }}>PLANO 2</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "18px", marginTop: "1em", marginBottom: "2em", color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>
                    <div style={{ marginRight: "10px", backgroundColor: "#C4C4C4", height: "400px", width: "850px", marginBottom: "50px" }}>

                        <h3 style={{ backgroundColor: "#011826", color: "white", height: "70px", alignItems: "center", display: "flex", justifyContent: "center" }}>PLANO 3</h3>

                        <p style={{ fontWeight: "bold", alignItems: "center", display: "flex", textAlign: "center", fontSize: "18px", marginTop: "1em", marginBottom: "2em", color: "#000000" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h3 style={{ fontWeight: "bold", fontSize: "3em", alignItems: "center", display: "flex", justifyContent: "center", color: "#000000" }}>R$ 00</h3>


                    </div>


                </div>

                <hr style={{ boxSizing: "border-box", width: "88%", marginRight: "6px" }} />





                {/* Redes Sociais */}
                <div style={{ display: "flex", marginLeft: "100px", marginTop: "85px" }}>

                    <div style={{ height: "400px", width: "850px", marginRight: "4em" }}>

                        <h3 style={{ fontWeight: "bolder", fontSize: "30px", color: "#000000" }}>FALE CONOSCO</h3>

                        <p style={{ fontWeight: "bold", fontSize: "20px", fontStyle: "normal", color: "#000000" }}>Acompanhe nossas redes sociais e <br /> fique por dentro do mundo das  <br /> tecnologias digitais. <p style={{ fontWeight: "bold", fontSize: "20px", color: "#F27405" }}>Toda semana conteúdo novo!</p>  </p>



                        <img src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />
                        <img src="https://image.flaticon.com/icons/png/512/60/60543.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />
                        <img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />
                        <img src="https://i.pinimg.com/originals/6c/df/0f/6cdf0f336652ec166d79ab0a1929c4e6.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />
                        <img src="https://image.flaticon.com/icons/png/512/60/60580.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />
                        <img src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png" alt="..." style={{ width: 40, height: 40, marginLeft: '10px' }} class="img-fluid" />


                    </div>

                    <img class="card-img-top" src="https://noticiasconcursos.com.br/wp-content/uploads/2021/04/noticiasconcursos.com.br-brq-digital-solutions-contrata-desenvolvedor-ios-em-sao-paulo-brq-digital-solutions-contrata-desenvolvedor-ios.jpg" alt="Imagem de capa do card" style={{ width: 500, marginRight: "200px", marginBottom: "50px" }}></img>

                </div>

            </div>

            <Rodape />
        </div>



    )

}

export default Home;