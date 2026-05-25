export default function Home() {
  return (
    <main
      style={{
        background: "#06111f",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <section
        style={{
          textAlign: "center",
          padding: "40px 20px",
          border: "1px solid #1aff9c",
          borderRadius: "20px",
          background: "#0b1b2d",
        }}
      >
        <img
          src="/arun.png"
          alt="Arun Kaul"
          style={{
            width: "140px",
            borderRadius: "50%",
            border: "4px solid #1aff9c",
          }}
        />

        <h1
          style={{
            fontSize: "42px",
            marginTop: "20px",
            color: "#1aff9c",
          }}
        >
          ShreeNayraGroup
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          One Group. Multiple Solutions. Limitless Growth.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "14px 28px",
            background: "#1aff9c",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Services
        </button>
      </section>

      <section
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#10253d",
            padding: "25px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#1aff9c" }}>Financial Services</h2>
          <p>
            Loans, Insurance, Credit Cards, Investments & Financial Planning.
          </p>
        </div>

        <div
          style={{
            background: "#10253d",
            padding: "25px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#1aff9c" }}>Digital Marketing</h2>
          <p>
            SEO, Ads, Website Development, Branding & Automation Solutions.
          </p>
        </div>

        <div
          style={{
            background: "#10253d",
            padding: "25px",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ color: "#1aff9c" }}>Clinic Growth</h2>
          <p>
            Hair Transplant & Cosmetic Surgery Marketing and Patient Leads.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "50px",
          background: "#0b1b2d",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ color: "#1aff9c" }}>Contact Us</h2>

        <p>📞 +91 96501 30310</p>
        <p>📧 info@shreenayragroup.com</p>
        <p>📍 Jammu & Kashmir, India</p>

        <a
          href="https://wa.me/919650130310"
          target="_blank"
        >
          <button
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              background: "#25D366",
              border: "none",
              borderRadius: "12px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Consult on WhatsApp
          </button>
        </a>
      </section>
    </main>
  );
          }
