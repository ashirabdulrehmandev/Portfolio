import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BZ6cf4GC.js","_app/immutable/chunks/By0DpHKz.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/D04Ajr0W.js"];
export const stylesheets = ["_app/immutable/assets/2.BSenlx8n.css"];
export const fonts = [];
