import { Col, Row } from "react-bootstrap";
import { ElementSubtitleSelectedMovie } from "./ElementSubtitleSelectedMovie";
import { ElementTextSelectedMovie } from "./ElementTextSelectedMovie";

export const ThreeItemsSelectedMovie = ({ showItemsMovieSelected }) => (
  <Row className="my-3">
    {showItemsMovieSelected?.map((item, index) => (
      <Col key={index} className="d-flex flex-column justify-content-center">
        <ElementSubtitleSelectedMovie subtitle={item.subtitle} />
        {!Array.isArray(item.element) && (
          <ElementTextSelectedMovie text={item.element} />
        )}
        {Array.isArray(item.element) && (
          <Col className="d-flex justify-content-between">
            {item.element?.map((textElements, idx) => (
              <ElementTextSelectedMovie key={idx} text={textElements.name} />
            ))}
          </Col>
        )}
      </Col>
    ))}
  </Row>
);
