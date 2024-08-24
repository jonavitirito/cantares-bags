import React from "react";
import { getDoc, doc, getFirestore} from "firebase/firestore";

export const useItemCollection = (collectionName, itemId) => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const db = getFirestore();

    const item = doc(db, collectionName, itemId);

    getDoc(item)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return { product, loading };
}