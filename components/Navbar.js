export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #1aff9c",
        background: "#081120",
      }}
    >
      <h2 style={{ color: "#1aff9c" }}>
        ShreeNayraGroup
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/financial-services">Finance</a>
        <a href="/digital-marketing">Marketing</a>
        <a href="/calculators">Calculators</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
