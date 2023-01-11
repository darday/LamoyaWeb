import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen'
import { CarouselScreen3g } from '../carousel/CarouselScreen3g';

export const EconomyScreen = () => {
    localStorage.removeItem("menu");
    window.localStorage.setItem("menu", 7);
    return (
        <>
            <NavBarScreen />
            <CarouselScreen3g />

            <div className='container'> <br></br><br></br>
                <div className='texto-pack11' >
                    Esta es una descripción de la economía propia de la moya
                </div>
                <div style={{ textAlign: 'center', paddingTop: '2vh', fontSize: '2rem', color: '#09302b', }} >
                    SI VISITAS LA MOYA PUEDES ADQUIRIR LOS SIGUIENTES PRODUCTOS:
                </div>
            </div>

            <div className='container'>
                <div className="textgastro13" style={{ color: '#09302b' }}>
                    <h1>
                        <b>ARTESANIAS</b>
                    </h1>
                    <h4 className='texto-pack12' >
                        Esta es una descripción de las artesanías de la Moya.
                    </h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Bufanda con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                                {/* <p class="card-text">sd.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Gorra con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Guantes con lana</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Bufanda con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="textgastro13" style={{ color: '#09302b' }}>
                    <h1>
                        <b>ESPECIES MENORES</b>
                    </h1>
                    <h4 className='texto-pack12' >
                        Esta es una descripción de las especies menores.
                    </h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>En Pie</b></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Pelados</b></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Adobado</b></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>En Pie</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="textgastro13" style={{ color: '#09302b' }}>
                    <h1>
                        <b>HUERTOS ORGANICOS</b>
                    </h1>
                    <h4 className='texto-pack12' >
                        Esta es una descripción de los huertos orgánicos.
                    </h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Bufanda con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Gorra con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Guantes con lana</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Bufanda con lana de llama</b></h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="textgastro13" style={{ color: '#09302b' }}>
                    <h1>
                        <b>ARTE DE LA MOYA</b>
                    </h1>
                    <h4 className='texto-pack12' >
                        Esta es una descripción del arte que se ha producido en la Moya.
                    </h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>CD HIELEROS DE LA MOYA</b></h5>
                                <h5 className="card-title" style={{ textAlign: 'justify' }}>Sinopsis: Sacarle hielo al corazón del taita Chimborazo actividad de mucho
                                    esfuerzo y sacrificio, pues esto es una profesión ancestral transmitida de padres a hijos propia de los comuneros de la moya.</h5>
                                <h5 className="card-title">Precio: 5</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>CD</b></h5>
                                <h5 className="card-title">Precio: 5</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>LIBRO</b></h5>
                                <h5 className="card-title" style={{ textAlign: 'justify' }}>Al calor de la nieve, dibujos e historias de niños y niñas de la Comuna La Moya</h5>
                                <h5 className="card-title">Precio: 10</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>CD HIELEROS DE LA MOYA</b></h5>
                                <h5 className="card-title" style={{ textAlign: 'justify' }}>Sinopsis: Sacarle hielo al corazón del taita Chimborazo actividad de mucho
                                    esfuerzo y sacrificio, pues esto es una profesión ancestral transmitida de padres a hijos propia de los comuneros de la moya.</h5>
                                <h5 className="card-title">Precio: 5</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="textgastro13" style={{ color: '#09302b' }}>
                    <h1>
                        <b>SNACKS Y ALIMENTOS SALUDABLES</b>
                    </h1>
                    <h4 style={{ textAlign: 'justify' }}>
                        Un snack saludable es aquél compuesto por alimentos o ingredientes saludables (con vitaminas, minerales, fibra, grasas saludables, hidratos de carbono complejos y proteínas vegetales…), son naturales sin químicos perjudiciales y siempre frescos, elaborados de forma artesanal.
                    </h4>
                </div>
                <h4 style={{ textAlign: 'justify' }}>
                    Sus ventajas son:
                </h4>
                <h4 style={{ textAlign: 'justify' }}>
                    Pueden formar parte de nuestra alimentación y dieta habitual.
                </h4>
                <h4 style={{ textAlign: 'justify' }}>
                    Además, pueden ayudarnos a completar nuestra dieta.
                </h4> <br></br>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Tostado de dulce </b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Habas fritas</b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Habas tostadas</b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Harina de Machica</b></h5>
                                <h5 className="card-title">Molida en piedra</h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Tostado de dulce </b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Habas fritas</b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Habas tostadas</b></h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ border: "0" }}>
                            <img src={`./assets/img/index6.jpeg`}></img>
                            <div className="card-body">
                                <h5 className="card-title"><b>Harina de Machica</b></h5>
                                <h5 className="card-title">Molida en piedra</h5>
                                <h5 className="card-title">Precio:1 usd - 250 gr</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
