export const VILLAGES_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdQLQEt2oracOjV9v6K8xMgxnm6vvDc_yTA5bfji5bBJdLTmB8KEee8Vpu_aUpu74xcLMCWs8aw_N8vQyvA-3XWzy2NerGqQqUYbdoiwqvh8V-aUcRCUd0jj7xQgLE7kpUv0TQq3G899iVibfBzdGgV-IIqAnaV36X-7o7FBI6k1eWxw0P1H6iVoFtqUag_aRQmrpaTrgSKXl9w10b6o3HzIugIWo27DWRxLq0kE8xa_hHIueeGt_6H0e2NPwP9BvnHXEPWXOjjw";

export const VILLAGE_REGIONS = [
  "ALL",
  "NORTH COTSWOLDS",
  "CENTRAL COTSWOLDS",
  "SOUTH COTSWOLDS",
] as const;

export type VillageRegion = (typeof VILLAGE_REGIONS)[number];

export const VILLAGES_LIST_CARDS = [
  {
    name: "Bibury",
    county: "GLOUCESTERSHIRE",
    href: "/villages/bibury",
    alt: "Bibury Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU0QoPCkEtDZ7azlTfwYT9RLLC0a26MUS4ldKrQV9xomcsBqn5ocXLQ3HctBEiB7YW_BgGa_CJ5SvKuS4ykxjulaBwo9IAbufx_xlPJU00mq7og0ZD99Q8sCFtqbJPyZWbtVnl1pTmiC5rJ2PwBKT61s33TT6SFTEBj55UaetxDIO7tbCzBB65Tne7kyU2ntnjfCZt9-wjpD0R2ASu7aSYbpWVbLl9ZwAG3HH9jAD_ep9-WFxRcxSwoMC1WicxzV6Sf4LTZJVQ_g",
  },
  {
    name: "Castle Combe",
    county: "WILTSHIRE",
    href: "/villages/castle-combe",
    alt: "Castle Combe Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAayhb7s6DjpYTdMSlM6HCa5h5n2iDAmUDJVjjy1-5_wAn4I62s0UrZJK3zgnRwdUQHKH9yY8ezxbsuSNSf-Viev-cvUka9KSfrWIGwbE9Jhtuldh-ewZP5PU1lE0FrPSQudpBYFlhckYjbJSy7OJ3yixM0NyalV6mSzxuXiXlVO-H6OwTXlOp5Q5Nc4YdT9ftpWSaM0knOAIzP3xt9gNqrggIAPfasno7A6uvTfkM5rXhlM5MHJy8C4eYDXujW5_t5GRZqiWE3Ww",
  },
  {
    name: "Bourton-on-the-Water",
    county: "GLOUCESTERSHIRE",
    href: "/villages/bourton-on-the-water",
    alt: "Bourton-on-the-Water Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OYmP99WzoPuPHjxK2WUDU9rD-SqEEgghBkbxhliHCfLwwKmyLLA86EnLEcZaO17y5nxCkw-H1-eo2fYTa-lMwSCtIMOxxqtpH9fgzKC4kYDSBiUy-wypyRM9MSU8tC6aLMfGd8al3XlT_rUea4clV48_IulmyXE1VKfM8GnbOPtAL0QJ8KSZrcYgZItfPgH0RK6PVOccPT6Yu-CuzevnaspddsOYSOLe9XgOgvCb7DEFi_YSpll04SkX_r67BTDj7F7CTU4KTw",
  },
  {
    name: "Burford",
    county: "OXFORDSHIRE",
    href: "/villages/burford",
    alt: "Burford Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcSEzoi2FjiOObPxAhJ63qUDZOrWm03UwHJ8B7k9KEXh0hPBaP1dc5IzKOjWs-3gsDgERYixw7nrvjPkMHHMbs9rNKQpJj0_ZMpE-MBqAR4ORYrvvnwG4bBMzslv4_jA0HCDsCSIvr9ryPZej_immYdFxd9PWJBCU4TaXZTxzY9QIqR5pWFPGIa6UuhSLTPeDel2Z2E90hc2OlBvtv8vz0FXEhGc31MJPj8H0Irk8kgn4SEWyiyIigmCdJrjns_2wEB9es2mhuQg",
  },
  {
    name: "Snowshill",
    county: "GLOUCESTERSHIRE",
    href: "/villages/snowshill",
    alt: "Snowshill Village",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADFD8A8gnmpFYZWCqaIFaRzHDGIy9LoKy-fbotKiGzZR6Mhqnl8J2mLva0sqf6lbYVTeUb6-P6wQIJTVFrlXVP0xH8csR2J4jxa6Y3tgN6o0c_WvrQBNeKiTl2Iq6KiKsGWmDozRC4pBcVnipo0FIgbO7V6Xs3cAwHbuUbL-wGyVLs52Z9q-s-3b63rF8jsyQ_AgNGZz8mh3R0MCTVDOUmqDS0ZCTipKzfYJqTHC9i_DLrTDH6j0CwB0mRyUNETHUJrvLuAfqrzg",
  },
] as const;
