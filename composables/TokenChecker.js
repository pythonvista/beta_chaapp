
export const GenerateUid = () => {
    return uuidv4();
}

function tokenChecker() {
    this.key = 's2e_token'
    this.time = 60
    this.SetToken = (token,type='', email='') => {
        var now = new Date();
        var expirationTime = now.getTime() + this.time * 60 * 1000; // Convert minutes to milliseconds
        var data = { value: token, expires: expirationTime, account: type, email: email };
        sessionStorage.setItem(this.key, JSON.stringify(data));
    }

    this.GetToken = () => {
        var storedData = sessionStorage.getItem(this.key);

        if (storedData) {
            var data = JSON.parse(storedData);
            var now = new Date().getTime();

            if (now < data.expires) {
                // Data is still valid
                return data;
            } else {
                // Data has expired, remove it
                sessionStorage.removeItem(this.key);
            }
        }
        // Return null if data doesn't exist or has expired
        return null;
    }
    this.RemoveToken = () => {
        
        sessionStorage.removeItem(this.key);
    }
}



export const TokenChecker = new tokenChecker()