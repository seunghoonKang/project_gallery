import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const images = ['https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E'];

function ProjectCarousel() {
  return (
    <>
      <Carousel
        variant="dark"
        style={{
          width: '800px',
          margin: 'auto',
          padding: 'auto',
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
            style={{ height: '100wh' }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2Ee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2Ee"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ProjectCarousel;
