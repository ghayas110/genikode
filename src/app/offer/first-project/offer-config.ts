// "10% off your first project" promotion — single source of truth for the page,
// its JSON-LD, and the sitemap entry. Times are Karachi time (UTC+5).
export const OFFER_PATH = "/offer/first-project";
export const OFFER_START = "2026-09-25";
export const OFFER_END_ISO = "2026-10-31T23:59:59+05:00";
export const COUPON = "GENIKODE10";

export function isOfferActive(now: number = Date.now()) {
  return now <= new Date(OFFER_END_ISO).getTime();
}
