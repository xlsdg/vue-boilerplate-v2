import Vue from 'vue';

function initHttp() {
  Vue.http.options.credentials = true;
  Vue.http.options.emulateHTTP = false;
  Vue.http.options.emulateJSON = false;
  Vue.http.options.xhr = {
    'withCredentials': true
  };
}

function get(url, data) {
  return Vue.http.get(url, data);
}

function post(url, data) {
  return Vue.http.post(url, data);
}

function procSrvError(res) {
  console.error(res);
  return;
}

function procReqError(res) {
  console.error(res);
  return;
}

function checkStatus(response) {
  if ((response.status >= 200) && (response.status < 300)) {
    return response;
  }
  return procSrvError(response);
}

function procRequest(req) {
  return req.then(checkStatus)
    .catch(err => procReqError(err));
}

function procGet(url, data) {
  return procRequest(get(url, data));
}

function procPost(url, data) {
  return procRequest(post(url, data));
}

export {
  initHttp as init,
  get,
  post,
  procRequest as procReq,
  procGet,
  procPost
};
