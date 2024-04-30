import React from "react";
import Counter from "../reusable/CountUp";

const SectionFive = () => {
  return (
    <div className="px-[10%] flex min-h-dvh items-center">
      <div>
        <p className="w-[472px] text-[45px] leading-[65px] font-[500]">Softwind Tech Ltd. at a Glance</p>
        <div className="flex flex-row gap-16 text-[18px] leading-[30px] mt-[50px]">
          <p>
            Id phasellus nibh curabitur elementum tortor eros donec facilisi dapibus, lobortis sociis aptent ullamcorper
            laoreet condimentum eu parturient euismod nostra, est posuere inceptos suscipit nascetur arcu nam dui.
            Quisque felis sagittis blandit donec torquent eros lacus mattis facilisis aliquet convallis taciti ad nisl,
            ornare massa nunc at sociosqu fames per maecenas orci velit magna a congue.
          </p>
          <p>
            Parturient rhoncus curabitur torquent vulputate erat litora quam suscipit est fringilla malesuada turpis
            quisque cum sociis, viverra commodo convallis diam semper nisl venenatis per eu sed praesent volutpat magna
            platea..
          </p>
        </div>
        <div className="flex gap-16 mt-16 justify-center">
          {data.map((item, index) => (
            <div key={index}>
              <p className="text-[45px] leading-[65px] font-[500] text-[#4398C8] text-center">
                <Counter endValue={item.counter} />
              </p>
              <p className="text-[18px] leading-[30px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;

let data = [
  { text: "Tech Partners", counter: 12 },
  { text: "Years of Experience", counter: 14 },
  { text: "Countries Served", counter: 10 },
  { text: "IT Professionals", counter: 20 },
  { text: "Project Completed", counter: 2000 },
];
