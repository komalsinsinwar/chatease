// test.js

import db from './firebase.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// 🔸 Firestore me ek document add karna
async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      name: "Komal Kumari",
      rollNo: "CS101",
      year: "2nd Year"
    });
    console.log("✅ Document written with ID:", docRef.id);
  } catch (e) {
    console.error("❌ Error adding document:", e);
  }
}

// 🔹 Firestore se saare students data fetch karna
async function getTestData() {
  const querySnapshot = await getDocs(collection(db, "students"));
  querySnapshot.forEach((doc) => {
    console.log(`🧾 ${doc.id} =>`, doc.data());
  });
}

// 👇 Functions call karo
await addTestData();
await getTestData();
