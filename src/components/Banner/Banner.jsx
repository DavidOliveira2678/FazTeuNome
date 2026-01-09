import "./banner.css";

export default function Banner({
  variant = "",
  align = "left",
  direction = "row",
  children
}) {
  return (
    <div
      className={`banner-container ${variant}`}
      style={{
        textAlign: align,
        flexDirection: direction
      }}
    >
      {children}
    </div>
  );
}
