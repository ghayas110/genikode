// Keyless Google Maps embed (no API key needed). Lazy-loaded so it never blocks
// initial render. Note: an embedded map does NOT boost search rankings — it's for
// trust/UX. A verified Google Business Profile is the real local-traffic lever.

const ADDRESS = "A-12, Sector X-8, Gulshan-e-Maymar, Karachi, Pakistan";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export const MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export { ADDRESS };

export default function LocationMap({
  className = "",
  height = 340,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-zinc-800 ${className}`}>
      <iframe
        title="Genikode office location in Karachi, Pakistan"
        src={MAPS_EMBED_SRC}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, display: "block" }}
        allowFullScreen
      />
    </div>
  );
}
