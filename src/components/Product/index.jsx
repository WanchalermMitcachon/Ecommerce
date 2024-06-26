import React, { useState } from "react";

import CarouselMain from "./CarouselMain";
import AddtoCart from "./AddtoCart";

function Index({ item }) {

  return (
    <div className="mt-8 lg:flex">
      <CarouselMain item={item} />
      <div className="mx-4 lg:ml-24 lg:mt-14">
        {" "}
        <h2 className="my-6 text-[13px]  text-gray font-bold tracking-[1.85px]">
          {item.series}
        </h2>
        <h1 className="my-2 text-[28px] font-bold leading-[32px] lg:text-[44px] lg:leading-[48px]">
          {item.name}
        </h1>
        <p className="text-[15px] leading-[25px] text-gray lg:text-[16px] lg:leading-[26px] lg:pr-32">
          {item.description}
        </p>
        <div className="my-4 flex items-center justify-between lg:flex-col lg:items-start">
          <div className="flex items-center space-x-4 ">
            <span className="text-xl font-bold l">
              $
              {(
                item.price -
                item.price * (item.discount.percent / 100)
              ).toFixed(2)}
            </span>
            {item.discount.has && (
              <span className="block-inline bg-black px-3 py-1  rounded-md">
                <span className="text-white ">{item.discount.percent}%</span>
              </span>
            )}
          </div>

          {item.discount.has && (
            <div className="ml-2 text-gray-500 line-through lg:ml-0 ">
              ${item.price.toFixed(2)}
            </div>
          )}
        </div>
        <AddtoCart item={item} />
      </div>
    </div>
  );
}

export default Index;
