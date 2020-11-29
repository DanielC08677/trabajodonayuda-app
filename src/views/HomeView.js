import React, { useState, useEffect } from "react";
import FundacionesService from "../services/FundacionesService";
import {Container, CardDeck,Carousel} from 'react-bootstrap';
import CardFunadaciones from '../components/CardFundaciones';
import Swal from 'sweetalert2';

const HomeView = () => {
    const [fundas, setFundaciones] = useState(null);

    useEffect(() => {
        handleGetFundaciones();
    }, []);


    const handleGetFundaciones = async () =>{
        try {
            Swal.fire({
                allowOutsideClick: false,
                icon :'info',
                text: 'Por Favor Espere ',
            })
    
            Swal.showLoading();
            const resp = await FundacionesService.get();
            console.log(resp);
            console.log(resp.data);
            setFundaciones(resp.data);
            Swal.close();
        }catch (error){
            Swal.close();
            Swal.fire({
                allowOutsideClick: false,
                title: 'Informacion',
                icon :'error',
                text: 'Error Al Cargar Los Datos',
            })
        console.log(error);
        }
    }

        const handleDeleteFundaciones = async (idIdentificacion) => {
            const respModal= await Swal.fire({
            allowOutsideClick: false,
            title: ' Eliminar Fundacion',
            icon :'info',
            text: 'Confirme Si Quiere Eliminar La Fundacion ',
            showCancelButton: true, 
            confirmButtonText:'Aceptar',
            cancelButtonText:'Cancelar',
        });

        if(!respModal.value)
        {
            return;
        }
        FundacionesService.delete(idIdentificacion).then(resp => {
        console.log(resp)
        handleGetFundaciones();
        }, (err) => {
            console.log('Error al eliminar ', err )
        })
    }

    const handleRenderFundaciones =() =>{
        if(!fundas || fundas.length === 0 ){
            return <div>No Existen Datos</div>;
        }

        const colums = 4;
        let rows = Math.floor(fundas.length / colums)
        console.log("Numero de filas inicial ", rows);
        const resto = fundas.length % colums;
        console.log("Operacion Mod",resto);
        if(resto !== 0){
            rows = rows+1;
        }
        console.log("Numero de filas ",rows);

        const arrayRows =[...Array(rows)];

        console.log(arrayRows);
        
        return arrayRows.map((row, index ) =>{
            return (
                <CardDeck key={index}>
                    {
                        fundas.slice(
                            index === 0 ? index : index * colums,
                            index === 0 ? colums: index * colums+ colums 
                        ).map((fundas, index) => {
                            return <CardFunadaciones 
                            key={index}
                            idIdentificacion={fundas.idIdentificacion}
                            nombreFundacion={fundas.nombreFundacion} 
                            proposito={fundas.proposito}
                            direccion={fundas.direccion}
                            telefo={fundas.telefo}
                            handleDeleteFundaciones={handleDeleteFundaciones}
                            handleGetFundaciones={handleGetFundaciones}/>
                        })
                    }
                </CardDeck>
            );
        });
    }
    return (
  
    <div>
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d2m1kqghccc19k.cloudfront.net/wp-content/uploads/2019/04/01191742/apoyo.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Unión</h3>
      <p>Inicia con el concepto de la vida, donde dos elementos diferentes se fusionan para crear una nueva vida</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fundacioncompartir.org/sites/default/files/styles/slick_600x320/public/las-fundaciones-se-unen-para-lograr-las-metas-de-desarrollo-sustentable.jpg?itok=Zmee29BO"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>El Respeto</h3>
      <p> Es uno de los valores morales más importantes del ser humano, pues es fundamental para lograr una armoniosa interacción social. 
          El respeto debe ser mutuo y nacer de un sentimiento de reciprocidad.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://asepyme.com/wp-content/uploads/2017/07/95-Constituir-una-fundacion-640.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>La Solidaridad</h3>
      <p>Es un valor por excelencia que se caracteriza por la colaboración mutua que existe entre los individuos, lo que sin duda permite lograr la superación de los más terribles desastres</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <Container>
           { handleRenderFundaciones()}
        </Container>
    </div>
    );
}

export default HomeView;