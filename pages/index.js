export default function Home() {
  return (
    <div style={{
      background:"#0a0a0a",
      color:"#fff",
      fontFamily:"Arial",
      minHeight:"100vh"
    }}>

      {/* HERO SECTION */}

      <div style={{
        padding:"40px 20px",
        textAlign:"center",
        background:"linear-gradient(to bottom,#000,#111)"
      }}>

        <img
          src="/logo.png"
          width="120"
          style={{borderRadius:"20px"}}
        />

        <h1 style={{
          fontSize:"38px",
          marginTop:"20px",
          color:"#22c55e"
        }}>
          ShreeNayraGroup
        </h1>

        <p style={{
          color:"#ccc",
          fontSize:"18px",
          maxWidth:"700px",
          margin:"20px auto"
        }}>
          Hair Transplant • Loans • Insurance • Digital Marketing • Government Services
        </p>

        <img
          src="/arun.png"
          width="260"
          style={{
            borderRadius:"25px",
            marginTop:"20px",
            border:"3px solid #22c55e"
          }}
        />

        <h2 style={{
          marginTop:"25px",
          fontSize:"28px"
        }}>
          Arun Kaul
        </h2>

        <p style={{
          color:"#bbb",
          maxWidth:"800px",
          margin:"15px auto",
          lineHeight:"1.8"
        }}>
          Trusted Business Consultant helping clients with Hair Transplant,
          Insurance, Loans, Digital Marketing, Government Services,
          Website Development and Online Solutions.
        </p>

        <a
          href="https://wa.me/918826980675"
          style={{
            display:"inline-block",
            marginTop:"25px",
            background:"#22c55e",
            color:"#fff",
            padding:"15px 30px",
            borderRadius:"12px",
            textDecoration:"none",
            fontWeight:"bold",
            fontSize:"18px"
          }}
        >
          Contact on WhatsApp
        </a>

      </div>

      {/* HAIR TRANSPLANT */}

      <div style={{
        padding:"50px 20px",
        background:"#111"
      }}>

        <h2 style={{
          textAlign:"center",
          fontSize:"34px",
          color:"#22c55e"
        }}>
          Hair Transplant Services
        </h2>

        <p style={{
          textAlign:"center",
          color:"#ccc",
          maxWidth:"900px",
          margin:"20px auto",
          lineHeight:"1.8"
        }}>
          Advanced Hair Restoration with No Pain, No Swelling,
          No Bleeding and No Visible Scars.
        </p>

        {/* CARDS */}

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"20px",
          marginTop:"40px"
        }}>

          {/* FUE */}

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px",
            border:"1px solid #22c55e"
          }}>
            <h3 style={{color:"#22c55e"}}>
              Advance FUE
            </h3>

            <h1>₹15 / Graft</h1>

            <p style={{color:"#ccc",lineHeight:"1.7"}}>
              Budget friendly advanced technique with natural results.
              Faster recovery and excellent density.
            </p>

            <ul style={{lineHeight:"2"}}>
              <li>No Pain</li>
              <li>No Bleeding</li>
              <li>No Swelling</li>
              <li>No Visible Scars</li>
            </ul>
          </div>

          {/* BIO */}

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px",
            border:"1px solid #22c55e"
          }}>
            <h3 style={{color:"#22c55e"}}>
              Bio Enhanced
            </h3>

            <h1>₹20 / Graft</h1>

            <p style={{color:"#ccc",lineHeight:"1.7"}}>
              Enhanced graft survival with improved healing,
              stronger density and premium hairline design.
            </p>

            <ul style={{lineHeight:"2"}}>
              <li>Higher Density</li>
              <li>Better Healing</li>
              <li>Natural Hairline</li>
              <li>Premium Results</li>
            </ul>
          </div>

          {/* DHI */}

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px",
            border:"1px solid #22c55e"
          }}>
            <h3 style={{color:"#22c55e"}}>
              DHI Technique
            </h3>

            <h1>₹30 / Graft</h1>

            <p style={{color:"#ccc",lineHeight:"1.7"}}>
              Most advanced premium technique with maximum precision,
              maximum density and fastest recovery.
            </p>

            <ul style={{lineHeight:"2"}}>
              <li>Maximum Precision</li>
              <li>Best Density</li>
              <li>Fast Recovery</li>
              <li>Luxury Technique</li>
            </ul>
          </div>

        </div>

      </div>

      {/* OFFERS */}

      <div style={{
        padding:"50px 20px",
        textAlign:"center"
      }}>

        <h2 style={{
          color:"#22c55e",
          fontSize:"34px"
        }}>
          Booking Offers
        </h2>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>20% OFF</h2>
            <p>On Slot Booking Advance</p>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>30% OFF</h2>
            <p>On 50% Advance Payment</p>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>45% OFF</h2>
            <p>On Full Advance Payment</p>
          </div>

        </div>

      </div>

      {/* THERAPY */}

      <div style={{
        padding:"50px 20px",
        background:"#111"
      }}>

        <h2 style={{
          textAlign:"center",
          color:"#22c55e",
          fontSize:"34px"
        }}>
          Hair Therapy
        </h2>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>PRP</h2>
            <h3>₹5500 / Session</h3>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>GFC</h2>
            <h3>₹12000 / Session</h3>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h2>Mesotherapy</h2>
            <h3>₹8999 / Session</h3>
          </div>

        </div>

      </div>

      {/* DIGITAL MARKETING */}

      <div style={{
        padding:"50px 20px"
      }}>

        <h2 style={{
          textAlign:"center",
          color:"#22c55e",
          fontSize:"34px"
        }}>
          Digital Marketing Services
        </h2>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"20px"
        }}>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h3>Basic Website</h3>
            <h1>₹7999</h1>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h3>Premium Website</h3>
            <h1>₹19999+</h1>
          </div>

          <div style={{
            background:"#1a1a1a",
            padding:"25px",
            borderRadius:"20px"
          }}>
            <h3>SEO • SMM • Meta Ads • Google Ads</h3>
            <p style={{color:"#ccc"}}>
              Affordable business growth solutions.
            </p>
          </div>

        </div>

      </div>

      {/* SERVICES */}

      <div style={{
        padding:"50px 20px",
        background:"#111"
      }}>

        <h2 style={{
          textAlign:"center",
          color:"#22c55e",
          fontSize:"34px"
        }}>
          Other Services
        </h2>

        <div style={{
          marginTop:"30px",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>

          {[
            "Personal Loans",
            "Credit Cards",
            "Insurance",
            "Aadhar Services",
            "Government Forms",
            "Online Banking",
            "Business Registration",
            "Digital Solutions"
          ].map((service,index)=>(
            <div
              key={index}
              style={{
                background:"#1a1a1a",
                padding:"20px",
                borderRadius:"15px",
                textAlign:"center"
              }}
            >
              {service}
            </div>
          ))}

        </div>

      </div>

      {/* FOOTER */}

      <div style={{
        padding:"40px 20px",
        textAlign:"center"
      }}>

        <h2 style={{color:"#22c55e"}}>
          Book Your Appointment Today
        </h2>

        <p style={{
          color:"#ccc",
          marginTop:"15px"
        }}>
          Free Accommodation Available For Outside Delhi Clients
        </p>

        <a
          href="https://wa.me/918826980675"
          style={{
            display:"inline-block",
            marginTop:"25px",
            background:"#22c55e",
            color:"#fff",
            padding:"15px 30px",
            borderRadius:"12px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          WhatsApp Now
        </a>

      </div>

    </div>
  )
}