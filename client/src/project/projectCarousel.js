import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const images = [
  'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
  'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
];

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
        {images.map((a, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images[i]}
                style={{ height: '100wh' }}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default ProjectCarousel;
