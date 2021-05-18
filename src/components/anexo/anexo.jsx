import React from 'react'

import FileUploadIcon from '../../assets/img/file-upload.png'

export default function Anexo  () {
    return (
<div className="BigSquare">
                <img src={FileUploadIcon} className="FileIcon" alt="icone de upload" />
                <h6 style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Deposite seus documentos aqui</h6>
                <a href="#" class="ButtonFile">Envie um arquivo</a>

            </div>
    )
    

}

