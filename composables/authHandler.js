let store;
export const AuthHandler = async () => {
  store = useBookingStore();
  let sessionData = {}
  try {
    sessionData = TokenChecker.GetToken();
    let token = sessionData?.value || null
    if (token) {
      store.SetToken(token)
      if (sessionData.account == 'user') {
        const res = await UseFetch.get(`/${sessionData.account}`, { Authorization: token })
        if (!res.ok) {
          TokenChecker.RemoveToken();
          store.SetToken(null)
          return { isAuth: false, type: '' }
        }
        const data = await res.json()
        store.SetUserData(data)
        return { isAuth: true, type: sessionData?.account }
      }

      if (sessionData.account == 'merchant') {
        const data = {email: sessionData.email}
        store.SetUserData(data)
        return { isAuth: true, type: sessionData?.account }
      }

    } else {
      TokenChecker.RemoveToken();
      store.SetToken(null)
      return { isAuth: false, type: sessionData?.account }
    }
  } catch (err) {
    console.log(err)
    return { isAuth: false, type: sessionData?.account }
  }
};
