import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx5O3pBJXrAjlQcXMbegtp5kzHteGTBW8",
  authDomain: "echosphere-7.firebaseapp.com",
  projectId: "echosphere-7",
  storageBucket: "echosphere-7.appspot.com",
  messagingSenderId: "1070251965384",
  appId: "1:1070251965384:web:8922aaec502172d5f15efd",
  measurementId: "G-7NVE4K4KND",
  storageBucket:"gs://echosphere-7.appspot.com"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);

export { storage,ref,uploadBytes,getDownloadURL, app as default };
