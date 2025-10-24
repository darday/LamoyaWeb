import React from 'react'
import { NavBarScreen } from '../navbar/NavBarScreen'
import { FooterScreen } from '../footer/FooterScreen'

const PremiosScreen = () => {
    return (
        <>
            <NavBarScreen />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <main className="premios-wrap">
                <header className="premios-hero">
                    <div className="premios-hero__text">
                        <p className="eyebrow">Reconocimientos</p>
                        <h1>Premios a la Comunidad La Moya</h1>
                        <p >
                            La Comunidad La Moya ha sido reconocida por su liderazgo en turismo comunitario,
                            combinando autenticidad cultural, sostenibilidad y hospitalidad local.
                        </p>
                    </div>
                </header>

                <section className="premios-section">
                    <div className="premio-card">
                        <div className="premio-card__head">
                            <span className="badge badge--gold">Premio internacional</span>
                            <h2>Premio <span className="nowrap">Gold Winner</span> – Turismo Responsable</h2>
                        </div>
                        <p className="muted">
                            Reconocimiento internacional otorgado a la Comunidad La Moya por su destacada gestión
                            en turismo responsable y sostenible.
                        </p>
                        <ul className="premio-list">
                            <li>Preservación de la cultura andina.</li>
                            <li>Participación activa de los comuneros en la oferta turística.</li>
                            <li>Uso responsable de los recursos naturales y fomento de buenas prácticas ambientales.</li>
                        </ul>
                        <p>
                            Este galardón acredita a La Moya como un modelo de turismo comunitario.
                        </p>
                    </div>

                    <div className="premio-card">
                        <div className="premio-card__head">
                            <span className="badge">Premio nacional</span>
                            <h2>Premio a la Consolidación del Turismo Comunitario</h2>
                        </div>
                        <p className="muted">
                            Distingue el esfuerzo continuo de la comunidad por consolidar su modelo de turismo participativo.
                        </p>
                        <ul className="premio-list">
                            <li>Fortalecimiento organizativo y liderazgo comunitario.</li>
                            <li>Innovación en experiencias turísticas locales.</li>
                            <li>Promoción del desarrollo económico sostenible mediante el turismo.</li>
                        </ul>
                        <p>
                            Refleja el progreso, compromiso y madurez alcanzados por La Moya como referente del turismo comunitario ecuatoriano.
                        </p>
                    </div>
                </section>

                <section className="premios-section">
                    <h3 className="gallery-title">Premios — imágenes</h3>
                    <div className="galleryPremio">
                        <figure className="gallery__item">
                            <img
                                src="assets/la-moya/premio-gold-winner.jpg"
                                alt="Certificado o placa del Premio Gold Winner – Turismo Responsable."
                                loading="lazy"
                            />
                            <figcaption className="caption">
                                PREMIO Gold Winner – Turismo Responsable.
                            </figcaption>
                        </figure>

                        <figure className="gallery__item">
                            <img
                                src="assets/la-moya/premio-consolidacion.jpg"
                                alt="Reconocimiento del Premio a la Consolidación del Turismo Comunitario."
                                loading="lazy"
                            />
                            <figcaption className="caption">
                                Premio a la Consolidación del Turismo Comunitario.
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </main>
            <FooterScreen />
        </>
    )
}

export default PremiosScreen
