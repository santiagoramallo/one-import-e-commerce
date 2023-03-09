import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount"; 
  import { useEffect, useState } from "react";

  const ItemDetail = ({ lentes }) => {
    const { id } = useParams();
  
    const [producto, setProducto] = useState([]);

    const lenteFilter = lentes.filter((lente) => lente.id == id);

  return (
    <>
      {lenteFilter.map((lente) => (
        <div key={lente.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={lente.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{lente.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {lente.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {lente.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {lente.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: U$D {lente.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={lente.stock}
                  id={lente.id}
                  price={lente.price}
                  name={lente.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;