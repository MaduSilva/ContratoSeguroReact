import React from 'react'
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import '../recrutado/DocRecrutado.css'

import FileUploadIcon from '../../../assets/img/file-upload.png'


const DocRecrutado = () => {
    return (
        <div>
            <Menu />
            <div className="AllSquares">
                <div className="SquareOne">
                {/* <p className="NumberSquareOne"> 1 </p> */}
                    <p className="TextSquareOne"> Aguardando minha <br /> assinatura </p>

                </div>
                <div className="SquareTwo">
                <p className="TextSquareTwo"> Documentos Enviados </p>
                </div>
                <div className="SquareThree">
                <p className="TextSquareThree"> Concluídos </p>
                </div>
            </div>
            <div className="BigSquare">
                <img src={FileUploadIcon} className="FileIcon" alt="icone de upload" />
                <h6 style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Deposite seus documentos aqui</h6>
                <a href="#" class="ButtonFile">Envie um arquivo</a>

            </div>
            <Rodape />
        </div>
    )

}

export default DocRecrutado;