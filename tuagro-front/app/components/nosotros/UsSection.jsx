import './us.section.css'
import AnimatedProgress from './AnimatedProgress'
import CheckCircle from '../ui/check-circle/CheckCircle'
import { colors } from '../ui/colors'

const UsSection = () => {
    return (
        <div className='usMain'>
            <div className="usSection">
                <div className="imageSection">
                    <div className="columnImages">
                        <img src="https://res.cloudinary.com/doatjpkkh/image/upload/v1749763895/nosotros1_fyodw9.webp" alt="" className='usImage2' />
                        <img src="https://res.cloudinary.com/doatjpkkh/image/upload/v1749763895/nosotros3_kmbtgq.webp" alt="" className='usImage2' />
                    </div>

                    <img src="https://res.cloudinary.com/doatjpkkh/image/upload/v1749763895/nosotros2_qjzqpe.jpg" alt="" className='usImage' />


                </div>

                <div className='textSection'>
                    <h2 className='usSectionTitle'>Sobre Nosotros</h2>
                    <p>
                        Somos una organización comercial que provee de insumos y soluciones agrícolas de manera rápida eficaz y segura a lo largo de todo el territorio nacional.
                    </p>

                    <div className='usTitles'>
                        <CheckCircle />
                        <h3>
                            Asesoramiento Técnico a medida
                        </h3>

                    </div>

                    <p>
                        Ofrecemos acompañamiento personalizado en cada etapa del ciclo productivo. Nuestro objetivo es brindar no solo productos de alta calidad, sino también estrategias integrales que permitan al productor optimizar costos de explotación sin comprometer la eficiencia en el control de plagas, enfermedades y malezas.
                    </p>

                    <div className='usTitles'>
                        <CheckCircle />
                        <h3>
                            Amplia gama de productos agroquímicos
                        </h3>

                    </div>
                    <p>Contamos con un completo portafolio de insumos, que incluye:</p>

                    <p>
                        Fertilizantes químicos y orgánicos
                    </p>
                    <AnimatedProgress value={98} color={colors.green} />


                    <p>
                        Insecticidas, herbicidas y fungicidas
                    </p>
                    <AnimatedProgress value={95} color={colors.green} />


                    <p>
                        Coadyuvantes para mejorar la eficacia de las aplicaciones
                    </p>
                    <AnimatedProgress value={100} color={colors.green} />


                    <p>
                        Productos biológicos y de bajo impacto ambiental
                    </p>
                    <AnimatedProgress value={93} color={colors.green} />


                    <div className='usTitles'>
                        <CheckCircle />
                        <h3>
                            Representantes oficiales de Bloemen
                        </h3>
                    </div>
                    
                    <p>
                        Somos distribuidores autorizados de la línea Bloemen, lo que nos permite ofrecer tecnologías de vanguardia y soluciones confiables para una agricultura más eficiente y sustentable.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default UsSection