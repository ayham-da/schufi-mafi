import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import './wsp-gallery.css'
import ReadMore from "./readMore";

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div onBlur={handleCloseModal}>

      {openModal && 
        <div className='sliderWrap' onBlur={handleCloseModal}>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage row bg-dark' onBlur={handleCloseModal}>
            <img className='col-12' src={galleryImages[slideNumber].img} alt='' onBlur={handleCloseModal}/>
            <p className="col-12 text-white p-5">
              Das Zusammenbringen von Menschen mit Fluchtgeschichte liegt uns am Herz. Dafür haben wir einen Treffort im syrischen Diaspora etabliert, wo man seine Meinung frei äußert und seine individuelle Biographie teilt. Das erreichen wir durch die Einladung vom großen Figuren der Syrischen Gesellschaft wie Schauspieler*innen, Intellektueller*innen oder Youtuber*innen. Diese Figuren werden von Syrer*innen als erfolgreiche Vorbilde betrachtet. Außerdem werden die Gäste durch ein einzigartiges Konzept ein unvergleichbares Erlebnis leben. Das Konzept der Veranstaltung lässt sich so konkret wie folgend ablaufen: Zunächst wird der/die Künstler*in mit einem Auftritt (Eine Rede, Ein Solo Theaterstück, Eine interaktive Aktion.....) den Abend beginnen. Dann wird ein Interview mit ihm/ihr zu seinem Werdegang geführt. Schließlich wird es eine Diskussionsrunde mit dem Publikum geben.
            </p>
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
                <div  className='single'  key={slideNumber}>
                <Card>
                  <Card.Img onClick={ () => handleOpenModal(slideNumber) } variant="top" src={galleryImages[0].img} alt={galleryImages[0].title} />
                  <Card.Body>
                    <Card.Title>{galleryImages[0].title}</Card.Title>
                    <Card.Text>
                      <ReadMore title={galleryImages[0].title} description={galleryImages[0].description}>
                        {galleryImages[0].description}
                      </ReadMore>

                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
      </div>

    </div>
  )
}

export default WSPGallery