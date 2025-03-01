import { useState, useEffect } from "react";
import React from "react";

export default function HomePage() {
  const [services, setServices] = useState([]);
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    // Fetch services data from an open-source API
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setServices(data));

    // Fetch a random testimonial
    fetch("https://jsonplaceholder.typicode.com/comments/1")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ 
        position: "relative", 
        width: "100%", 
        height: "500px", 
        backgroundImage: "url('/wedding-hero.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        textAlign: "center", 
        color: "white", 
        padding: "20px" 
      }}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "24px", borderRadius: "8px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Make Your Dream Wedding Come True</h1>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>Exclusive wedding planning services tailored just for you.</p>
          <button style={{ marginTop: "16px", backgroundColor: "#ec4899", color: "white", padding: "10px 20px", borderRadius: "5px" }}>Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
          {services.map((service) => (
            <div key={service.id} style={{ backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", padding: "24px", borderRadius: "8px", textAlign: "center" }}>
              <img src={service.image} alt={service.title} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: "600", marginTop: "12px" }}>{service.title}</h3>
              <p style={{ marginTop: "10px", color: "#4a4a4a" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: "#f3f3f3", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600" }}>What Our Clients Say</h2>
        {testimonial && (
          <div style={{ marginTop: "24px", maxWidth: "600px", margin: "0 auto", color: "#4a4a4a" }}>
            <p style={{ fontSize: "18px", fontStyle: "italic" }}>
              "{testimonial.body}"
            </p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>- {testimonial.name}</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section style={{ padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600" }}>Get in Touch</h2>
        <p style={{ marginTop: "16px", color: "#4a4a4a" }}>Contact us today to start planning your wedding!</p>
        <div style={{ marginTop: "16px", fontSize: "18px" }}>
          <p>📞 +1 234 567 890</p>
          <p>✉️ info@weddingplanner.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a1a1a", color: "white", padding: "16px", textAlign: "center" }}>
        <p>&copy; 2025 Wedding Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}
