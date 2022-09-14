import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from './data';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

// carosel start
let slidesToShow = 4;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: true,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

function App() {
  // carousel start
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 2;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 3;
  } else {
    slidesToShow = 4;
  }
  // carousel end

  return (
    <div className="App">
      {/* header start */}
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            {/* recent start */}
            <Navbar.Brand href="/">HomeScreen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
            > 
              <Nav className="me-auto w-100 justify-content-end">
                <Nav.Link href="#">Cart</Nav.Link>
                <Nav.Link href="#">Sign in</Nav.Link>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Order History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* recent end */}
          </Container>
        </Navbar>
      </header>
      {/* header stop */}

      {/* Featured Products start */}
      <div className="mt-5">
        <h1>Featured Products</h1>
        <div className="carousel">
          <Slider {...carouselProperties}>
            {data.products.map((product) => (
              <Card className="product" key={product.slug} sm={6} md={4} lg={3}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <Button>Add to cart</Button>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
      {/* Featured Products end */}

      {/* Latest Products start */}
      <div className="mt-5">
        <h1>Latest Products</h1>
        <div className="carousel">
          <Slider {...carouselProperties}>
            {data.products.map((product) => (
              <Card className="product" key={product.slug} sm={6} md={4} lg={3}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <Button>Add to cart</Button>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
      {/* Latest Products end */}

      {/* Trending Products start */}
      <div className="mt-5">
        <h1>Trending Products</h1>
        <div className="carousel">
          <Slider {...carouselProperties}>
            {data.products.map((product) => (
              <Card className="product" key={product.slug} sm={6} md={4} lg={3}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <Button>Add to cart</Button>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
      {/* Trending Products end */}

      {/* footer start */}
      <footer >
          <div className="text-center">All rights reserved</div>
        </footer>
      {/* footer stop */}

    </div>
  );
}

export default App;
