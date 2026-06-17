import type { ReactNode } from "react";

export type CombinePlace = {
  name: string;
  images: [{ src: string; alt: string }, { src: string; alt: string }];
};

export type CombineTrip = {
  label: string;
  title: ReactNode;
  description: string;
  places: CombinePlace[];
};

const BIBURY_VILLAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKbvZy_pDxfY0J0HZI4hx1seJMV67v1e_q-y4FmU1fBVy-fJtae_XdF8Zx78f8pXKq2lNe25Q-PcRnB2jJ7tLK6QNS0oEdcdU3TvOKBiYWjKl7TV-ZX6B5cF1gkWhJvZZPnJGmKeXlGxP1UCXlbTacI6mQpq15KnebUBFh3AKCN0UrUuiLC2p_sJ0dFC2f5h0dIyuD2WzKqZXzoZUeAHxmLHcDtlTfBKZpVyiiaTNdScpDpaqog5_68u5KD0gHfURv9oQc9NbFBA";
const BIBURY_DAWN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeIomPYsuYVLcrIBeVaBdc6oG1jF9318pUacCADOsp588HRPlZTmSShhOnc8SQFpljLnoKghpy4B8LAcj9iV-fdVjNJ8D5OoZo80Ovf1OKOO1d412dpxXYZtOeV9thp_361gEJAuZp0D_l_O4yEzrhlShaomwE27km85UXDJezfFg6ybmedmgqT1bg-1FZoxu5p3KZy42IANCsx-AJ_UhAK7aplj64SeJW9dl6npKmzJGIDJZc2Z2qW03rvFS0hwgGXl8Rl8ywDw";
const BURFORD_HIGH_STREET =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcSEzoi2FjiOObPxAhJ63qUDZOrWm03UwHJ8B7k9KEXh0hPBaP1dc5IzKOjWs-3gsDgERYixw7nrvjPkMHHMbs9rNKQpJj0_ZMpE-MBqAR4ORYrvvnwG4bBMzslv4_jA0HCDsCSIvr9ryPZej_immYdFxd9PWJBCU4TaXZTxzY9QIqR5pWFPGIa6UuhSLTPeDel2Z2E90hc2OlBvtv8vz0FXEhGc31MJPj8H0Irk8kgn4SEWyiyIigmCdJrjns_2wEB9es2mhuQg";
const CASTLE_COMBE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZzSxhwh3G-GPdDTZHdnNseY8Kruoos_azgiSAJPVf8PNF_lZKRWLsJeWYJkNMlPVhm2ay8kPfBfiBRLRIIS-gQxLMxXT6ap2ODE9c84ZAiWIgUrl-ZgtBXmNxZzM_-F-Yx_F3sMPi4Q7S_teIddxgLu_JIm6QRWrllM_SLQmVNssZy33Mih-BrZ4iUxxC4usb_iaV-svBDdOOL2EjxigSL98nU1qTfi1ix5aqnxdL5Rfw5L53hcUKC2r1Z99DWrS68fFxm_1R4w";
const BOURTON =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2OYmP99WzoPuPHjxK2WUDU9rD-SqEEgghBkbxhliHCfLwwKmyLLA86EnLEcZaO17y5nxCkw-H1-eo2fYTa-lMwSCtIMOxxqtpH9fgzKC4kYDSBiUy-wypyRM9MSU8tC6aLMfGd8al3XlT_rUea4clV48_IulmyXE1VKfM8GnbOPtAL0QJ8KSZrcYgZItfPgH0RK6PVOccPT6Yu-CuzevnaspddsOYSOLe9XgOgvCb7DEFi_YSpll04SkX_r67BTDj7F7CTU4KTw";
const STOW =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDft2Vi-TcOa89IUWMb29YlBljUDBINgwv7Tma3GKcgjnYDDg2eT3Jn-UyMlMggfLGfalQ2zR_TlKAQhBTXHWmX5b3UZp_omTi0x_EfXHydJQUpOEMNrGa_GaqEkIGu_-_1vzUO98Sgg617r1rojNrSuYZiMS1teyxnRYGxMRWIOKgsA1eH8XbBqDv2Rc_8loCM18Y9MJaJv0zynsYTdTcEU4gABDnwm05Bixdv39gL9_ipKUuJbLEwuhvgyxhPaSpxAWCaK3XHYg";

export const BIBURY_COMBINE_TRIPS: CombineTrip[] = [
  {
    label: "Morning Outing",
    title: (
      <>
        Bibury +{" "}
        <a
          className="underline underline-offset-4 hover:text-limestone"
          href="/villages/burford"
        >
          Burford
        </a>
      </>
    ),
    description:
      "Morning in Bibury, then 15 minutes to Burford for high-street browsing, lunch, and St John the Baptist Church. ~12 miles apart.",
    places: [
      {
        name: "Bibury + Burford",
        images: [
          { src: BIBURY_VILLAGE, alt: "Bibury village" },
          { src: BURFORD_HIGH_STREET, alt: "Burford high street" },
        ],
      },
    ],
  },
  {
    label: "Half Day",
    title: (
      <>
        Bibury +{" "}
        <a
          className="underline underline-offset-4 hover:text-limestone"
          href="/villages/castle-combe"
        >
          Castle Combe
        </a>
      </>
    ),
    description:
      "Golden-hour Bibury at dawn, then Castle Combe for afternoon light on the bridge and market cross. Allow 45 mins between villages.",
    places: [
      {
        name: "Bibury + Castle Combe",
        images: [
          { src: BIBURY_DAWN, alt: "Bibury at dawn" },
          { src: CASTLE_COMBE, alt: "Castle Combe village" },
        ],
      },
    ],
  },
  {
    label: "Weekend",
    title: (
      <>
        Bibury +{" "}
        <a
          className="underline underline-offset-4 hover:text-limestone"
          href="/villages/bourton-on-the-water"
        >
          Bourton
        </a>{" "}
        + Stow-on-the-Wold
      </>
    ),
    description:
      "Spread across two days if possible. Day one: Bibury and Burford. Day two: Bourton-on-the-Water and Stow-on-the-Wold. Base in Burford or Bibury.",
    places: [
      {
        name: "Bourton-on-the-Water",
        images: [
          { src: BOURTON, alt: "Bourton-on-the-Water" },
          { src: STOW, alt: "Stow-on-the-Wold market square" },
        ],
      },
    ],
  },
];
