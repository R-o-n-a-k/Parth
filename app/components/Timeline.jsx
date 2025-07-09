// const Timeline = ({ data, heading = "Timeline" }) => {
//   return (
//     <>
//       <h1 className="section-heading">{heading}</h1>

//       <div className="p-6">
//         <ol className="relative border-l border-gray-300 w-fit">
//           {data.map((item, index) => (
//             <li key={index} className="mb-10 ml-6">
//               <span className="absolute flex items-center justify-center w-8 h-8 bg-[var(--primary)] rounded-full -left-4 ring-4 ring-white text-white">
//                 {item.icon}
//               </span>
//               <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
//                 {item.title}
//               </h3>
//               <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
//                 {item.date} — {item.company}, {item.location}
//               </time>
//               {Array.isArray(item.description) ? (
//                 <ul className="list-none list-inside space-y-1 text-sm text-gray-700">
//                   {item.description.map((point, i) => (
//                     <li key={i}>- {point}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-sm text-gray-700">{item.description}</p>
//               )}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// };

// export default Timeline;

const Timeline = ({ data, heading = "Timeline" }) => {
  return (
    <>
      <h1 className="section-heading">{heading}</h1>

      <div className="p-6">
        <ol className="relative border-l border-gray-300 w-fit">
          {data.map((item, index) => (
            <li key={index} className="mb-10 ml-6">
              {/* Timeline Icon */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[var(--primary)] rounded-full -left-4 ring-4 ring-white text-white">
                {item.icon}
              </span>

              {/* Date */}
              <time className="block mb-1 text-sm font-medium text-gray-500">
                {item.date}
              </time>

              {/* Title & Company */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title} @ {item.company}
              </h3>

              {/* Location */}
              <p className="text-sm text-gray-600 mb-2">{item.location}</p>

              {/* Description */}
              {Array.isArray(item.description) ? (
                <ul className="list-none space-y-1 text-sm text-gray-700 pl-4 relative">
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
                <p className="text-sm text-gray-700">{item.description}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Timeline;
