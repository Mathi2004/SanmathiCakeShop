
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/feedback"
  },
  {
    "renderMode": 2,
    "route": "/cart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1196, hash: '5db75d721c3b23eeaa495ec51cf6c18d07aac780c9e8206161eb81d1ad830f5a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1709, hash: '0e546c7c6836b7eeef54f696bea653106da64e691b7315d8891d68b1b3c9e2cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14112, hash: 'd595022493e85a67c5ad7b9fb64adc14bf7240c8e9ef5fc4cee5d26448a19820', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'feedback/index.html': {size: 7862, hash: 'c3ee4fe0ffa845ef831aa0794a73b2470a27bd43202ca78335e31ec402767266', text: () => import('./assets-chunks/feedback_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 5658, hash: '395f1bf2e288972a8dc68d31762174c55f0da40570ed5bad2c533c16b98af11f', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
