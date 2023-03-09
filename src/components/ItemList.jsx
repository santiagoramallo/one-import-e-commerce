import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ lentes }) => {
  return (
    <>
      <Container className="main-catalogue">
        {lentes?.map((lente) => (
          <Item
            key={lente.id}
            id={lente.id}
            name={lente.name}
            description={lente.description}
            price={lente.price}
            stock={lente.stock}
            category={lente.category}
            image={lente.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;