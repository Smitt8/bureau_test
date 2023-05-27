import { getLocalIp } from './utils';


class Api {
  constructor(port) {
    getLocalIp().then((ip) => {
      this._url = `${ip}${(port) ? ':'+port : ''}/aai/v24`;
    });
  }

  _checkResponse(res) {
    const { ok } = res;
    return res.json().then(res => {
      if (ok) {
        return res;
      } else {
        const { message } = res;
        console.log(message);
        return Promise.reject( new Error(message));
      }
    });
  };

  uploadData(uri, data) {
    console.log(data);
    console.log(`${this._url}/${uri}`);
    return fetch(`${this._url}/${uri}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic QUFJOkFBSQ=='
      },
      body: JSON.stringify(data)

    }).then(res => {
      return this._checkResponse(res);
    })
  }
}

export default Api = new Api();