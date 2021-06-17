import { React, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import DescriptionIcon from '@material-ui/icons/Description';

const Completos = () => {
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
                            data.filter(item=>item.status=="completed").map((item) => {
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

export default Completos;