import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-dark">
      <NavBar />
      <Container className="py-4 bg-secondary">
        <Component {...pageProps} />
      </Container>
    </div>
    )
}

export default MyApp
