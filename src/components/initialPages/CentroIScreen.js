import React from 'react';
import { NavBarScreen } from '../navbar/NavBarScreen';
import { FooterScreen } from '../footer/FooterScreen';
// import styles from './centroIScreen.module.css';



const CentroIScreen = () => {
  return (
    <>
      <NavBarScreen />
<br></br>
<br></br>
      <main className="wrap">
        <div className="container">
          {/* HERO */}
          <section className="hero">
            <div className="heroCard">
              <p className="eyebrow">Comunidad La Moya</p>
              <h1>Centro de Interpretación de la Comunidad La Moya</h1>
              <p className="lead">
                El Centro de Interpretación de La Moya es un espacio cultural que guarda la memoria viva del pueblo andino.
                Aquí, los visitantes pueden conocer de cerca las costumbres, vestimentas, instrumentos, y saberes ancestrales
                que conforman la identidad de la comunidad.
              </p>
              <p className="lead">
                El ambiente, cuidadosamente ambientado con paredes de adobe, utensilios tradicionales y tejidos coloridos,
                recrea la vida cotidiana de las familias locales, transmitiendo el respeto por la tierra, el trabajo comunitario
                y la herencia de los ancestros.
              </p>
            </div>

            <div className="heroMedia">
              <img
                src="assets/la-moya/IMG_4984.jpg"
                alt="Comuneros con trajes andinos durante una representación cultural."
                loading="eager"
              />
            </div>
          </section>

          {/* DESCRIPCIÓN DE IMÁGENES */}
          <section className="section">
            <h2>Descripción de las imágenes</h2>

            <div className="grid gallery">
              <figure className="galleryItem span7">
                <img
                  src="assets/la-moya/IMG_4984.jpg"
                  alt="Comuneros vestidos con trajes típicos andinos durante una representación cultural."
                  loading="lazy"
                />
                <figcaption>
                  <p>
                    Un grupo de comuneros vestidos con trajes típicos andinos —ponchos, sombreros y bufandas tejidas a mano—
                    participa en una representación cultural. La escena refleja el espíritu colectivo y la fuerza de la tradición
                    que aún se mantiene en La Moya.
                  </p>
                </figcaption>
              </figure>

              <figure className="galleryItem span5">
                <img
                  src="assets/la-moya/IMG_5088.jpg"
                  alt="Mujer con anaco y poncho azul realizando una práctica tradicional."
                  loading="lazy"
                />
                <figcaption>
                  <p>
                    Una mujer local, vestida con el característico anaco y poncho azul, muestra con orgullo una práctica tradicional
                    dentro del centro: posiblemente la molienda o la preparación de alimentos con herramientas antiguas.
                    Su expresión transmite sabiduría y conexión con la historia.
                  </p>
                </figcaption>
              </figure>

              <figure className="galleryItem span6">
                <img
                  src="assets/la-moya/IMG_5066.jpg"
                  alt="Retrato individual en el interior del centro."
                  loading="lazy"
                />
                <figcaption>
                  <p>
                    Retrato individual en el interior del centro, donde se observa con detalle el entorno de paredes rústicas
                    y elementos tradicionales. La imagen destaca la autenticidad del espacio y la conservación del patrimonio
                    cultural de la comunidad.
                  </p>
                </figcaption>
              </figure>

              <figure className="galleryItem span6">
                <img
                  src="assets/la-moya/IMG_5016.jpg"
                  alt="Dos mujeres con vestimenta típica trabajando juntas en una actividad artesanal."
                  loading="lazy"
                />
                <figcaption>
                  <p>
                    Dos mujeres de la comunidad, con vestimenta típica, trabajan juntas en una actividad artesanal o culinaria.
                    Esta imagen simboliza la cooperación, la transmisión de conocimientos entre generaciones y la participación
                    femenina en la vida comunitaria.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </main>

      <FooterScreen />
    </>
  );
};

export default CentroIScreen;
