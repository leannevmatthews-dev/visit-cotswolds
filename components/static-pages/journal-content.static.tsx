/* Auto-converted from pages/journal.html — body only; header/footer via app layout */
import { DirectoryPageHero } from "@/components/listing-directory/directory-page-hero";

const JOURNAL_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrECDYU4gHulWuvb31YxisVTyWl0ptVmqm5Kn_vQvJg5qdyPmKc_pZwuoCur55OXTG40v1lE2IQO_xd9e6BtSUgnDJn6p-9i_iXYGMPZalYCcTS6cP_y-GGZ8NTe1DJ6U5TPEJxErcnijNDwwxMzfZZgrWO_5qjAIXFV_VtdtRPJcs_9H1fXeWBvmPirychdwi5okMoIT2DFQW_HXAOc9opTlt-SlEe3s8f00POhh3zOhCjTMwmzwng9f__cVBVqRotRqs63f-xg";

export function JournalContent() {
  return (
    <>
      <DirectoryPageHero
        title="The Journal"
        subtitle="Slow stories from the landscape."
        intro="Stories, guides, and inspiration from the heart of England — written for readers who prefer depth over speed."
        heroImage={JOURNAL_HERO_IMAGE}
      />
      <main className="bg-background text-on-background">
      {/* Latest Stories Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-10 pb-24 md:pt-12 md:pb-40">
      <div className="flex justify-between items-end mb-16">
      <div>
      <span className="text-tertiary font-label-caps text-label-caps mb-2 block">VOLUME 01</span>
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Latest Stories</h2>
      </div>
      <div className="hidden md:block">
      <a className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300" href="/journal">
      <span className="font-label-caps text-label-caps">VIEW ARCHIVE</span>
      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
      </a>
      </div>
      </div>
      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Card 1 */}
      <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 card-zoom transition-all duration-700">
      <img className="w-full h-full object-cover transition-transform duration-1000" alt="A vertical, cinematic portrait of a traditional honey-colored limestone cottage in Snowshill during a quiet winter dusk. The house is surrounded by a light dusting of snow, and a warm, soft glow emanates from the windows. The lighting is low-key and atmospheric, capturing the 'blue hour' transition with deep shadows and soft highlights. The aesthetic is sophisticated and minimalist, reflecting a premium editorial magazine layout." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGWV_3M7HSia5naB2eIlpagZRcrai2Zm6VCCbxNZxCo-zNJq7xgUiIi5UISZq_SKJsD7zenmHMwTefL0r2aALeErzGIQbNggkyz9DYMNcHAJegUh4tMUs9k5JdDbjDh-6Y0aBcA7toG4vP6VnB7BtJN8b3R09W2xvf23oXGKF3w-PBKuGM2vHoAyUl4n0F2FjD-Xpk1fc6tYg0BGYZlsUUR_mPyYJoSomqZxZNFtO_Omw6sePXwIJp8Z6QuZw09MNfOAf8CYKpTA" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
      </div>
      <span className="text-tertiary font-label-caps text-[10px] tracking-widest mb-3 block">ATMOSPHERE</span>
      <h3 className="font-cormorant text-3xl md:text-4xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                          The Winter Light over Snowshill
                      </h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                          As the sun dips below the escarpment, a singular blue-hour stillness descends upon the valley. Discover the quiet geometry of the Cotswolds' most secluded village under a blanket of frost.
                      </p>
      <div className="editorial-line w-full group-hover:bg-primary/40 transition-colors"></div>
      </article>
      {/* Card 2 */}
      <article className="group cursor-pointer lg:mt-24">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 card-zoom transition-all duration-700">
      <img className="w-full h-full object-cover transition-transform duration-1000" alt="A close-up, high-detail editorial photograph of a handcrafted ceramic tea set on a rough-hewn wooden table. Soft morning light filters through a nearby window, casting long, elegant shadows. The scene is quiet and meditative, emphasizing texture and the luxury of slow living. The color palette consists of earthy browns, limestone whites, and deep greens, consistent with a refined dark-themed UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnN2Jj8kadKKBS0Yds6AdbZKFJEcSBpEx4E0-Hu3O42QhcIg5JxIoPJFxz87kI3XZ1m70TRPskeEDLt87F_3R0vJUW6duhNfNhq-gV0r0J3x-BjbiQzTUEB7XGV8WNyl7uxczftRxBobVp7xU1m0IF5_62vOnEgwjlRcLrBrgE21co9_IHMaHkWMxIDZGXor4AZ1m2_GsDyr4OYjHwOxlo7CFrjD1hlCijet7hHCzoi16Yq4w5jyhLvPI6x6dxSI3dDG-NgC6dQ" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
      </div>
      <span className="text-tertiary font-label-caps text-[10px] tracking-widest mb-3 block">CRAFT</span>
      <h3 className="font-cormorant text-3xl md:text-4xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                          The Slow Kiln: Local Artisans
                      </h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                          In a small barn near Stroud, the rhythm of the potter's wheel dictates the pace of life. We explore the resurgence of traditional craft in the modern English countryside.
                      </p>
      <div className="editorial-line w-full group-hover:bg-primary/40 transition-colors"></div>
      </article>
      {/* Card 3 */}
      <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 card-zoom transition-all duration-700">
      <img className="w-full h-full object-cover transition-transform duration-1000" alt="A moody, cinematic landscape shot of an ancient woodland path at dawn. The air is thick with mist, and sunlight pierces through the canopy in ethereal rays. Moss-covered trees and a winding dirt trail create a sense of mystery and timelessness. The lighting is natural and dramatic, with high contrast between the deep shadows of the forest floor and the bright morning fog." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxVwP3MJJ1uKohgXsS_HiwB5yJkMijAYWCUzhAaisJlz0xNY4U9_NF_jzcry2a9mMl-VDa56Oz2XIt49NShX_w9ZQ3C7yee47gMwCbGEuXmhgB5SxocuU1ek89JfKCfbvdao6tc0WMe_4xqT24afWq6fcZ1iU3G2IE95795au8aBrn56eT1c5UjptKkCG06H02__bJ5CnPKrTlwpkfQIMGJB1PGY2ae1vrsfBSBJM3G13wHRvLtge0trAM-AnC1Rnmik4r1hPuw" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
      </div>
      <span className="text-tertiary font-label-caps text-[10px] tracking-widest mb-3 block">WANDER</span>
      <h3 className="font-cormorant text-3xl md:text-4xl text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                          Forest Shadows: A Dawn Walk
                      </h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                          Navigating the ancient beech woods of the South Cotswolds before the world wakes. A sensory journey through fog-laden paths and the echoes of history.
                      </p>
      <div className="editorial-line w-full group-hover:bg-primary/40 transition-colors"></div>
      </article>
      </div>
      </section>
      {/* Visual Break / Quote Section */}
      <section className="relative w-full h-[530px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 opacity-20">
      
      </div>
      <div className="relative z-10 max-w-3xl text-center px-margin-mobile">
      <span className="material-symbols-outlined text-tertiary mb-8 text-4xl" data-icon="format_quote">format_quote</span>
      <p className="font-cormorant text-4xl md:text-5xl italic text-on-surface-variant leading-tight">
                      "The landscape is a language. To walk through it is to read a history that predates the word."
                  </p>
      <div className="mt-12 h-[1px] w-24 bg-tertiary mx-auto opacity-30"></div>
      </div>
      </section>
      {/* Seasonal Guides Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-40">
      <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20">
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Seasonal Guides</h2>
      <div className="editorial-line flex-grow opacity-10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Seasonal Item */}
      <div className="relative group cursor-pointer overflow-hidden border border-outline/5 rounded-lg p-6 hover:bg-surface-container-low transition-colors">
      <span className="font-label-caps text-[10px] text-tertiary tracking-widest block mb-4">SPRING</span>
      <h4 className="font-cormorant text-2xl text-on-surface mb-2">Wildflower Meadows</h4>
      <p className="text-body-sm text-on-surface-variant opacity-70 mb-8">The blooming of the Cotswold limestone grassland.</p>
      <div className="flex justify-between items-center">
      <span className="text-[10px] font-label-caps opacity-40">04 MIN READ</span>
      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
      </div>
      </div>
      <div className="relative group cursor-pointer overflow-hidden border border-outline/5 rounded-lg p-6 hover:bg-surface-container-low transition-colors">
      <span className="font-label-caps text-[10px] text-tertiary tracking-widest block mb-4">SUMMER</span>
      <h4 className="font-cormorant text-2xl text-on-surface mb-2">The Hidden Valleys</h4>
      <p className="text-body-sm text-on-surface-variant opacity-70 mb-8">Escaping the crowds in the secret dales of Gloucester.</p>
      <div className="flex justify-between items-center">
      <span className="text-[10px] font-label-caps opacity-40">07 MIN READ</span>
      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
      </div>
      </div>
      <div className="relative group cursor-pointer overflow-hidden border border-outline/5 rounded-lg p-6 hover:bg-surface-container-low transition-colors">
      <span className="font-label-caps text-[10px] text-tertiary tracking-widest block mb-4">AUTUMN</span>
      <h4 className="font-cormorant text-2xl text-on-surface mb-2">Fire &amp; Stone</h4>
      <p className="text-body-sm text-on-surface-variant opacity-70 mb-8">The best pub hearths for an October afternoon.</p>
      <div className="flex justify-between items-center">
      <span className="text-[10px] font-label-caps opacity-40">05 MIN READ</span>
      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
      </div>
      </div>
      <div className="relative group cursor-pointer overflow-hidden border border-outline/5 rounded-lg p-6 bg-surface-container-highest/30 transition-colors">
      <span className="font-label-caps text-[10px] text-tertiary tracking-widest block mb-4">CURRENT</span>
      <h4 className="font-cormorant text-2xl text-on-surface mb-2">Winter Solitude</h4>
      <p className="text-body-sm text-on-surface-variant opacity-70 mb-8">A curated list of retreats for total stillness.</p>
      <div className="flex justify-between items-center">
      <span className="text-[10px] font-label-caps opacity-40">09 MIN READ</span>
      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="north_east">north_east</span>
      </div>
      </div>
      </div>
      </section>
      </main>
    </>
  );
}
