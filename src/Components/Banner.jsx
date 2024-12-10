import ReactPlayer from "react-player";
import bannerbgvid from "../assets/video/banner-landing.mp4";
const Banner = () => {
  return (
    <div className="relative w-screen h-[70vh] overflow-hidden  flex items-center justify-center bg-black text-white">
      <div className="absolute w-screen top-0 overflow-hidden">
        {/* <img
          src={bannerimage}
          alt="banner-image"
          className="w-full h-full object-cover opacity-50"
        /> */}

        <ReactPlayer
          url={bannerbgvid}
          playing
          muted
          playsInline
          loop
          pip={false}
          width="100vw"
          height="100%"
          className=" h-full object-fill  opacity-50"
        />

        {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black/10" /> */}
      </div>

      <div className="relative wrapper px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-start">
          <div className="grid grid-cols-1  lg:grid-cols-1">
            <h1
              data-aos="fade-up"
              className=" text-4xl sm:text-5xl font-bold text-primary  mb-6"
            >
              START YOUR AI COMPANY
              <br /> WITH BOOSTMYSITES
            </h1>
            <p
              data-aos="fade-up"
              className=" mt-4 lg:mt-0 text-xl text-gray-300 max-w-3xl "
            >
              Are you dreaming of starting your software company? At
              BoostmySites, we turn dreams into reality. We offer comprehensive
              services to guide and support individuals in establishing their
              own software ventures. From ideation to execution, we’re your
              partners in this incredible journey.
            </p>
          </div>
          <div data-aos="fade-up" className="mt-10">
            <a
              href="https://boostmysites.com/ai-expert/contact/step1"
              className="primary-btn inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-[#D5AA12] hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
