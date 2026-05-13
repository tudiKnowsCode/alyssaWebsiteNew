interface WavyDividerProps {
  flip?: boolean;
  fill?: string;
  bg?: string;
}

export function WavyDivider({ flip = false, fill, bg }: WavyDividerProps) {
  return (
    <div style={{ background: bg, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: 80,
          display: "block",
          transform: flip ? "scaleY(-1)" : "none",
        }}
      >
        <path
          d="M0,40 C160,90 320,-10 480,40 C640,90 800,-10 960,40 C1120,90 1280,-10 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
