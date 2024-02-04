import { initializeApp } from 'firebase/app';

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  uploadString
} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyD64zgXm5SI8Ce23pum2ulWGjwWUWT13JE",
  authDomain: "emeterr-storage.firebaseapp.com",
  projectId: "emeterr-storage",
  storageBucket: "emeterr-storage.appspot.com",
  messagingSenderId: "978746839090",
  appId: "1:978746839090:web:65e8f627506c3940542c2b"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


function Upload() {
  this.UploadZip = async (file) => {
    const storage = getStorage(app);
    const metadata = {
      contentType: 'application/x-zip-compressed',
    };
    const uploadref = ref(storage, file.name);
    const res = await uploadBytes(uploadref, file);
    const url = await getDownloadURL(ref(storage, res.metadata.fullPath))
    return url
  };
  this.UploadImage = async (file) => {
    console.log(file)
    const storage = getStorage(app);
    const metadata = {
      contentType: `application/jpeg`,
    };
    const uploadref = ref(storage, 'images', metadata);
    const res = await uploadBytes(uploadref, file);
    const url = await getDownloadURL(ref(storage, res.metadata.fullPath))
    return url
  };

  this.UploadByte = async (base64, filename) => {
    console.log(filename)
    let extension = filename?.split('.')[1] || 'jpg'
    const metadata = {
      contentType: `image/${extension}`,
    };
    const storageRef = ref(storage, `images/${filename}`);
    const res = await uploadString(storageRef, base64, 'data_url')
     const url = await getDownloadURL(ref(storage, res.metadata.fullPath))
    return url
  }
  this.DeleteFile = async (path) => {
    const desertRef = ref(storage, path);
    await deleteObject(desertRef);
  }
}


export const UploadFile = new Upload()

