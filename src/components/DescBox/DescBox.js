import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
    CardTitle,
    CardSubtitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from "reactstrap";

export function DescBox({ pokemon }) {
    return (
      <Container fluid>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card
              style={{
                width: "300px",
                margin: "0 auto"
              }}
            >
              <CardImg
                top
                width="100%"
                height="300px"
                src={pokemon.cardImg}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle> Name: {pokemon.pokeMonTitle}</CardTitle>
                <CardSubtitle> ID: {pokemon.pokemonId}</CardSubtitle>
                <CardText>
                  <div className="mx-0 auto">
                    <ListGroup horizontal>
                      <ListGroupItem>
                        {`Weight ${pokemon.weight}`}
                      </ListGroupItem>
                      <ListGroupItem>
                        {`Height ${pokemon.height}`}
                      </ListGroupItem>
                    </ListGroup>
                    <ListGroup horizontal>
                      {pokemon.abilities.map(ab => {
                        return <ListGroupItem>{ab.ability.name}</ListGroupItem>;
                      })}
                    </ListGroup>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}