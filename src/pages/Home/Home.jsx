import Banner from "./Banner";
import HotJobs from "./HotJobs";
import PaginationButtons from "./PaginationButtons";

const Home = () => {
  return (
    <div>
      <Banner />
        <div className="md:px-0 px-4 text-center mt-8">
          <PaginationButtons />
        </div>
    </div>
  );
};

export default Home;
