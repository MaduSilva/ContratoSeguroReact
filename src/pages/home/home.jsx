import React from 'react'
import Menu from '../../components/menu/menu'
import Rodape from '../../components/rodape/rodape'
import { Container, Carousel, Row, Col, Image, Card, Button, Nav, CardImg } from 'react-bootstrap';
import './home.css'

//icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


//importando banner
import banner2 from '../../assets/img/banner2.png'
import banner1 from '../../assets/img/banner1.png'

const Home = () => {
    return (
        <div>
            <Menu />
            {/* Carrossel */}
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={banner1} alt="banner brq" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={banner2} alt="banner brq" />
                    </Carousel.Item>
                </Carousel>

                {/* Fim do Carrossel */}
                {/* Início Texto */}
                <h1 id="oquee">Seja bem vindo ao Contrato Seguro! </h1>

                <h4 id="descricao">Criada em 2021 por um time de desenvolvedores, a Contrato Seguro é uma plataforma eficiente   <br />especializada em deixar seu processo de admissão ainda mais rápido!
                Adquirindo um plano para <br /> empresas você pode administrar seus funcionários, utilizar  o chat exclusivo da plataforma, enviar e assinar<br /> documentos, além de ter acesso  à  gráficos  de forma rápida.    </h4>

                {/* Fim Texto */}
                {/* Início Cards */}
                <div className="cards">

                    <div class="containercard">
                        <img id="cardimg" src="https://www.mundorh.com.br/wp-content/uploads/2021/04/vazamento-de-dados-filme.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Economize no tempo e na papelada! </div>
                        </div>
                    </div>

                    <div class="containercard">
                        <img id="cardimg" src="https://noticiasconcursos.com.br/wp-content/uploads/2021/02/noticiasconcursos.com.br-brq-digital-solutions-divulga-10-vagas-de-emprego-em-sao-paulo-brq-digital-solutions-1024x683.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Menos Burocracia, mais produtividade</div>
                        </div>
                    </div>

                    <div class="containercard">
                        <img id="cardimg" src="https://noticiasconcursos.com.br/wp-content/uploads/2021/04/noticiasconcursos.com.br-brq-digital-solutions-contrata-desenvolvedor-ios-em-sao-paulo-brq-digital-solutions-contrata-desenvolvedor-ios.jpg" alt="Imagem de capa do card" class="image" />
                        <div class="overlay">
                            <div class="text">Segurança eficiente nos termos da  LGPD </div>
                        </div>
                    </div>


                </div>
                {/* Fim Cards */}
                {/* Linha */}

                <hr style={{ boxSizing: "border-box", width: "100%", marginRight: "6px", display: "flex", justifyContent: "center" }} />
                {/* Fim Linha */}
                {/* Começo Planos */}

                <div id="planos" className="planos">


                    <div className="planocard">
                        <h3>PLANO 1</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h4>R$ 00</h4>
                        <IconButton href="mailto:attackondev@gmail.com" aria-label="email">
                            <ShoppingCartIcon />
                        </IconButton>

                    </div>

                    <div className="planocard">
                        <h3>PLANO 2</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h4>R$ 00</h4>
                        <IconButton href="mailto:attackondev@gmail.com" aria-label="email">
                            <ShoppingCartIcon />
                        </IconButton>


                    </div>

                    <div className="planocard">

                        <h3>PLANO 3</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos quisquam consequuntur quia. Maiores odio voluptatibus odit debitis, quia non facere assumenda ut, unde fugiat architecto veniam pariatur harum temporibus? </p>

                        <h4>R$ 00</h4>
                        <IconButton href="mailto:attackondev@gmail.com" aria-label="email">
                            <ShoppingCartIcon />
                        </IconButton>

                    </div>


                </div>
                {/* Fim Planos */}
                {/* Linha */}
                <hr style={{ boxSizing: "border-box", width: "100%", marginRight: "6px" }} />

                {/* Fim Linha */}



                {/* Redes Sociais */}
                <div id="faleconosco" >

                    <div className="redessociais">

                        <h3>Fale Conosco</h3>

                        <p >Acompanhe nossas redes sociais e <br /> fique por dentro do mundo das  <br /> tecnologias digitais. <p id="pOrange">Toda semana conteúdo novo!</p>  </p>


                        <div className="socialicons">

                            <IconButton href="https://www.facebook.com/brqdigital">
                                <FacebookIcon style={{ fontSize: 40 }}  />
                            </IconButton>

                            <IconButton href="https://www.youtube.com/user/brqitservices">
                                <YouTubeIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            <IconButton href="https://twitter.com/brqdigital">
                                <TwitterIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/brq/?originalSubdomain=br">
                                <LinkedInIcon style={{ fontSize: 40 }}  />
                            </IconButton>
                            <IconButton  href="https://www.instagram.com/brqdigital/" >
                                <InstagramIcon  style={{ fontSize: 40 }}  />
                            </IconButton>
                        </div>

                    </div>
                    <div id="imagemlateral">


                        <img src="https://blog.brq.com/wp-content/uploads/2020/06/TDD-em-Nodejs-_-conhecendo-o-Jest.png" alt="Homem em tablet" ></img>

                    </div>
                </div>

            </div>
            {/* Fim Redes Sociais */}

            <Rodape />
        </div>



    )

}

export default Home;