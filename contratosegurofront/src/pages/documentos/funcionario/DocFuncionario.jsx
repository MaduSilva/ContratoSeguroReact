import React from 'react'
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import '../funcionario/DocFuncionario.css'

import FileUploadIcon from '../../../assets/img/file-upload.png'

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css" />


const DocRecrutado = () => {
    return (
        <div>
            <Menu />
            <div class="tabinator">
               
                <input type="radio" id="tab1" name="tabs" checked />
                
                <label className="SquareOne" for="tab1">Aguardando minha assinatura</label>
                <input type="radio" id="tab2" name="tabs" />
                <label for="tab2">Documentos Enviados</label>
                <input type="radio" id="tab3" name="tabs" />
                <label for="tab3">Concluídos</label>
                <div id="content1">
                    <p>
                    <div className="BigSquare">
                <img src={FileUploadIcon} className="FileIcon" alt="icone de upload" />
                <h6 style={{ textAlign: 'center', fontFamily: 'Montserrat' }}>Deposite seus documentos aqui</h6>
                <a href="#" class="ButtonFile">Envie um arquivo</a>

            </div>

                    </p>
                </div>
                <div id="content2">
                    <p>Donec mattis laoreet suscipit. Donec blandit quam sed justo mattis, et hendrerit leo sodales. Donec elit leo, sollicitudin sed purus vitae, iaculis iaculis lacus. Proin quis leo a purus gravida ultricies. Nam molestie a nisi sed scelerisque. Proin in suscipit sem, in viverra libero. Proin quam diam, consequat vitae arcu eget, egestas ultrices eros. Donec sed fermentum lorem. Nam dolor sem, aliquam dapibus rutrum id, tempor ac leo. Vestibulum in neque id eros tristique lacinia. Duis a bibendum dolor, nec cursus eros. Morbi quis enim eu quam gravida lacinia. Etiam tincidunt venenatis felis quis pellentesque. Sed sagittis elit vitae arcu malesuada, quis dapibus libero porttitor.
    </p>
                </div>
                <div id="content3">
                    <p>Integer consequat iaculis porta. Integer semper maximus erat, vel posuere libero fermentum ut. Quisque convallis imperdiet diam, eget mollis risus semper non. Quisque dictum feugiat finibus. Nulla quis lectus augue. Fusce id nulla quis ipsum consequat consectetur in sed felis. Nullam eu urna sollicitudin, sodales risus sit amet, lacinia magna. Mauris placerat metus vitae urna efficitur rutrum. Mauris lobortis ut ex vitae condimentum. Integer venenatis urna ut lectus efficitur pretium. Donec ut ullamcorper urna, nec commodo est. Fusce in nibh sed lectus laoreet fermentum vestibulum a dolor. Donec pulvinar urna sed leo consequat, et vulputate nunc pellentesque. Maecenas ex nisl, pretium sed efficitur vitae, ultricies ut risus.
    </p>
                </div>
                <div id="content4">
                    <p>Duis tempor sapien ac enim laoreet, volutpat tincidunt mi cursus. Integer bibendum pharetra nisl, non mollis dui ullamcorper vel. Curabitur lacinia consectetur velit. In finibus metus velit, quis mollis libero feugiat non. Maecenas est nunc, dapibus non sem eu, ornare consectetur ipsum. Phasellus elit metus, iaculis vitae est et, pharetra ornare lacus. Cras id tristique lorem, posuere molestie leo. Maecenas varius nisi non maximus sollicitudin. Phasellus et tellus tincidunt, porta mauris ut, faucibus augue. Mauris vehicula erat sed magna iaculis, vel fringilla velit sagittis.
    </p>
                </div>
            </div>
            <Rodape/>
        </div>
    )

}

export default DocRecrutado;