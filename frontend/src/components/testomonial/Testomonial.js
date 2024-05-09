import React from "react";
import anisha from "../../img/avatar-anisha.png";
import richart from "../../img/avatar-richard.png";
import ali from "../../img/avatar-ali.png";

const Testomonial = () => {
  return (
    <div className=" container mx-auto mt-10 space-y-12 flex flex-col text-center">
      <h2 className="text-4xl font-bold text-center">
        What's different about manage?
      </h2>
      <div className="flex flex-col mt-24  md:flex-row md:space-x-6">
        {/* testimonial 1 */}
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 mt-6 md:w-1\3">
          <img className="w-16 -mt-14" src={anisha} alt="testimonial" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-neutral-700">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        {/* testimonial 2 */}
        <div className="flex flex-col   items-center p-6 space-y-6 rounded-lg bg-gray-300 mt-6 md:w-1\3">
          <img className="w-16 -mt-14" src={richart} alt="testimonial" />
          <h5 className="text-lg font-bold">Richard</h5>
          <p className="text-sm text-neutral-700">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        {/* testimonial 3 */}
        <div className="flex flex-col   items-center p-6 space-y-6 rounded-lg bg-gray-300 mt-6 md:w-1\3">
          <img className="w-16 -mt-14" src={ali} alt="testimonial" />
          <h5 className="text-lg font-bold">Ali</h5>
          <p className="text-sm text-neutral-700">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </div>
      <div className="my-6">
        <a
          href=""
          className="px-6 py-2 font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l from-red-500 to-red-800"
        >
          {" "}
          get started
        </a>
      </div>
    </div>
  );
};

export default Testomonial;
