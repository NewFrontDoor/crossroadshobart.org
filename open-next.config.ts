import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Use Workers Static Assets to cache routes
 *
 * @see https://opennext.js.org/cloudflare/caching#ssg-site
 * @see https://developers.cloudflare.com/workers/static-assets/
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
