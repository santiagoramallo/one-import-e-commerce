import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ lentes }) => {
  return (
    <>
      <Container className="main-catalogue">
        {lentes?.map((lentes) => (
          <Item
            key={lentes.id}
            id={lentes.id}
            name={lentes.name}
            description={lentes.description}
            price={lentes.price}
            stock={lentes.stock}
            category={lentes.category}
            image={lentes.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;