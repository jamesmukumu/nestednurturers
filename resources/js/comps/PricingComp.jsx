export const PriceTemp = () => {
  let visitContact = ()=>{
    window.open("/contact")
  }
    return (
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white">
              Our Pricing Plan
            </h1>

            <div className="mt-2 flex justify-center items-center space-x-2">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
              You can get All Access by selecting your plan!
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-8 w-full flex flex-col md:flex-row gap-6">

            {/* Essential Plan */}
            <div className="w-full rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                  DAY DOULA SUPPORT
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Personalized postpartum care during daytme
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                  $1560.00 <span className="text-base font-medium">/4days a week</span>
                </h2>

                <button
                  type="button"
                  role="button"
                  onClick={visitContact}
                  className="w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Second Essential Plan */}
            <div className="w-full rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                  NIGHT DOULA SUPPORT
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Overnight doula assistance for peaceful rest
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                  $1560.00 <span className="text-base font-medium">/3Nights a week</span>
                </h2>

                <button onClick={visitContact} className="w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:pr_btn focus:ring-opacity-80">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="w-full rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                  COMPREHENSIVE CARE (Day + Night)
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Day + Night doula support with multiple plan options basic
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                  $2730.00 <span className="text-base font-medium">/3 Days+ 3 Nights a week</span>
                </h2>

                <button onClick={visitContact} className="w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:pr_btn focus:ring-opacity-80">
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
};


export const SinglePriceTemp = () => {
  let visitContact = ()=>{
    window.open("/services")
  }
    return (
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white">
              Our Pricing Plan
            </h1>

            <div className="mt-2 flex justify-center items-center space-x-2">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
              You can get All Access by selecting your plan!
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-8 w-full flex flex-col md:flex-row gap-6">

            {/* Essential Plan */}
            <div className="w-full rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-col">
              <div className="p-6 flex flex-col h-full">
                <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                  DAY DOULA SUPPORT
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Personalized postpartum care during daytme
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                  $1560.00 <span className="text-base font-medium">/4days a week</span>
                </h2>

                <button
                  type="button"
                  role="button"
                  onClick={visitContact}
                  className="w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Second Essential Plan */}
            <div className="w-full   dark:bg-gray-800 flex flex-col">
              <div className="p-6 flex flex-col h-full">
               <button onClick={visitContact} className="w-full px-4 py-2 mt-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-pr_btn rounded-lg hover:bg-pr_btn focus:outline-none focus:bg-pr_btn focus:ring focus:pr_btn focus:ring-opacity-80">
                  View More Packages
                </button>
              </div>
            </div>

           

          </div>
        </div>
      </div>
    );
};

