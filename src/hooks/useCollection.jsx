import React from "react";
import {  collection, getFirestore, getDocs } from "firebase/firestore";
import { db } from "../main";

export const useCollection  = (collectionName) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const dataCollection  = collection(db, collectionName);

    getDocs(dataCollection)
      .then((snapshot) => {
        setData(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    
  }, []);

  return {data};
};