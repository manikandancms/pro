import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      padding: "2rem 0",
      textAlign: "center",
      backgroundColor: "#151515",
      color: "#efefef"
    }}>
      <div>
        <span style={{ fontWeight: "bold" }}>Manikandan.C</span> &copy; {new Date().getFullYear()}
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <Link
          to="https://github.com/manikandancms"
          style={{ margin: "0 1rem", color: "#b3b3b3" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          to="https://www.linkedin.com/in/cmanikandan96/"
          style={{ margin: "0 1rem", color: "#b3b3b3" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
