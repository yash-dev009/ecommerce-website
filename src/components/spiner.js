import Spinner from 'react-bootstrap/Spinner';

const Circleloading =()=> {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Circleloading;