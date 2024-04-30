"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

// const Counter = ({ endValue = 100, duration = 2000, className = "" }: any) => {
//   const [count, setCount] = useState(0); // Initialize the state
//   const upperLimit = endValue; // Define the upper limit for the counter

//   let addPerFrame = Math.ceil(endValue / duration);

//   useEffect(() => {
//     // Function to increment the counter
//     const addNum = () => {
//       setCount((prevCount) => {
//         const newCount = prevCount + 1; // Increment the counter
//         if (newCount >= upperLimit) {
//           clearInterval(timer); // Stop the timer if the count exceeds the limit
//         }
//         return newCount; // Update the state with the new count
//       });
//     };

//     const timer = setInterval(addNum, duration / endValue); // Start the interval

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(timer);
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   return (
//     <span className={`${className}`}>
//       {count} {/* Display the count */}
//     </span>
//   );
// };

const Counter = ({ endValue = 100, duration = 2, className = "", suffix = "+" }: any) => {
  return <CountUp end={endValue} duration={duration} className={className} suffix={suffix} />;
};

export default Counter; // Export the component for use in other parts of the application
