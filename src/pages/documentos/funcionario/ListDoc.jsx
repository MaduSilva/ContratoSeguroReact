import { React, useState, useEffect } from 'react';
import Menu from '../../../components/menu/menu'
import Rodape from '../../../components/rodape/rodape'
import { Table } from 'react-bootstrap';
import '../recrutado/EnvioDocRec.css'
import * as moment from 'moment';
import DescriptionIcon from '@material-ui/icons/Description';
import 'moment/locale/pt-br';

const ListDoc = () => {
    const [data, setData] = useState([]);
    const [documento, setDocumentos] = useState("");

    const getDocumentos = async () => {
        fetch("https://localhost:5001/v1/docusigns")
            .then((response) => response.json())
            .then((responseJson) => (
                console.log(responseJson),
                setData(responseJson)
            ));
    }


    useEffect(() => {
        getDocumentos();
    }, [])





    return (
        <div>



            <div>
                <Table striped bordered hover size="sm">


                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Enviado Em</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data.filter(item=>item.status=="sent").map((item) => {
                                var dataEnvio = moment.parseZone(item.sentDateTime).format('llll')
                                return (

                                    <tr key={item.item}>
                                        <td><DescriptionIcon fontSize="large"/>{item.emailSubject}</td>
                                        <td>{dataEnvio}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </Table>
            </div>


        </div>
    )

}

export default ListDoc;