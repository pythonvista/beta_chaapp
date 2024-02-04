import { UploadFile } from "../firebase";
import multer from 'multer';
import { callNodeListener } from 'h3';
let originalFileName = '';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cbd) => {
        console.log(file)
        originalFileName = file.originalname;
        cbd(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log(file)
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'application/octet-stream') {

            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    },
});
export default defineEventHandler(async (event) => {

    try {
        // const config = useRuntimeConfig();wdjdjdj
        const method = event.node.req.method;
        const headers = event.node.req.headers
        const file = event.req.file
        
        const queries = getQuery(event);
        switch (method) {
            case 'GET':
                return { method: 'get' }

            case 'POST':
                console.log('post')
                await callNodeListener(
                    upload.single('file'),
                    event.node.req,
                    event.node.res
                );
                const path = `/public/uploads/${originalFileName}`;
                console.log(path)
                // const data = await UploadFile.UploadImage(path)
                return {status: 'dkd'};
            // return { msg: 'No Id Passed', status: false };
            case 'PUT':
                return 'Put Method';
            case 'PATCH':
                return { method: 'pathc' }

            case 'DELETE':
                return { method: 'delete' }

            default:
                return 'Stay2easy Api';
        }
    } catch (err) {
        console.log(err);
        return err;
    }
});