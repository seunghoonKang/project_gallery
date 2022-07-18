import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react';

function ProjectCarousel({ exhibitionProject, id }) {
  return (
    <>
      <Carousel
        variant="dark"
        style={{
          width: '1100px',
          margin: 'auto',
          padding: 'auto',
        }}
      >
        {exhibitionProject[id].image.map((image, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                style={{
                  maxHeight: '500px',
                  maxWidth: '800px',
                  margin: 'auto',
                }}
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
