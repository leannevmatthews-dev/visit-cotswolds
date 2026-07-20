type MapEmbedRoute = {
  label: string;
  origin: string;
  destination: string;
};

type GuideMapEmbedsProps = {
  title?: string;
  routes: MapEmbedRoute[];
};

function buildMapEmbedSrc(origin: string, destination: string): string {
  return `https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&dirflg=r&output=embed`;
}

export function GuideMapEmbeds({ title, routes }: GuideMapEmbedsProps) {
  return (
    <figure className="my-6 md:my-8">
      {title ? (
        <figcaption className="font-body-sm mb-3 text-on-surface-variant">
          {title}
        </figcaption>
      ) : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {routes.map((route) => (
          <div
            key={`${route.origin}-${route.destination}-${route.label}`}
            className="overflow-hidden border border-outline-variant/30 bg-surface-container-low/40"
          >
            {route.label ? (
              <p className="font-body-sm border-b border-outline-variant/30 px-3 py-2 text-on-surface-variant leading-snug md:px-4">
                {route.label}
              </p>
            ) : null}
            <iframe
              title={`Directions from ${route.origin} to ${route.destination}`}
              src={buildMapEmbedSrc(route.origin, route.destination)}
              width="100%"
              height={220}
              loading="lazy"
              className="block border-0"
            />
          </div>
        ))}
      </div>
      <p className="font-body-sm mt-3 text-on-surface-variant leading-relaxed">
        Indicative route only. See the fastest direct train times stated above.
        Google&apos;s transit routing may not always reflect the exact GWR
        service.
      </p>
    </figure>
  );
}
