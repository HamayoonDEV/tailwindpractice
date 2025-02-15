import React from "react";

const Feature = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:spcace-y-0 md:flex-row">
      {/* what's difference */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h1 className="max-w-md font-bold text-center text-4xl md:text-left">
          What's different about Manage?
        </h1>
        <p className="text-neutral-500 max-w-sm text-center md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity.Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* number list */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* header */}
          <div className="rounded-l-full bg-red-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" font-bold px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                o1
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Track company-wide progress
            </h3>
            <p className="text-neutral-500">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        {/* list item 02 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* header */}
          <div className="rounded-l-full bg-red-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" font-bold px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                o2
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Advanced built-in reports
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Advanced built-in reports
            </h3>
            <p className="text-neutral-500">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        {/* list item 03 */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* header */}
          <div className="rounded-l-full bg-red-300 md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className=" font-bold px-4 py-2 text-white rounded-full md:py-1 bg-red-500">
                o3
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Everything you need in one place
            </h3>
            <p className="text-neutral-500">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
