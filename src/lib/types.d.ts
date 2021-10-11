/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

// if (!import.meta.env.SSR) {
// 	import type { google } from 'google-maps';

// 	declare const google: google;
// } else {
// 	// eslint-disable-next-line @typescript-eslint/no-unused-vars
// 	declare const google: any;
// }
