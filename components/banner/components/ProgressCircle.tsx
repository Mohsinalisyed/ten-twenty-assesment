export const ProgressCircle = ({ progress }: { progress: number }) => (
  <div
    className="absolute inset-0 rounded-lg"
    style={{
      background: `conic-gradient(
        from -43deg,
        white ${progress * 3.6}deg,
        rgba(255, 255, 255, 0.5) ${progress * 3.6}deg
      )`,
      mask: "linear-gradient(#eee 0 0) content-box, linear-gradient(#eee 0 0)",
      maskComposite: "exclude",
      padding: "4px",
    }}
  />
);
