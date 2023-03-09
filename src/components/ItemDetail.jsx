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
  import { useEffect, useState } from "react";

  const ItemDetail = ({ lentes }) => {
    const { id } = useParams();
  
    const [producto, setProducto] = useState([]);

    const bikeFilter = lentes.filter((lentes) => lentes.id == id);

  return (
    <>
      {lentesFilter.map((lentes) => (
        <div key={lentes.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={lentes.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{lentes.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {lentes.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {lentes.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {lentes.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: U$D {lentes.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={lentes.stock}
                  id={lentes.id}
                  price={lentes.price}
                  name={lentes.name}
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