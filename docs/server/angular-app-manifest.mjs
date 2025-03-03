
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cakeshop/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cakeshop/home"
  },
  {
    "renderMode": 2,
    "route": "/cakeshop/feedback"
  },
  {
    "renderMode": 2,
    "route": "/cakeshop/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1205, hash: '0246847e199dbfed3d42b21bbf0e5c8e35f14988bd8ac715d46d5b0236705db2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1718, hash: '9ac1103ee1a567a3c32847ab468de695887b4acf30d46e357e5665c17226d029', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14175, hash: '8550d80d50e1fbed097380eab8b7a918a28283b1b18d979420943a582085ef14', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'feedback/index.html': {size: 7925, hash: '3a4c29f2981cfd97f9c04ebd92186acd0159e39b33658c01c302abfbba1d9cec', text: () => import('./assets-chunks/feedback_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 5721, hash: '13d3f48d4b2defbfd18397be8a4db4b7fe1594eef643d4759c6ce5c51d54ff86', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
