/* Auto-converted from pages/whats-on.html — body only; header/footer via app layout */
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";

const WHATS_ON_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIBKgizqNuINElxwaG8jYGcXmenxm-7wA4KC0eBuuVdqNs1gydPocWvMIVDepVaP0A9bHD0lPPMH64CFAjoGRAQfmvh5R-MHHit1DqZPrzwPte8_mjVY7_vcKvEEEv5eit_2CgAV3QsDb6CuckpZpNigTkvThjU38P8bpLGeF66iI3nbkTmdR578Ux2IQEtVhEnX1Wlhu7NS8U5KOEAGjsbH-GPkf_3P597ESI1xciKbdnkJhT1wox3gvQba4VRJLb0zZfPlTOkA";

export function WhatsOnContent() {
  return (
    <>
      <DirectoryPageHero
        title="What's On"
        subtitle="Heritage, culture, and country pursuits across the hills."
        intro="A curated calendar of events, festivals, and cultural moments across the Cotswolds."
        heroImage={WHATS_ON_HERO_IMAGE}
      >
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-4 w-full sm:w-auto sm:min-w-[240px] px-6 py-3 md:py-4 border border-outline-variant/40 rounded-full hover:border-limestone transition-colors"
          >
            <span className="material-symbols-outlined text-limestone">calendar_today</span>
            <span className="font-label-caps text-[10px] md:text-xs opacity-60">
              SELECT DATE RANGE
            </span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 md:py-4 border border-limestone rounded-full text-limestone hover:bg-limestone hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">today</span>
            <span className="font-label-caps text-[10px] md:text-xs">TODAY</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 md:py-4 border border-limestone rounded-full text-limestone hover:bg-limestone hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">weekend</span>
            <span className="font-label-caps text-[10px] md:text-xs">THIS WEEKEND</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 md:py-4 border border-limestone rounded-full text-limestone hover:bg-limestone hover:text-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span className="font-label-caps text-[10px] md:text-xs">THIS MONTH</span>
          </button>
        </div>
      </DirectoryPageHero>
      <main className="bg-background text-on-background">
      <section className="sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background/95 backdrop-blur-md py-5">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div className="flex items-center gap-8 overflow-x-auto no-scrollbar md:gap-10">
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap border-b-2 border-primary pb-1 text-primary">ALL EVENTS</button>
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary pb-1">FESTIVALS</button>
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary pb-1">MARKETS</button>
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary pb-1">SPORTING</button>
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary pb-1">FAMILY</button>
      <button type="button" className="shrink-0 font-label-caps text-label-caps whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary pb-1">EVENTS</button>
      </div>
      </div>
      </section>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 md:pb-32 pt-10 md:pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Artisan Market" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1orKHEyxDjU-n67kpcxPJ0TALyYwMezDzdNTLIKUz77WRGqmE4cZf3eKUoHXfk4agPuoxO8_ihb-ePinGhZW3IKcA2Vv9TD7GcWt5FCUbuCh2ykdr1zu2op2cWp-BVsXJ-kj6UX_zevQKn6NiZunl_2xo1qGWgPYYFIjK93_Ox3rtpkUoo3JR2KsU1Mq_SpIiL7XrVgKvh8MgIHeCPdyjNWwJF6EPrPW9YJo1NHsOgJdTIs21Cm3uxBwlDe4iBJ9U16hu4LWIAg" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">MAY</span>
      <span className="block font-headline-md text-2xl">14</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">CHIPPING CAMPDEN</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">The Artisan Craft Fair</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">A monthly gathering of the finest makers and craftsmen in the heart of the village square. Discover unique textiles, hand-thrown ceramics, and local woodcraft.</p>
      </div>
      </article>
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Equestrian Events" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIBKgizqNuINElxwaG8jYGcXmenxm-7wA4KC0eBuuVdqNs1gydPocWvMIVDepVaP0A9bHD0lPPMH64CFAjoGRAQfmvh5R-MHHit1DqZPrzwPte8_mjVY7_vcKvEEEv5eit_2CgAV3QsDb6CuckpZpNigTkvThjU38P8bpLGeF66iI3nbkTmdR578Ux2IQEtVhEnX1Wlhu7NS8U5KOEAGjsbH-GPkf_3P597ESI1xciKbdnkJhT1wox3gvQba4VRJLb0zZfPlTOkA" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">JUNE</span>
      <span className="block font-headline-md text-2xl">02</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">BADMINTON ESTATE</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">Badminton Horse Trials</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">The pinnacle of world-class eventing. Experience the thrill of the cross-country course set against the majestic backdrop of Badminton House.</p>
      </div>
      </article>
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Literary Festival" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAicKIMJSfWfYjRtYW2TCmAwVp3glFn_9E7W06K2RXCIswIOrWbwBJs0R0Ywgdk8PnBLZlgwRResCNXSy0nsKnIM5aoO0tkNZv_JisQ36jVXaTxKyQBsCyJRqvVfEKJIs300ZPF2xitTB6-zGFQeL5FXYte5CExqevaeBmmZFQ4VLZs2XZcrafs9kGCpP603PUXtPgkJqANvfA4WEnklxNVH3kbc1W7ZbzdLRYmO_ikM4ONruEkf78nTa7zQPan0SITT9LW8ACeGQ" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">OCT</span>
      <span className="block font-headline-md text-2xl">21</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">CHELTENHAM</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">Cheltenham Literature Festival</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">The world's oldest literature festival, bringing together best-selling authors, world-renowned poets, and political thinkers for ten days of conversation.</p>
      </div>
      </article>
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Secret Garden Opening" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjqu6o7Lh6nJIZ4jvWQiGDR6JEo1mjqjnviN6j-SQp737VIp4Rwk7ptZWcG5YiUMY_xD4OycXr9j5xyLGEMXE4GiNZ_nCZHUQOQwElevpMKl1t4-kGkW6g9VjnLyLgZHwrYdBFfbHLXisUg2ZXD0nSYkQrZCpaIy1ndcSJ6pvEEB_yoG98sgqoGEY8JOOf-UrCquAgiS_9KhdvYxzZhfyo1oB66k27EM8MsS4kETA8wc9ok1s10FEkyFxLVM73KzYDUwYwVsmreg" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">JULY</span>
      <span className="block font-headline-md text-2xl">08</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">STOW-ON-THE-WOLD</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">Secret Garden Openings</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">A rare opportunity to explore the private walled gardens of the Cotswolds' most historic manor houses, typically closed to the public.</p>
      </div>
      </article>
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Evening Recital" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkmtZj9zn-cb03gnChXrZlAYiOD4OwriJV4dFX052_NDNMph-ZsGvh8G2PGibfzp3GPcjQJqlexQAfEWQ5dJOVzAOo_yPwLOe3BT1ra6LNjNaiDgDXDn3Wiq2YPFt5XmYJF9uYhjKuvtO0Ba5U_sGEikWYgSBjI67IJd-Z4iz682wlrUANAQCgzFyKwBc30l1i3ER8wqZZji4C0Js6JjBPRj-U0i-DUb6VifbK6OojGN2dIEqSoLsXzv7sjuDuRQF2YX74gE-fiQ" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">AUG</span>
      <span className="block font-headline-md text-2xl">15</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">BOURTON-ON-THE-WATER</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">Cotswold Music Festival</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">An evening of chamber music within the candlelit acoustics of St. Lawrence's Church. Featuring a performance by the regional philharmonic.</p>
      </div>
      </article>
      <article className="event-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container-low">
      <img alt="Autumn Foraging" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA37ZyHra1VcWSfXRhET6VLMa2ETsHh7wJGr8Jm9qPvTVHTb7Pj75x7CK3I83zoQsMS4mUpDKDAPsQenOigq5lW0i2c5fd9nPpCm_kFSiMnBFu7zO-ntDLychxKD1wCokAOV-d8bknsuBEEO_MwDXpTU5h0AF0p2fa3k4bA7X9ME-WBZuNj3vfoqEztGnPRttRfuk-d_GMjpI646E6tLf4nEcRgrsgbAB9YVS85WnezAcp_Fh9xgrn2bVju1jrCdZ_f0Vtc01REaQ" />
      <div className="absolute inset-0 glass-overlay opacity-60"></div>
      <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-3 text-center min-w-[60px]">
      <span className="block font-label-caps text-[10px] opacity-60">SEP</span>
      <span className="block font-headline-md text-2xl">30</span>
      </div>
      </div>
      <div className="space-y-3">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-sm text-limestone/70">location_on</span>
      <span className="font-label-caps text-[10px] text-limestone">WYCHWOOD FOREST</span>
      </div>
      <h3 className="font-headline-md text-2xl group-hover:text-limestone transition-colors">Autumn Foraging Workshop</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3">Join local herbalists on a guided wander through ancient woodland to identify and harvest the wild bounty of the autumn harvest.</p>
      </div>
      </article>
      </div>
      </section>
      <section className="bg-surface-container-low py-24 md:py-32 border-y border-outline-variant/20 text-center px-margin-mobile md:px-margin-desktop">
      <div className="max-w-xl mx-auto space-y-8">
      <span className="font-label-caps text-label-caps tracking-[0.4em] text-limestone">BE THE FIRST TO KNOW</span>
      <h2 className="font-display-lg text-display-lg-mobile md:text-5xl italic leading-tight">Receive the curated monthly diary</h2>
      <p className="font-body-lg text-on-surface-variant">Unlock access to private viewings and exclusive invitations across the Cotswolds.</p>
      <form className="flex flex-col md:flex-row gap-4 pt-4" action="#" method="post">
      <input className="flex-grow bg-transparent border-b border-outline-variant/40 px-4 py-3 font-label-caps text-xs focus:outline-none focus:border-limestone transition-colors" placeholder="YOUR EMAIL ADDRESS" type="email" name="email" />
      <button className="bg-limestone text-primary-container px-10 py-4 font-label-caps text-[10px] tracking-widest hover:bg-on-background transition-colors" type="submit">SUBSCRIBE</button>
      </form>
      </div>
      </section>
      </main>
    </>
  );
}
