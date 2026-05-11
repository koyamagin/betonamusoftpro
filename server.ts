import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // SEO Endpoints
  app.get("/robots.txt", (req, res) => {
    console.log("Serving robots.txt");
    res.type("text/plain");
    res.send("User-agent: *\nAllow: /\n\nSitemap: https://betonamusoft.pro/sitemap.xml");
  });

  app.get("/sitemap.xml", (req, res) => {
    console.log("Serving sitemap.xml request");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://betonamusoft.pro/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    res.header("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, service, message, honeypot } = req.body;

    // Simple anti-spam honeypot check
    if (honeypot) {
      console.log("Spam detected via honeypot.");
      return res.status(200).json({ message: "Inquiry received (Spam Filtered)" });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // For production, the user should set these in AI Studio secrets
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER || "sondangvan1995@gmail.com", // Fallback for visibility
          pass: process.env.SMTP_PASS, // This MUST be set by user
        },
      });

      const mailOptions = {
        from: email,
        to: "sondangvan1995@gmail.com",
        subject: `Betonamusoft Inquiry: ${service} from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service || "General Inquiry"}

Message:
${message}
        `,
      };

      // In the dev environment, without real SMTP_PASS, we might just log it
      if (!process.env.SMTP_PASS) {
        console.log("No SMTP_PASS found. Simulating email send:");
        console.log(mailOptions);
        // We'll return success to show the UI works correctly
        return res.status(200).json({ message: "Inquiry received (Simulation mode - No SMTP credentials provided)" });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Inquiry sent successfully!" });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ error: "Failed to send inquiry. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
