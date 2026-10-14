
export default function Home() {
  const link =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&xstg=CAMSEBUJ_b-oH-PhF0yjBgb_zzE%3D";

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "60px 20px",
        color: "#171717",
      }}
    >
      <h1 style={{ fontSize: "clamp(32px, 6vw, 64px)" }}>
        This is definitely a normal link...
      </h1>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "16px",
          overflowWrap: "anywhere",
          color: "#0645ad",
        }}
      >
        {link}
      </a>
    </main>
  );
}
