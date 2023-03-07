import React from "react";

const ItemListContainer = ({ saludo }) => {
    return ( <><div>
      {saludo}
    </div><Card maxW='sm'>
        <CardBody>
          <Image
            src=".//assets/lentes-ray.jpg"
            alt='Lentes Ray Ban'
            borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Lente Ray Ban</Heading>
            <Text>
              Los lentes de sol marca Ray Ban son la mejor
              opción para darte ese toque de Estilo y Modernidad que tanto buscas.
              Estos lentes de sol están hechos en material Metal resistente de la más alta calidad,
              y están diseñadas para darte la mayor protección contra los inclementes rayos solares en cualquier estación del año.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar ahora
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Añadir al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card></>
    )
};
export default ItemListContainer;