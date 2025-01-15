import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <div className=" pt-10 md:pt-24 max-w-6xl mx-auto">
        <div className="w-9/12 md:w-6/12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-700 leading-10">
            Best place to find your next{" "}
            <span className="text-slate-400">perfect</span> place
          </h1>
          <p className="text-slate-400 mt-2">
            Your direct path to home sweet home.
          </p>
        </div>
        <div className="relative w-full h-96 mt-28 md:mt-36">
            <Image
          src={"/images/hero.png"}
          layout="fill"
          objectFit="cover"
          priority
          alt="hero image"
        />
        </div>
      
      </div>
    </div>
  );
};

export default Home;
