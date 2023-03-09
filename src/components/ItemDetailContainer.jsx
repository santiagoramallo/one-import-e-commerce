import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

return <ItemDetail lentes={data} />;
};

export default ItemDetailContainer;