import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import EditFundaciones from '../views/EditFundaciones';
import DonarModal from './DonarModal';
import EditFundacioness from './EditFundacionesModal';

function CardFundaciones(props){
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const {nombreFundacion,idIdentificacion} = props ;

    const handleClose = () =>{
           
      setShow(false)
    }

    const handleOpenModal = ()=>{
      setShow(true)
    }


    const handleClose2 = () =>{
      setShow2(false)
    }

    const handleOpenModal2 = ()=>{
      setShow2(true)
    }

     return(
        <Card className="text-center">               
          <Card.Body>
          <Card.Title>{nombreFundacion}</Card.Title>
          <Card.Text>
            {props.proposito}           
          </Card.Text>
          <Card.Text>
          {props.direccion}
          </Card.Text>
          <Card.Text>
            {props.telefo}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
        <Button className="ml-2 mr-2" variant="primary" onClick={handleOpenModal2}>Donar</Button>
        {
            show2 &&
            <DonarModal
              fundaciones= {props}
              show={show2}
              handleClose={handleClose2}
              handleOpenModal={handleOpenModal2}/>
        }
        <Button variant="success"  onClick={handleOpenModal}>Actualizar </Button>
                    {
                        show &&
                        <EditFundaciones
                            fundaciones= {props}
                            show={show}
                            handleClose={handleClose}
                            handleOpenModal={handleOpenModal}/>

                    }
        <Button variant="danger"
        onClick={() => props.handleDeleteFundaciones(idIdentificacion)}>Eliminar</Button>
         
        </Card.Footer>
      </Card>
     );
}

export default CardFundaciones;