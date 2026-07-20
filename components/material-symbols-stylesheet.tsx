const MATERIAL_SYMBOLS_HREF =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";

/** Load Material Symbols only on routes that render `.material-symbols-outlined` icons. */
export function MaterialSymbolsStylesheet() {
  return <link rel="stylesheet" href={MATERIAL_SYMBOLS_HREF} />;
}
