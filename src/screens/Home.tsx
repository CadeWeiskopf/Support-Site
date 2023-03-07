import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <div>
        <p>Welcome</p>
        <Card
          bg="danger"
          className="card"
        >
          <Card.Img
            variant="top"
            src="https://connectedsolutionsgroup.com/wp-content/themes/yootheme/cache/csg-mobile-hero-67f87b9f.jpeg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
