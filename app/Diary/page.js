import DataCard from "../components/DataCard";

const page = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="min-h-screen ">
      {/* Card Section */}
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6">
          {/* Card */}
          {arr.map((item, index) => {
            return (
              <DataCard
                Title={"Card title"}
                Content={
                  "lorem ispum sdolor ismet afstsabh hasbjhuas sauhusant hyanj sah ubjn hjns"
                }
                link={"https://dealio.wuaze.com"}
                key={index}
              />
            );
          })}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </div>
  );
};

export default page;
