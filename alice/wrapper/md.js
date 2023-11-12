  const https = require("https");

  class HyperAttr {
   constructor(jsonObj) {
    for (const key in jsonObj) {
  if (jsonObj.hasOwnProperty(key)) {
  if (typeof jsonObj[key] === 'object') {
    this[key] = new HyperAttr(jsonObj[key]);
        } else {
    this[key] = jsonObj[key];
     }
    }
   }
  }
    getAttr(attr) {
  if (this[attr] !== undefined) {
    return this[attr];
    } else {
      return null;
    }
   }
  }

  class HyperGPT {
   constructor(baseApi) {
     this.baseApi = baseApi;
     this.commonErr = [
  'Please provide a prompt for {}',
  'It looks like an invalid model was provided: {}',
  'Getting an error from server code: {}',
  'An error occurred: {}'
  ];
  this.chatModels = ['gpt', 'llama', 'bard'];
  this.imgModels = ['art', 'photography', '3d'];
      }
  _response(data, isJsonObject) {
   if (typeof data === 'object') {
   if (isJsonObject && data.error) {
  return { error: data.error };
  }
   return { data };
  }
    if (typeof data === 'string') {
      let jsonObj;
  try {
    jsonObj = JSON.parse(data);
    if (isJsonObject && jsonObj.error) {
    return { error: jsonObj.error };
  }
    return { data: new HyperAttr(jsonObj) };
    } catch (err) {
  return { error: 'Invalid JSON response' };
   }
  }
    return { error: 'Invalid response format' };
      }
    async _httpsGet(url, params) {
  return new Promise((resolve, reject) => {
    const request = https.get(url + '?' + params, (response) => {
       let data = '';
  response.on('data', (chunk) => {
        data += chunk;
  });
      response.on('end', () => {
          resolve(data);
   });
  });
      request.on('error', (err) => {
          reject(err);
    });
   });
  }
      async chatbot(prompt, model) {
          try {
              if (!model || !this.chatModels.includes(model)) {
      return this._response({
  error: this.commonErr[1].replace('{}', model)
   });
  }
        if (!prompt) {
    return this._response({
  error: this.commonErr[0].replace('{}', model)
    });
  }
            const url = this.baseApi.replace('{}', 'chat');
            const params = new URLSearchParams({
          model: model,
          prompt: prompt
  });
              const response = await this._httpsGet(url, params);
              const responseBody = JSON.parse(response);
              const res = new HyperAttr(responseBody);
              if (res.error) {
        return this._response({
  error: this.commonErr[2].replace('{}', res.error)
   });
  }
    return this._response(res.data);
    } catch (error) {
   return this._response({
  error: this.commonErr[3].replace('{}', error)
    });
   }
  }

  async generateImage(prompt, model) {
   try {
     if (!model || !this.imgModels.includes(model)) {
      return this._response({
  error: this.commonErr[1].replace('{}', model)
   });
  }
    if (!prompt) {
    return this._response({
  error: this.commonErr[0].replace('{}', model)
   });
  }
     const url = this.baseApi.replace('{}', 'image');
     const params = new URLSearchParams({
       prompt: prompt,
       model: model
  });
     const response = await this._httpsGet(url, params);
     const responseBody = JSON.parse(response);
     const res = new HyperAttr(responseBody);
   return this._response(res.result);
       } catch (error) {
     return this._response({
  error: this.commonErr[3].replace('{}', error)
     });
    }
   }
  }

  const hyper = new HyperGPT();
  hyper.baseApi = 'https://api.biswax.dev/{}';

module.exports = async function(leiam, nash) {
 try {
     const chatResponse = await hyper.generateImage(leiam, nash);
   return chatResponse.data;
 } catch (e) {}
}