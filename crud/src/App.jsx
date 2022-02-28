import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Homeworks"));

        querySnapshot.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data()}`);
          const data = doc.data();
          console.log(data);
        });

        // const arrayData = await doc.data.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }));
      } catch {}
    };
    getData();
  }, []);

  return <div className="container">Hello</div>;
}

export default App;
