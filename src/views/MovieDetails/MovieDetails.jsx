import { CardImage } from "components/CardImage/CardImage";
import { useMovieDetails } from "./hooks/useMovieDetails";

import { Col } from "react-bootstrap";

import { RowStylized, TitleText } from "App.styles";
import { ListGroup } from "./components/ListGroup";

const MovieDetails = () => {
  const { movieData, manyMovieItems, loadingMovieDetails } = useMovieDetails();

  if (loadingMovieDetails)
    return (
      <RowStylized>
        <TitleText>Cargando...</TitleText>
      </RowStylized>
    );

  return (
    <RowStylized className="pb-4">
      <TitleText className="text-center pt-1">{movieData.title}</TitleText>
      <Col className="m-lg-auto pb-3 pb-lg-0 pb-xl-3" lg={4}>
        <CardImage location={movieData.poster_path} />
      </Col>
      <Col className="m-auto" lg={8}>
        <ListGroup movieData={movieData} manyMovieItems={manyMovieItems} />
      </Col>
    </RowStylized>
  );
};

export default MovieDetails;
