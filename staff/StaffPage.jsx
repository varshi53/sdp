import React, { useState, useEffect } from "react";
import axios from "axios";
import './StaffPage.css';

const StaffPage = () => {
  const [students, setStudents] = useState([]);
  const [video, setVideo] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const [classTime, setClassTime] = useState("");

  useEffect(() => {
    // Fetch registered students
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", video);

    try {
      await axios.post("http://localhost:8080/api/upload/video", formData);
      alert("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleAssignmentUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", assignment);

    try {
      await axios.post("http://localhost:8080/api/upload/assignment", formData);
      alert("Assignment uploaded successfully!");
    } catch (error) {
      console.error("Error uploading assignment:", error);
    }
  };

  const handleClassTimeSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/class-time", { classTime });
      alert("Class time updated successfully!");
    } catch (error) {
      console.error("Error updating class time:", error);
    }
  };

  return (
    <div className="staff-page">
      <h1>Staff Dashboard</h1>

      <section className="students-section">
        <h2>Registered Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name} - {student.email}</li>
          ))}
        </ul>
      </section>

      <section className="upload-section">
        <h2>Upload Video</h2>
        <form onSubmit={handleVideoUpload}>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <button type="submit">Upload Video</button>
        </form>

        <h2>Upload Assignment</h2>
        <form onSubmit={handleAssignmentUpload}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setAssignment(e.target.files[0])}
          />
          <button type="submit">Upload Assignment</button>
        </form>
      </section>

      <section className="class-time-section">
        <h2>Set Class Time</h2>
        <form onSubmit={handleClassTimeSubmit}>
          <input
            type="datetime-local"
            value={classTime}
            onChange={(e) => setClassTime(e.target.value)}
            required
          />
          <button type="submit">Set Class Time</button>
        </form>
      </section>
    </div>
  );
};

export default StaffPage;
