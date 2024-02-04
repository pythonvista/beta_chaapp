
const url = "http://localhost:3001"
// const url = "https://api.stay2easy.com/"
export const apiClient = async (route, method, body) => {
  try {
    if (body) {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    } else {
      const response = await fetch(`${url}${route}`, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;
    }
  } catch (err) {
    return err;
  }
};

function FetchApi() {
  this.url = "http://localhost:3001"
  // this.url = "https://api.stay2easy.com"
  this.get = async (route, headers = {}) => {
    console.log(headers)
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache',
       
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
          // "Access-Control-Allow-Credentials": "true",
          // "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Authorization": headers.Authorization,
          "Accept": "Application/json"
        },
        
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;

    } catch (err) {
      return err;
    }
  }
  this.post = async (route, body = {}, headers = {}) => {
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'POST',
        mode: 'no-cors', // Include credentials if needed
        body: body,
        // body: body,
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'application/json'
        },
       
      });
      return response;

    } catch (err) {
      return err;
    }
  }
  this.patch = async (route, body = {}, headers = {}) => {
    try {
      const response = await fetch(`${this.url}${route}`, {
        method: 'PATCH',
        mode: 'no-cors',
        cache: 'no-cache',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: {
          'Accept': 'Application/json',
          'authorization': headers?.Authorization
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      });
      return response;

    } catch (err) {
      return err;
    }
  },
    this.delete = async (route, headers = {}) => {
      try {
        const response = await fetch(`${this.url}${route}`, {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Accept': 'Application/json',
            'authorization': headers?.Authorization
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        });
        return response;

      } catch (err) {
        return err;
      }
    }
}

export const UseFetch = new FetchApi()

