import Carousel from 'react-bootstrap/Carousel';

const images = [
  'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
  'https://images.mypetlife.co.kr/content/uploads/2019/09/09152937/blind-dog-2-1536x1024.jpg',
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
                style={{ maxHeight: '500px', maxWidth: '100%' }}
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
