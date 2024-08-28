import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";

export const useCollection = (collectionName) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchCollection = async () => {
      try {
        const dataCollection = collection(db, collectionName);
        const snapshot = await getDocs(dataCollection);
        const documents = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error); // Imprimir el error en consola
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [collectionName]);

  return { data, loading, error };
};