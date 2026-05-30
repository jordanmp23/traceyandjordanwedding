import Layout from "../components/coming_soon_components/layout.tsx";
// import Timer from "../components/coming_soon_components/timer"
// import Particles from 'react-particles-js';

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// };

function ComingSoon() {
    return(
        <Layout>
        <div className="bgimg">
            <div className="bg-layout">
            {/* <Particles className="particles" params={particlesOptions} /> */}
            <div className="middle">
                <div className="content">
                <h1 className="h1">COMING SOON</h1>
                {/* <Timer /> */}
                <p>We are very excited to share details about our special day very soon!</p>
                </div>
                </div>
            </div>
            <div className="bottomleft">
            </div>
            </div>
        </Layout>
    )
}

export default ComingSoon;