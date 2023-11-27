import { Container, Row, Col } from "react-bootstrap";
import GiphyViewer from "./components/GiphyViewer";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css'

const App = () => {

    return(
      <Container className="mt-5">
        <Row>
          <Col>
            <GiphyViewer/>
          </Col>
        </Row>
      </Container>
    )
}

export default App;
