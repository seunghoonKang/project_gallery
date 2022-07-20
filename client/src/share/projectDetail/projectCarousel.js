import Carousel from 'react-bootstrap/Carousel';

function ProjectCarousel({ exhibitionProject }) {
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
        if()
        {exhibitionProject.length > 0
          ? exhibitionProject.images.map((image, i) => {
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
            })
          : null}
      </Carousel>
    </>
  );
}

export default ProjectCarousel;
