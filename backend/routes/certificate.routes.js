import express from "express";
import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certificateRouter = express.Router();

const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

certificateRouter.post("/generate-certificate", async (req, res) => {
  try {
    const { userName, userLocalTime} = req.body;
    if (!userName) {
      return res.status(400).json({ error: "Username is required" });
    }

    const certificatePath = path.join(
      __dirname,
      "..",
      "assets",
      "CertificateTemplate.png"
    );

    const fontPath = path.join(
      __dirname,
      "..",
      "assets",
      "PinyonScript-Regular.ttf"
    );

    if (!fs.existsSync(certificatePath)) {
      return res.status(500).json({ error: "Certificate template not found" });
    }

    if (!fs.existsSync(fontPath)) {
      return res.status(500).json({ error: "Font file not found" });
    }

    const dateTime = userLocalTime ? formatDate(new Date(userLocalTime)) : formatDate(new Date());
    const certId = "VPS-" + Date.now();

    const doc = new PDFDocument({
      layout: "landscape",
      size: "A4",
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Certificate - ${userName}.pdf`
    );

    doc.pipe(res);

    doc.image(certificatePath, 0, 0, {
      width: doc.page.width,
      height: doc.page.height,
    });

    const centerX = doc.page.width / 2;
    const centerY = doc.page.height / 2;

    doc.registerFont("PinyonScript", fontPath);

    doc
      .font("PinyonScript")
      .fontSize(50)
      .fillColor("white")
      .text(userName, 0, centerY - 19, {
        align: "center",
        width: doc.page.width,
      });

    doc
      .font("Helvetica")
      .fontSize(16)
      .fillColor("white")
      .text(dateTime, centerX - 600, centerY + 207, {
        align: "center",
        width: doc.page.width,
      });

    doc
      .fontSize(12)
      .fillColor("white")
      .text(certId, centerX - 550, centerY + 186, {
        align: "center",
        width: doc.page.width,
      });

    doc.end();
  } catch (error) {
    res.status(500).json({
      error: "Failed to generate certificate",
      details: error.message,
    });
  }
});

export default certificateRouter;
