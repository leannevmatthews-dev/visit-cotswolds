import type { ReactNode } from "react";

type LocalTip = {
  icon: string;
  text: ReactNode;
};

const LOCAL_TIPS: LocalTip[] = [
  {
    icon: "wb_twilight",
    text: "Arrive before 9am in summer if you want Arlington Row without a crowd.",
  },
  {
    icon: "calendar_month",
    text: "Weekdays are significantly quieter than Saturdays, even in peak season.",
  },
  {
    icon: "hourglass_top",
    text: "Most visitors only stay 30–60 minutes—you will see more in two unhurried hours.",
  },
  {
    icon: "photo_camera",
    text: (
      <>
        The best photos are often <em>not</em> taken directly in front of
        Arlington Row—try the bridge and river path.
      </>
    ),
  },
  {
    icon: "wb_sunny",
    text: "The village feels completely different after 4pm when coach traffic drops off.",
  },
  {
    icon: "local_parking",
    text: "Park at the Trout Farm car park rather than attempting on-street spaces on the B4425.",
  },
  {
    icon: "directions_walk",
    text: "The riverside path beyond the bridge is where locals walk—most tourists never go there.",
  },
  {
    icon: "check_circle",
    text: "There is no admission fee to walk the village—it is free to visit.",
  },
];

export function LocalTipsSection() {
  return (
    <div className="mb-24 md:mb-32">
      <h2 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4 leading-tight">
        Local Tips
      </h2>
      <p className="font-body-sm text-on-surface-variant mb-8 max-w-2xl">
        Practical insights from our visits—the kind of advice you would get from
        someone who has been there recently.
      </p>
      <div className="village-tips-grid">
        {LOCAL_TIPS.map((tip) => (
          <div key={String(tip.icon)} className="village-tip">
            <span className="material-symbols-outlined village-tip__icon">
              {tip.icon}
            </span>
            <p className="village-tip__text">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
