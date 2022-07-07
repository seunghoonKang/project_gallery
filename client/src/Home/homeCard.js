import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const HomeCard = () => {
  return(
    <Cards>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg" alt="img" />
        <Card.Body>
          <Card.Title>Exhibition</Card.Title>
          <Card.Text>
              Exhibition_Personal_Project
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg" alt="img" />
        <Card.Body>
          <Card.Title>Exhibition</Card.Title>
          <Card.Text>
              Exhibition_Personal_Project
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg" alt="img" />
        <Card.Body>
          <Card.Title>Exhibition</Card.Title>
          <Card.Text>
              Exhibition_Personal_Project
          </Card.Text>
          <Button variant="secondary">Go somewhere</Button>
        </Card.Body>
      </Card>
  </Cards>
  )
}


const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`




export default HomeCard;