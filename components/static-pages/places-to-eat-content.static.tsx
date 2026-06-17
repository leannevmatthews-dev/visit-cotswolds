/* Auto-converted from pages/places-to-eat.html — body only; header/footer via app layout */
export function PlacesToEatContent() {
  return (
    <>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
      <div className="absolute inset-0">
      <img className="w-full h-full object-cover" data-alt="A warm and cinematic interior of a luxury Cotswold pub at dusk. The room features ancient honey-colored stone walls, a roaring fireplace casting orange light, and rustic wooden tables set with fine glassware and flickering candles. The atmosphere is intimate, moody, and sophisticated, reflecting a high-end British countryside dining experience in low light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4r1zr-jb914gcZ_b1OgvlWSS4Qe6gUUrZtgoxCpTATM8WBgQEafMKpJtGDDgPeZNBkVMas_v-dc-j_N1RRvBOOO72TgKswnDF8GysEBhg9vXcRWGJTJvnHvFQpmLPxapIMyyV7Rb6GMYswdOB4TSLkerCDPfFM9bKiIo7beoKnNumqiEWwsuu-jGuZMTeIniElTV-JKiUBzZ0jcz3KGPITK-e48aWf0qwVEW10m2dT1qSn4lNqS0AVscY82jF7bqL6f8KrNi5aw" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0D] via-[#0F0F0D]/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32">
      <div className="max-w-3xl">
      <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase mb-6 block">The Culinary Heart</span>
      <h2 className="font-cormorant text-7xl md:text-9xl text-on-background leading-none mb-8 italic">The Table.</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant/90 max-w-xl">
                              From field to fork, the definitive guide to dining in the hills. Discover a collection of Michelin-starred sanctuaries and ancient fireside taverns.
                          </p>
      </div>
      </div>
      </section>
      {/* Filter Bar */}
      <nav className="sticky top-[5.5rem] z-40 bg-background/95 backdrop-blur-md border-b border-outline/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between py-6">
      <div className="flex items-center gap-10 overflow-x-auto custom-scrollbar no-scrollbar">
      <button className="text-primary font-label-caps text-label-caps border-b-2 border-primary pb-1 whitespace-nowrap">ALL ESTABLISHMENTS</button>
      <button className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors whitespace-nowrap">RESTAURANTS</button>
      <button className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors whitespace-nowrap">PUBS</button>
      <button className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors whitespace-nowrap">AFTERNOON TEA</button>
      <button className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps transition-colors whitespace-nowrap">DOG FRIENDLY</button>
      </div>
      <div className="hidden lg:flex items-center gap-4 text-on-surface-variant font-label-caps text-label-caps">
      <span>SORT BY:</span>
      <select className="bg-transparent border-none focus:ring-0 text-primary font-label-caps cursor-pointer">
      <option>FEATURED</option>
      <option>PRICE: HIGH TO LOW</option>
      <option>DISTANCE</option>
      </select>
      </div>
      </div>
      </nav>
      {/* Main Content Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-gutter">
      {/* Card 1 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="An elegant plating of high-end seasonal British cuisine in a dimly lit, upscale restaurant. The dish features organic vegetables and a perfectly seared cut of local meat, presented with artistic minimalism. The background shows hints of a historic stone building with soft, warm focus, maintaining a dark cinematic aesthetic with limestone accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyQ2M2E8EHp1rtyqjpZ5peJNMJWLmw8W228zDOVNio85z1DoaiSWxpN4cQvg7g9hr2y0zC6PjGGdJKb7PFn4cqvZplGQGJt91Osn-DlDdKGgacj_Y-VFUd7ATiZ5W0bPCZYMfnqAxxU6OVwHglip3O2jkvBQ2U68tSBdQ8vT0CZSJ_EEWRdMhBEGoFv3ZRR0MkciPfjyOXECVIr4c9XkUWVXuZWeVB8VWt8p5f32fWFcwg6cqeTfVst1zrMonVfXCECelbh-fBtw" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      <div className="absolute top-6 left-6">
      <span className="bg-tertiary text-on-tertiary font-label-caps text-[10px] px-3 py-1 tracking-widest rounded-sm">MICHELIN</span>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Traditional Pub</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">£££</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">The Wild Rabbit</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">A reinvention of the traditional English pub with a focus on local organic ingredients from the Daylesford estate.</p>
      </div>
      </div>
      {/* Card 2 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A cozy, atmospheric view of a classic wooden bar in a Cotswold pub. Old brass beer taps reflect the warm glow of nearby candlelight and a low-hanging lamp. The wood is dark and polished, surrounded by stone walls and a few patrons blurred in the background, creating a feeling of timeless comfort and luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADN4N08pW4ta4Y0Eb9VjZv23P0L_nWWAJq5RfYfxdUGU8uqRY8PISIsOnQth51AeZ-7Vy-JkZHzg8yNjLqE2W7IBO1h3MezWnblh-wTMchIgqSXzmf2vgkUAba3G8Pz1nZUeMMpoNgr5TCgkoMxrM_Q0K-d3dEFTyBaaO2t-XtBijbfmk9Cba2Ow_9N5wisVfNsLfAlFvUlavBmuLEXcg6jXG_UxuSkbW4QoDUJcsYUL5rhhNoknUY1l-PFvwo-96UxfATdPAM_w" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Gastro Pub</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">££</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">The Double Red Duke</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">A love letter to the British wool trade, serving open-fire cooking in a sprawling 17th-century coaching inn.</p>
      </div>
      </div>
      {/* Card 3 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A sun-drenched afternoon tea spread inside a classic English manor house. Tiered stands hold delicate finger sandwiches and ornate pastries. The light is soft and hazy, filtering through large leaded-glass windows, creating an ethereal, cinematic mood with deep shadows and golden highlights on the parchment-colored surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP7HvhgsNOtPnoOWLmNhiE8fB5_2NtrxOenfDPrYUYiH8irmiwUv6Y9PNmSzpXW7ocAWsiNPEDPtoClaMsUmVAYGr2j1tWaCB_PgeRio62R3b7gVW_dKax0mzzFvimq064r1wRvmXcF0Mme5xIsUzhrrgLllzGKBDvm5Fiwt-tygkBQa9Q1ltkRTbfkiZhyvP3QkQmJ3nwTfwI1DLygTtpH7g_Dq_OCSzaOacmXhwc9ZfB1Ho7x8cH_a64kl8wt9m6sxJLEBdIUg" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Afternoon Tea</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">£££</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">Lords of the Manor</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">A quintessentially British experience served in the drawing room of one of the Cotswolds' most historic estates.</p>
      </div>
      </div>
      {/* Card 4 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="Close-up of a rustic, candlelit dining table in a historic Cotswold cottage. A bottle of fine wine and half-filled glasses sit alongside a heavy linen napkin. The lighting is low and intimate, emphasizing textures of wood, fabric, and glass in a dark, editorial travel magazine style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7KNuZp99ehqVD0N8nDkKl6lZzggi-Z54B2MWM9Mg-MQbNXEQNObhiAdbpK2m7C_c6A6gm5fdwgSJivZJfLWgYN1scb_FUIkg_bAOdwd3031gOgNjaCuJBzoTxmKZNGx9BAtAXaOsaif79etmdqrAstEcpqLjxXMVXiXx1rw-Zp7n2ejejSO-GAZOxuROnbJIg0-OcOzTGeOtIh5cXZg86joNK9wkJPVe_kfJWX8jXQJTWuA3eH4xJU1C4EUQHrv3x9MElnxT-Rg" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      <div className="absolute top-6 left-6">
      <span className="bg-tertiary text-on-tertiary font-label-caps text-[10px] px-3 py-1 tracking-widest rounded-sm">EDITOR'S PICK</span>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Modern British</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">£££</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">The Old Butchers</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">Specializing in nose-to-tail dining and incredible seafood, tucked away in the heart of Stow-on-the-Wold.</p>
      </div>
      </div>
      {/* Card 5 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A view of an outdoor terrace of a stone pub in the Cotswolds at twilight. String lights hang overhead, glowing softly against a deep blue sky. People are seated at wooden tables, their faces illuminated by table lanterns. The scene is lush and inviting, blending dark natural tones with warm artificial light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4Wy-rmgL23PxYw5VachBUyU3cTOhCIkfV3DfPBLzyCOvNdyXwNs799GGhfDz-KYMnqz6_1N1pUmh4t5euUcmQ92qwSYDKnhzg5xFQiX7bG-fni2eE2eDy6PZRLJLdNo7U-TyzRJfpcmmuEIUFsGQKYFO6K_fJ6FM_epcLasDVjVH0WfLD2PCLKDNZ7XmelgOr8sXWGaLWRAsqxOKcMjK6gLDw1j_ZPmvAZruIvLkImIG3H6_HO4lUKRHYy8bb-ELtvDt-yKePA" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Village Pub</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">£</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">The Potting Shed</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">A relaxed, stylish pub in Crudwell known for its creative menu and beautiful expansive gardens.</p>
      </div>
      </div>
      {/* Card 6 */}
      <div className="group flex flex-col gap-6 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container card-zoom">
      <img className="w-full h-full object-cover transition-transform duration-700" data-alt="A moody, high-contrast shot of a craft cocktail being prepared in a dark bar. Splashes of amber liquid, clear ice cubes, and a twist of citrus are captured in mid-motion. The environment is dark and sophisticated, with limestone textures visible on the bar top and an aura of exclusive late-night luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYgD66rLgbAuAJ551nmGAi4t28vcy4MktwXqg17bB1KmNE32W9MlnV9a0OSM9PguKElM1reByDgczrOa2VD7GYY0LUoDJ9mpPGx70s_xYqmHk7cnJiWltyfgB9C842qxRvpKda6xCzvePGMw2XYo3m-Inr_K-uCmvR8CM3bZVswfsj5AhtOj0IvYjGTeFJoQMa20-Dg_Rt6r8ICoPgdtQB7Y1pDQVUt9Va291KweRmL_48Btztb1vvPczVLx2-TeN1tcN96mNbfA" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-label-caps text-[11px] text-primary tracking-widest uppercase">Cocktail Bar</span>
      <span className="font-body-sm text-on-surface-variant tracking-widest text-[12px]">££</span>
      </div>
      <h3 className="font-cormorant text-4xl text-on-background group-hover:text-primary transition-colors">The Churchill Arms</h3>
      <p className="font-body-sm text-on-surface-variant line-clamp-2 italic">Famed for its curated selection of local spirits and a wine list that traverses the globe with elegance.</p>
      </div>
      </div>
      </div>
      {/* Pagination/Load More */}
      <div className="mt-32 flex justify-center">
      <button className="px-12 py-4 border border-primary text-primary font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all duration-300 uppercase">
                          Discover More
                      </button>
      </div>
      </section>
      {/* Signature Section */}
      <section className="relative h-[707px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <img className="w-full h-full object-cover opacity-60" data-alt="A wide-angle, cinematic view of a long farmhouse table set for a feast in a rustic barn. Candles line the center of the table, illuminating hand-thrown pottery and artisanal breads. The background shows the dark, timbered rafters of the barn and a hints of the Cotswold landscape through an open door at night." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPynZj2iSreYAH6JOwUsr0XEW9B6ttkWDPaTA_3z3ydLhKuy02Ga_RX90eZxP9CduF_Ivt53CNGdvzMMmSDagdG01XdTWJWMPRvSwWA5uvo0LtY8fHsJ3rZ7uHFxdfRC1Z5K_igq8sxkn6VhnL2hqeIe_N82Zs-dI7CTx8Of_x2ByMAlSG9k3yXFNZPGuIPx90k5OrcxUn0Ttz3aB43RpqxfUmxEEKC5cSNnRIonTsylwndg3fA_MbVzyHtITXnMoG0byGp83dA" />
      <div className="absolute inset-0 bg-background/40"></div>
      </div>
      <div className="relative z-10 text-center px-6">
      <h2 className="font-cormorant text-5xl md:text-7xl text-on-background mb-6 italic">A taste of the landscape.</h2>
      <p className="font-body-lg text-on-surface-variant/80 max-w-2xl mx-auto mb-10">We believe that where you eat is as important as what you eat. Every recommendation in our guide has been chosen for its commitment to quality and its unique sense of place.</p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
      <a className="inline-flex items-center gap-4 text-primary font-label-caps tracking-widest border-b border-primary/30 pb-2 hover:border-primary transition-all" href="/places-to-eat">BOOK A RESERVATION <span className="material-symbols-outlined text-sm" data-icon="north_east">north_east</span></a>
      </div>
      </div>
      </section>
      </main>
      {/* Footer */}
    </>
  );
}
