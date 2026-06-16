export function VillageChecklistSignup() {
  return (
    <section className="village-signup" aria-labelledby="village-signup-heading">
      <div className="village-signup__inner">
        <span className="village-signup__label font-label-caps text-[10px] text-limestone tracking-[0.3em] uppercase">
          Free download
        </span>
        <h2
          id="village-signup-heading"
          className="village-signup__title font-display-lg text-[32px] md:text-[40px] text-primary leading-tight"
        >
          Get the Cotswolds Village Checklist
        </h2>
        <p className="village-signup__text font-body-sm text-on-surface-variant leading-relaxed">
          A practical packing and planning list from our village visits—what to
          bring, when to arrive, and the questions worth asking before you go.
        </p>
        <form className="village-signup__form" action="#" method="post">
          <label className="sr-only" htmlFor="village-checklist-email">
            Email address
          </label>
          <input
            id="village-checklist-email"
            className="village-signup__input font-body-sm"
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            required
          />
          <button className="village-signup__submit font-label-caps text-[10px] tracking-widest uppercase" type="submit">
            Get the checklist
          </button>
        </form>
      </div>
    </section>
  );
}
