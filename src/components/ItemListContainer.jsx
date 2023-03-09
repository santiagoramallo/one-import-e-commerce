import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [lentes, setLentes] = useState([]);
  const { category } = useParams();

  const catFilter = lentes.filter((lente) => lente.categoria === category);

  return (
    <div>
      {category ? <ItemList lentes={catFilter} /> : <ItemList lentes={lentes} />}
    </div>
  );
};

export default ItemListContainer;