import db from "./app.js";
import { doc, collection } from "firebase/firestore";

const pathsRef = collection(db, "paths");

export async function readPath(pathId) {
  const path = await doc(pathsRef);
}
