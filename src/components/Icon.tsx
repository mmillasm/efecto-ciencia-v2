type IconName = "search" | "instagram" | "youtube" | "facebook" | "arrow" | "arrow-up";

interface IconProps {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 16 }: IconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "search":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path d="M14 9V7a2 2 0 0 1 2-2h2" />
          <path d="M10 9h8" />
          <path d="M14 9v12" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg {...props}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    default:
      return null;
  }
}
