import { createClient } from "@supabase/supabase-js";
import { thingsToDoWithKidsContent } from "../lib/static/things-to-do-in-the-cotswolds-with-kids";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

async function migrate() {
  const { error } = await supabase
    .from("guides")
    .update({ content: JSON.stringify(thingsToDoWithKidsContent) })
    .eq("slug", "things-to-do-in-the-cotswolds-with-kids");

  if (error) {
    console.error("Failed:", error.message);
  } else {
    console.log("Kids guide content updated successfully.");
  }
}

migrate();
