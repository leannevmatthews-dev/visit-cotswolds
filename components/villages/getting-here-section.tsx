export function GettingHereSection() {
  return (
    <div className="village-getting-here village-panel village-guide-panel border border-outline-variant/20 mb-8 md:mb-12">
      <div className="village-guide-header">
        <span className="material-symbols-outlined">directions</span>
        <h3 className="font-headline-md text-[22px] text-primary">Getting Here</h3>
      </div>
      <div className="village-getting-here__grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-limestone shrink-0">
            train
          </span>
          <div>
            <p className="font-body-sm font-semibold mb-2 text-on-surface">
              By Rail
            </p>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              The nearest station is Kemble (12 miles). Direct services run from
              London Paddington. Taxis are available but booking is recommended.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-limestone shrink-0">
            directions_car
          </span>
          <div>
            <p className="font-body-sm font-semibold mb-2 text-on-surface">
              Parking
            </p>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              Use the pay-and-display car park on the B4425 opposite Bibury Trout
              Farm. Arrive before 10am on weekends to avoid the busiest periods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
