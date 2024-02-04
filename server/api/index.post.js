
export default defineEventHandler(async (event) => {
    try {
        // const config = useRuntimeConfig();wdjdjdj
        const method = event.node.req.method;
        const headers = event.node.req.headers
        // const x_auth = headers.x_auth || ""
        const queries = getQuery(event);
        let data
        let nuxtBody = await readBody(event);
        console.log(nuxtBody)
        switch (method) {
            case 'GET':
                return { msg: 'Welcome to stay2easy webapi' }

            case 'POST':
                const data = await query(`SELECT * FROM DEPARTMENTS`)
                return { method: 'post', query: queries, body: data }
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