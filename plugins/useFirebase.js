import { initializeApp } from 'firebase/app';

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';

export default defineNuxtPlugin(async (nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyD64zgXm5SI8Ce23pum2ulWGjwWUWT13JE",
    authDomain: "emeterr-storage.firebaseapp.com",
    projectId: "emeterr-storage",
    storageBucket: "emeterr-storage.appspot.com",
    messagingSenderId: "978746839090",
    appId: "1:978746839090:web:65e8f627506c3940542c2b"
  };
  const app = initializeApp(firebaseConfig);
  
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
      const storage = getStorage(app);
      const metadata = {
        contentType: `application/jpeg`,
      };
      const uploadref = ref(storage, file.name);
      const res = await uploadBytes(uploadref, file);
      const url = await getDownloadURL(ref(storage, res.metadata.fullPath))
      return url
    };
  } 



  const UploadFile = new Upload()

  nuxtApp.vueApp.provide('UploadFile', UploadFile);
  nuxtApp.provide('UploadFile', UploadFile);
});
