const Timeline = ({ data, heading = "Timeline" }) => {
  return (
    <>
      <h1 className="section-heading">{heading}</h1>

      <div className="py-2 px-6">
        <ol className="relative border-l border-gray-300 w-fit ">
          {data.map((item, index) => (
            <li key={index} className="mb-10 ml-8">
              <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full -left-4 md:-left-5 ring-4 ring-white text-white">
                {item.icon}
              </span>

              <time className="block mb-0.5 text-xs md:text-sm font-normal text-subtitle-color">
                {item.date}
              </time>

              {/* Title & Company */}
              <h3 className="md:text-lg text-base font-medium text-title-color">
                {item.title} @ {item.company}
              </h3>

              {/* Location */}
              <p className="text-xs md:text-sm text-grey-4 mb-2">
                {item.location}
              </p>

              {/* Description */}
              {Array.isArray(item.description) ? (
                <ul className="list-none space-y-0.5 text-sm md:text-base text-content pl-4 relative">
                  {item.description.map((point, i) => (
                    <li
                      key={i}
                      className="relative before:content-['-'] before:absolute before:-left-4"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="space-y-0.5 text-sm md:text-base text-content pl-4 relative">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Timeline;
