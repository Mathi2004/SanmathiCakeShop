
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SanmathiCakeShop/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SanmathiCakeShop/home"
  },
  {
    "renderMode": 2,
    "route": "/SanmathiCakeShop/feedback"
  },
  {
    "renderMode": 2,
    "route": "/SanmathiCakeShop/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1213, hash: 'e7bbe2be72a47b6d45f6380fd1aa88959ac475ea131684b9fefbb9e7831d79d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1726, hash: 'f40296f0a85453d606a46d8d890d415682497e4e916d7b8d86a34f04995c8c97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14231, hash: '6b68a9666ecc1888164415060a9096e7f00f0f41648c063c7ad80770b3c79e81', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'feedback/index.html': {size: 7981, hash: 'c9cb6d53c3cd552226350ca93cf91a785a4a507819fa8d24062d1737063c1d11', text: () => import('./assets-chunks/feedback_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 5777, hash: '1ee542c8a2161892c382107843604ab7376584ba7f5952c8a53dd42dd2e6cc37', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
