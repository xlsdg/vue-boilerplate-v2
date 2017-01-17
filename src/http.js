import Axios from 'axios';

import {getTimeStamp} from './utils';

const Request = Axios.create({
  withCredentials: false
  // headers: {
  // }
});

function get(url, data) {
  return Request.get(url, {
    params: data
  });
}

function post(url, data) {
  return Request.post(url, data);
}

function throwSrvError(resp) {
  const error = new Error(resp.statusText);
  error.resp = resp;
  throw error;
}

function procReqError(err) {
  return err;
}

function checkStatus(resp) {
  if ((resp.status >= 200) && (resp.status < 300)) {
    return resp;
  }
  return throwSrvError(resp);
}

function checkPermission(resp) {
  return resp;
}

function procRequest(req) {
  return req
    .then(checkStatus)
    .then(checkPermission)
    .catch(procReqError);
}

function procGet(url, data) {
  data = data || {};
  data['_t'] = getTimeStamp();
  return procRequest(get(url, data));
}

function procPost(url, data) {
  return procRequest(post(url, data));
}

export {
  procGet,
  procPost
};
