// // import React from "react";
// // import "./courses.css";
// // import { online } from "../../dummydata";
// // import Heading from "../common/heading/Heading";

// // const OnlineCourses = () => {
// //   return (
// //     <>
// //       <section className="online">
// //         <div className="container">
// //           <Heading subtitle="COURSES" title="Browse Our Online Courses" />
// //           <div className="content grid3">
// //             {online.map((val) => (
// //               <div className="box">
// //                 <div className="img">
// //                   <img src={val.cover} alt="" />
// //                   <img src={val.hoverCover} alt="" className="show" />
// //                 </div>
// //                 <h1>{val.courseName}</h1>
// //                 <span>{val.course}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default OnlineCourses;


// import React from "react";
// import "./courses.css";
// import { online } from "../../dummydata";
// import Heading from "../common/heading/Heading";

// const OnlineCourses = () => {
//   return (
//     <>
//       <section className="online">
//         <div className="container">
//           <Heading subtitle="COURSES" title="Browse Our Offline Courses" />
//           <div className="content grid3">
//             {online.map((val, index) => (
//               <div key={index} className="box">
//                 <div className="img">
//                   <img src={val.cover} alt={val.courseName} />
//                   <img src={val.hoverCover} alt={val.courseName} className="show" />
//                 </div>
//                 <h1>{val.courseName}</h1>
//                 <span>{val.course}</span>
//                 <button className="explore-btn">Explore Now</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OnlineCourses;




import React from "react";
import { useHistory } from "react-router-dom";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const history = useHistory();

  const handleExploreNow = () => {
    history.push("/teachers");
  };

  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="COURSES" title="Browse Our Offline Courses" />
          <div className="content grid3">
            {online.map((val, index) => (
              <div key={index} className="box">
                <div className="img">
                  <img src={val.cover} alt={val.courseName} />
                  <img src={val.hoverCover} alt={val.courseName} className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                <button className="explore-btn" onClick={handleExploreNow}>Explore Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
