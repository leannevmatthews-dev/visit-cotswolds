import { createClient } from "@supabase/supabase-js";
import {
  whereAreTheCotswoldsContent,
  whereAreTheCotswoldsMeta,
} from "../lib/static/where-are-the-cotswolds";
import {
  howFarAreTheCotswoldsFromLondonContent,
  howFarAreTheCotswoldsFromLondonMeta,
} from "../lib/static/how-far-are-the-cotswolds-from-london";
import {
  cotswoldsWithoutACarContent,
  cotswoldsWithoutACarMeta,
} from "../lib/static/cotswolds-without-a-car";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const guides = [
  {
    meta: whereAreTheCotswoldsMeta,
    content: whereAreTheCotswoldsContent,
    heroImageUrl:
      "https://pwwpxxeploahbcpubhnx.supabase.co/storage/v1/object/public/guide-pages/where-are-the-cotswolds/where%20are%20the%20cotswolds%20hero.png",
    heroImageAlt: "Hero graphic locating the Cotswolds in England",
    heroImageCredit: null,
  },
  {
    meta: howFarAreTheCotswoldsFromLondonMeta,
    content: howFarAreTheCotswoldsFromLondonContent,
    heroImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Road_signs%2C_Upper_Slaugher%2C_Lower_Slaughter_and_Bourton-on-the_Water_7820.jpg",
    heroImageAlt:
      "Road signs for Upper Slaughter, Lower Slaughter and Bourton-on-the-Water",
    heroImageCredit: "Photo: Peter K Burian, CC BY-SA 4.0",
  },
  {
    meta: cotswoldsWithoutACarMeta,
    content: cotswoldsWithoutACarContent,
    heroImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Paddington_station_MMB_35_332001.jpg",
    heroImageAlt: "London Paddington station platforms",
    heroImageCredit: "Photo: mattbuck, CC BY-SA 3.0",
  },
];

async function migrate() {
  for (const guide of guides) {
    const { error } = await supabase.from("guides").upsert(
      {
        slug: guide.meta.slug,
        title: guide.meta.title,
        meta_title: guide.meta.metaTitle,
        meta_description: guide.meta.metaDescription,
        category: guide.meta.category,
        hero_image_url: guide.heroImageUrl,
        hero_image_alt: guide.heroImageAlt,
        hero_image_credit: guide.heroImageCredit,
        content: JSON.stringify(guide.content),
        status: "published",
        published_at: guide.meta.datePublished,
      },
      { onConflict: "slug" },
    );

    if (error) {
      console.error(`Failed to migrate ${guide.meta.slug}:`, error.message);
    } else {
      console.log(`Migrated: ${guide.meta.slug}`);
    }
  }
}

migrate();
