const getDomainConfig = function() {
  let domainConfig = {};
  switch (window.location.hostname.toLowerCase()) {
    default:
    case 'test.m.xlsdg.org':
      domainConfig = {
        'api': {
          'hostName': 'api.test.m.xlsdg.org',
          'port': null
        }
      };
      break;
    case 'gamma.m.xlsdg.org':
      domainConfig = {
        'api': {
          'hostName': 'api.gamma.m.xlsdg.org',
          'port': null
        }
      };
      break;
    case 'beta.m.xlsdg.org':
      domainConfig = {
        'api': {
          'hostName': 'api.beta.m.xlsdg.org',
          'port': null
        }
      };
      break;
    case 'pre.m.xlsdg.org':
      domainConfig = {
        'api': {
          'hostName': 'api.pre.m.xlsdg.org',
          'port': null
        }
      };
      break;
    case 'm.xlsdg.org':
      domainConfig = {
        'api': {
          'hostName': 'api.m.xlsdg.org',
          'port': null
        }
      };
      break;
  }
  return domainConfig;
};

const domainConfig = getDomainConfig();

const urlConfig = {
  'protocol': 'http:',
  'root': ''
};

// urlConfig.hostName = domainConfig[domain].hostName;
// urlConfig.port = domainConfig[domain].port;

const getHost = (hostName, port) => hostName + (port ? ':' + port : '');
const getOrigin = (host) => urlConfig.protocol + '//' + host;
const getHref = (origin) => origin + urlConfig.root;

// urlConfig.host = urlConfig.hostName + (urlConfig.port ? ':' + urlConfig.port : '');
// urlConfig.origin = urlConfig.protocol + '//' urlConfig.host;
// urlConfig.href = urlConfig.origin + urlConfig.root;

const apiUrl = getHref(getOrigin(getHost(
  domainConfig.api.hostName,
  domainConfig.api.port
)));

const urlUser = {
  'create': apiUrl + '/user/create',
  'info': apiUrl + '/user/info'
};

const urlProduct = {
  'create': apiUrl + '/product/create',
  'info': apiUrl + '/product/info'
};

export {
  urlUser as user,
  urlProduct as product
};
