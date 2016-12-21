import {procGet, procPost} from './http';
import * as Url from './url';

const apiUser = {
  create: (data) => procPost(Url.user.create, data),
  info: (data) => procGet(Url.user.info, data)
};

const apiProduct = {
  create: (data) => procPost(Url.product.create, data),
  info: (data) => procGet(Url.product.create, data)
};

export {
  apiUser as user,
  apiProduct as product
};
