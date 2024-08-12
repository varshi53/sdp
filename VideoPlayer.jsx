// // import React from 'react';
// // import ReactPlayer from 'react-player';
// // import './VideoPlayer.css';

// // const VideoPlayer = () => {
// //   const videos = [
// //     { src: "https://videos.pexels.com/video-files/4786258/4786258-sd_960_506_25fps.mp4", title: "Video 1" },
// //     { src: "https://videos.pexels.com/video-files/7504689/7504689-sd_640_360_25fps.mp4", title: "Video 2" },
   
// //     { src: "https://videos.pexels.com/video-files/8926976/8926976-sd_640_360_25fps.mp4", title: "Video 3" },
// //     { src: "https://videos.pexels.com/video-files/10222354/10222354-sd_960_506_25fps.mp4", title: "Video 4" },
// //     { src: "https://videos.pexels.com/video-files/8190960/8190960-sd_640_360_25fps.mp4", title: "Video 5" },
// //     { src: "https://videos.pexels.com/video-files/8190457/8190457-sd_640_360_25fps.mp4", title: "Video 6" },
// //     { src: "https://videos.pexels.com/video-files/7504268/7504268-sd_640_360_25fps.mp4", title: "Video 7" },
// //     { src: "https://videos.pexels.com/video-files/7352045/7352045-uhd_2560_1080_25fps.mp4", title: "Video 8" },
    
// //   ];

// //   return (
// //     <div className="video-container">
// //       {videos.map((video, index) => (
// //         <div key={index} className="video-card">
// //           <h2>{video.title}</h2>
// //           <ReactPlayer
// //             url={video.src}
// //             controls
// //             width='100%'
// //             height='auto'
// //             className="video-player"
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default VideoPlayer;



// import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import axios from 'axios';
// import './VideoPlayer.css';

// const VideoPlayer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     // Fetch the videos from the backend
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/videos'); // Assuming your backend is running on localhost:8080
//         const videoList = response.data.map(video => ({
//           id: video.id,
//           title: video.title,
//           src: `http://localhost:8080/videos/${video.id}` // Video data fetched by ID
//         }));
//         setVideos(videoList);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="video-container">
//       {videos.map((video) => (
//         <div key={video.id} className="video-card">
//           <h2>{video.title}</h2>
//           <ReactPlayer
//             url={video.src}
//             controls
//             width="100%"
//             height="auto"
//             className="video-player"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoPlayer;




import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the videos from the backend
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/videos'); // Assuming your backend is running on localhost:8080
        const videoList = await Promise.all(
          response.data.map(async (video) => {
            const videoBlob = await axios.get(`http://localhost:8080/videos/${video.id}`, {
              responseType: 'blob' // Important for handling binary data
            });
            const videoUrl = URL.createObjectURL(videoBlob.data);
            return {
              id: video.id,
              title: video.title,
              src: videoUrl
            };
          })
        );
        setVideos(videoList);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-container">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <h2>{video.title}</h2>
          <ReactPlayer
            url={video.src}
            controls
            width="100%"
            height="auto"
            className="video-player"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;

