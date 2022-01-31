import db from "./app.js";
import { doc, collection, getDoc } from "firebase/firestore";

const pathsRef = collection(db, "paths");

export async function readPath(pathId) {
  const path = await getDoc(doc(pathsRef, pathId));

  if (!path.exists()) {
    return null;
  }

  return path.data();
}
