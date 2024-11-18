import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slideImg1 from '../assets/slide.jpg'
import slideImg2 from '../assets/slide1.jpg'
import slideImg3 from '../assets/slide2.webp'
function IndividualIntervalsExample() {
  return (
    <Carousel className='p-5 m-5'>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img style={{height:'400px'}} src={slideImg1} alt="" />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{height:'400px'}} src={slideImg2} alt="" />

        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img style={{height:'400px'}} src={slideImg3} alt="" />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;