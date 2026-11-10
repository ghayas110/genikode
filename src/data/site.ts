// Shared site constants.
export const BASE_URL = "https://genikode.com";

// Google Calendar appointment page for free consultations. Bookings land here
// directly, so they don't depend on the contact-form email API.
export const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hcu4p_LLATLlT5yM1Q3eSxMNjJGa1prIZn_shDrxOfNtoCCOhugrMgRnFDFwTh0AXJFTGMvNJ";

/** Trim a description to <= max chars on a sentence or word boundary. */
export function trimDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  // Prefer ending on a full sentence that fits.
  const sentences = clean.match(/[^.!?]+[.!?]+/g) ?? [];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  if (out.trim().length >= 80) return out.trim();
  // Otherwise cut on a word boundary and add an ellipsis.
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]$/, "") + "…";
}
