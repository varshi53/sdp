import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import "./certificate.css";

const Certificate = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Select Course");
  const courses = ["Guitar Lessons", "Piano Lessons", "Violin Lessons", "Drum Lessons"];
  const date = new Date().toLocaleDateString();
  
  const signatureName = "John Doe"; // Hardcoded signature name

  const generatePDF = () => {
    const doc = new jsPDF("landscape");
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    // Add background rectangle
    doc.setFillColor(255, 255, 255); // White background
    doc.rect(0, 0, width, height, "F");

    // Add border rectangle (moved outward by increasing border width)
    const borderMargin = 10;
    doc.setDrawColor(250, 208, 201); // Pink Salt border
    doc.setLineWidth(2);
    doc.rect(borderMargin, borderMargin, width - 2 * borderMargin, height - 2 * borderMargin, "S");

    // Add text content
    doc.setFontSize(30);
    doc.setTextColor(110, 110, 109); // Charcoal Gray text
    doc.text("Certificate of Completion", width / 2, 50, null, null, "center");

    doc.setFontSize(20);
    doc.setTextColor("#000");
    doc.text(`This is to certify that`, width / 2, 80, null, null, "center");
    doc.setFont("times", "bold");
    doc.text(`${name}`, width / 2, 100, null, null, "center");
    doc.setFont("times", "normal");
    doc.text(`has successfully completed the course`, width / 2, 115, null, null, "center"); // Reduced spacing
    doc.setFont("times", "bold");
    doc.text(`${course}`, width / 2, 130, null, null, "center"); // Reduced spacing
    doc.setFont("times", "normal");
    doc.text(`on ${date}`, width / 2, 145, null, null, "center"); // Reduced spacing

    // Add signature area
    doc.setFont("times", "bold");
    doc.text(`John`, width / 2, 180, null, null, "center"); // Adjusted position
    doc.setFont("times", "normal");
    doc.text(`______________________________`, width / 2, 190, null, null, "center"); // Adjusted position
    //doc.text(`Signature`, width / 2, 205, null, null, "center"); // Adjusted position

    // Add seal image
    doc.addImage(`${process.env.PUBLIC_URL}/images/seal.png`, "PNG", width - 70, height - 70, 60, 60);

    doc.save("certificate.pdf");
  };

  return (
    <div className="certificate-container">
      <h1>Generate Your Certificate</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={generatePDF}>
          Generate Certificate
        </button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Certificate;
