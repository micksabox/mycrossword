/**
 * Basic HTML sanitization function.
 *
 * Note this doesn't use DOMParser or any other browser APIs.
 */
export declare function sanitize(html: string, options?: {
    allowedTags?: string[];
}): string;
/**
 * Decode HTML entities in a string.
 */
export declare function decodeHtmlEntities(html: string): string;
