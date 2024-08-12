// // // import React from "react";
// // // import Swal from "sweetalert2";
// // // import "./enrollment.css";

// // // const EnrollNow = () => {
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     Swal.fire({
// // //       title: 'Success!',
// // //       text: 'You have successfully enrolled.',
// // //       icon: 'success',
// // //       confirmButtonText: 'Cool',
// // //       customClass: {
// // //         confirmButton: 'enrollNow-confirm-button',
// // //       },
// // //     });
// // //   };

// // //   return (
// // //     <section className="enrollNow">
// // //       <div className="container">
// // //         <div className="heading">
// // //           <h1>Enroll Now</h1>
// // //         </div>
// // //         <form className="form" onSubmit={handleSubmit}>
// // //           <input type="text" placeholder="Name" required />
// // //           <input type="email" placeholder="Email" required />
// // //           <input type="tel" placeholder="Phone Number" required />
// // //           <select required>
// // //             <option value="">Select Course</option>
// // //             <option value="piano">Piano Lessons</option>
// // //             <option value="guitar">Guitar Lessons</option>
// // //             <option value="violin">Violin Lessons</option>
// // //             <option value="voice">Voice Lessons</option>
// // //             <option value="drums">Drums Lessons</option>
// // //             <option value="music-theory">Music Theory</option>
// // //             <option value="music-production">Music Production</option>
// // //             <option value="sound-engineering">Sound Engineering</option>
// // //           </select>
// // //           <button type="submit">Submit</button>
// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default EnrollNow;



// import React from "react";
// import Swal from "sweetalert2";
// import { useHistory } from 'react-router-dom';
// import "./enrollment.css";

// const EnrollNow = () => {
//   const history = useHistory();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Swal.fire({
//       title: 'Success!',
//       text: 'You have successfully enrolled.',
//       icon: 'success',
//       confirmButtonText: 'Cool',
//       customClass: {
//         confirmButton: 'enrollNow-confirm-button',
//       },
//     }).then((result) => {
//       if (result.isConfirmed) {
//         history.push('/videoplayer'); // Redirect to the VideoPlayer page
//       }
//     });
//   };

//   return (
//     <section className="enrollNow">
//       <div className="container">
//         <div className="heading">
//           <h1>Enroll Now</h1>
//         </div>
//         <form className="form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email" required />
//           <input type="tel" placeholder="Phone Number" required />
         
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EnrollNow;




// // import React, { useState } from "react";
// // import axios from "axios";
// // import Swal from "sweetalert2";
// // import { useHistory } from 'react-router-dom';
// // import "./enrollment.css";

// // const EnrollNow = () => {
// //   const history = useHistory();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Form Data Submitted:", formData);
    
// //     axios.post("http://localhost:8080/api/enroll", formData)
// //       .then((response) => {
// //         console.log("Server Response:", response);
// //         Swal.fire({
// //           title: 'Success!',
// //           text: 'You have successfully enrolled.',
// //           icon: 'success',
// //           confirmButtonText: 'Cool',
// //           customClass: {
// //             confirmButton: 'enrollNow-confirm-button',
// //           },
// //         }).then((result) => {
// //           if (result.isConfirmed) {
// //             history.push('/videoplayer'); // Redirect to the VideoPlayer page
// //           }
// //         });
// //       })
// //       .catch((error) => {
// //         console.error("Error during form submission:", error);
// //         Swal.fire({
// //           title: 'Error!',
// //           text: 'There was an error submitting the form.',
// //           icon: 'error',
// //           confirmButtonText: 'Okay',
// //           customClass: {
// //             confirmButton: 'enrollNow-confirm-button',
// //           },
// //         });
// //       });
// //   };

// //   return (
// //     <section className="enrollNow">
// //       <div className="container">
// //         <div className="heading">
// //           <h1>Enroll Now</h1>
// //         </div>
// //         <form className="form" onSubmit={handleSubmit}>
// //           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //           <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
// //           <button type="submit">Submit</button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default EnrollNow;




import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import "./enrollment.css";

const EnrollNow = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Simulating form submission success without a backend connection
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully enrolled.',
      icon: 'success',
      confirmButtonText: 'Cool',
      customClass: {
        confirmButton: 'enrollNow-confirm-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        history.push('/videoplayer'); // Redirect to the VideoPlayer page
      }
    });
  };

  return (
    <section className="enrollNow">
      <div className="container">
        <div className="heading">
          <h1>Enroll Now</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default EnrollNow;


