import { Itemlist } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { LoadingComp } from "../LoadingComp/LoadingComp";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const categoryId = useParams().Id;
  // console.log(categoryId)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // create reference for query
    const queryRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");
    // do the query
    getDocs(queryRef).then((response) => {
      const results = response.docs;
      const docs = results.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      setItem(docs);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <>
      <h1 className="titulo">{greeting}</h1>

      {loading ? (
        <LoadingComp />
      ) : (
        <div className="productContainer">
          <Itemlist items={item} />
        </div>
      )}
    </>
  );
};
