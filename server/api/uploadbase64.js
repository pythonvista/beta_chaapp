import { UploadFile } from "../firebase";

export default defineEventHandler(async (event) => {

    try {
        // const config = useRuntimeConfig();wdjdjdj
        const method = event.node.req.method;
        // const headers = event.node.req.headers
        const queries = getQuery(event);
        const nuxtBody = await readBody(event);
        let data
        switch (method) {
            case 'GET':
                return { method: 'get' }

            case 'POST':
                const data = await UploadFile.UploadByte(nuxtBody.file, nuxtBody.filename)
                return { status: true, url: data };
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