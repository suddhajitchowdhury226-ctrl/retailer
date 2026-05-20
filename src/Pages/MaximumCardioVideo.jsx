import React from 'react';
import { Layout } from '../components/common/Layout/Layout';
import bannerImage from '../assets/images/bg/irish-moss-banner.jpg';
import OrganicSourcing from '../components/common/Banner/OrganicSourcing';

const MaximumCardioVideo = () => {
  const videos = [
    {
      id: 1,
      // Provided URL for the first video
      url: "https://www.youtube.com/embed/EWhz70EY1F8?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=1&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&vf=6",
      title: "Emergency Call Code Blue"
    },
    {
      id: 2,
      // Example: Age-restricted placeholder (or a real embed URL)
      // Note: Age-restricted videos might not embed well outside YouTube
      url: "https://www.youtube.com/watch?v=G8zWwSYEbpE&rco=1", // Replace VIDEO_ID_HERE
      title: "We're what we eat American #1 Killer"
    },
    {
      id: 3,
      // Example: Standard embed URL
      url: "https://www.youtube.com/embed/PLzbA9PVX1I?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=5&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=6", // Example ID
      title: "How we are going to solve the problem"
    },
    {
      id: 7, // Kept original numbering from screenshot for context
      url: "https://www.youtube.com/embed/_W1EC9Kf5Go?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=7&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=6", // Example ID
      title: "What is & what NITRIC OXIDE Does?"
    },
    {
      id: 8,
      url: "https://www.youtube.com/embed/Wz3YHGwYZaY?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=9&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=6", // Example ID (Rick Astley)
      title: "How you create Nitric Oxide in the Body"
    },
    {
      id: 9,
      url: "https://www.youtube.com/embed/rRHrGRtR8dU?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=11&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=6", // Example ID
      title: "What is Arginine's Importance! The Magic explains it."
    },
    {
       id: 10,
       url: "https://www.youtube.com/embed/0VhUk34vxc4?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=13&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
       title: "Live Testimonials"
    },
    {
       id: 11,
       url: "https://www.youtube.com/embed/zbsV19Ybnqg?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=15&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
       title: "What it Will Do!"
    },
    {
        id: 12,
        url: "https://www.youtube.com/embed/ye1s_TUpqA8?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=17&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
        title: "What cause the Blood Clot?"
    },
     {
        id: 13,
        url: "https://www.youtube.com/embed/VqT8IHTcZxo?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=19&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
        title: "Memory & The Brain"
    },
     {
        id: 15,
        url: "https://www.youtube.com/embed/JyNE35rBf1U?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=21&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=6", // Example ID
        title: "Inflammatory Diseases Common Cause of Heart Attack & Stroke"
    },
     {
        id: 16,
        url: "https://www.youtube.com/embed/I0jAI9cbL60?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=23&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&vf=1", // Example ID
        title: "Chest Pains .... L-arginine"
    },
    {
       id: 17,
       url: "https://www.youtube.com/embed/OTwLCi6-87E?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=25&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&vf=1", // Example ID
       title: "Live Testimonials"
    },
    {
       id: 18, // Represents the "Video unavailable" slot
       url: "", // No URL or a placeholder
       title: "Arginine Discussed Obesity and Diabetes",
       unavailable: true
    },
    {
        id: 19,
        url: "https://www.youtube.com/embed/hu4iWHwY9NU?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=29&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&vf=1", // Example ID
        title: "Sexual Revolution How much to use?"
    },
     {
        id: 20,
        url: "https://www.youtube.com/embed/ZW8QpC7YPpc?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=31&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&vf=1", // Example ID
        title: "Side Effects You Need To Know"
    },
     {
        id: 21,
        url: "https://www.youtube.com/embed/s0er1M_pHtM?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=33&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
        title: "Live Testimonials"
    },
     {
        id: 22,
        url: "https://www.youtube.com/embed/KP7CGl-8zNM?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Frayshealthyliving.com&widgetid=35&forigin=https%3A%2F%2Frayshealthyliving.com%2Fvideo%2F&aoriginsup=1&gporigin=https%3A%2F%2Frayshealthyliving.com%2Frhl-cbd%2F&vf=1", // Example ID
        title: "Start The Process We need your help to Stop Heart Disease !"
    },
  ];

  return (
    <Layout>
      <div style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff'
      }}>
        {/* Banner Section */}
        <div style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'clamp(200px, 40vw, 300px)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 'clamp(20px, 5vw, 40px)',
          position: 'relative'
        }}>
          <span style={{
            color: 'white',
            fontSize: 'clamp(32px, 8vw, 48px)',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>Maximum Cardio Video</span>
        </div>

        {/* Video Section */}
        <div style={{ padding: '80px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(32px, 6vw, 48px)', 
            fontWeight: 'bold', 
            marginBottom: '16px', 
            textAlign: 'center', 
            fontFamily:'Manrope, sans-serif',
            color: '#333',
            letterSpacing: '1px'
          }}>
            Maximum Cardio Videos
          </h1>
          <div style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#FF6B35',
            margin: '0 auto 40px'
          }}></div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
        }}>
          {videos.map((video) => (
            <div
              key={video.id}
              style={{
                border: '1px solid #e2e8f0', // Light border like screenshots
                borderRadius: '8px',       // Slightly rounded corners
                overflow: 'hidden',        // Keep iframe corners rounded
                background: '#fff',        // White background for card
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' // Subtle shadow
              }}
            >
              {/* Video Embed Area */}
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
                maxWidth: '100%',
                background: '#000' // Black background for loading/unavailable
              }}>
                {video.unavailable ? (
                   <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', flexDirection:'column' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                     <p style={{marginTop: '10px', fontSize: '14px'}}>Video unavailable</p>
                   </div>
                ) : video.url.includes("VIDEO_ID_HERE") ? ( // Placeholder for age-restricted or specific case
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', flexDirection:'column', background: '#333' }}>
                     {/* You might need a more sophisticated check or specific embed code for age-restricted */}
                     <p style={{fontSize: '14px', textAlign: 'center', padding: '10px'}}>This video may be age-restricted or require specific permissions to embed.</p>
                   </div>
                ) : (
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src={video.url}
                    title={video.title} // Use video title for accessibility
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Title Below Video */}
              <div style={{ padding: '12px 16px' }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily:'Manrope, sans-serif',
                  color: '#1f2937', // Darker text color
                  margin: 0,
                  // Truncate long titles if needed
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {video.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OrganicSourcing />
      </div>
    </Layout>
  );
};

export default MaximumCardioVideo;