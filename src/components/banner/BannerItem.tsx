"use client";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { getHeader } from "../../../sanity/sanity-utils";
import { urlForImage } from "../../../sanity/lib/image";
import React, { useCallback, useEffect, useState } from "react";
import { HeaderTypes } from "../../../types";

export const BannerItem = ({ header }: { header: HeaderTypes[] }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    //   padding: 260px 0 100px 0;
    <div className="md:px-14 px-5 pt-44 md:pt-64 md:pb-24 p-20 ">
      {header?.map((item) => (
        <div
          className="grid md:grid-cols-5 gap-y-5 md:gap-y-0 grid-cols-1"
          key={item?._id}
        >
          <div className="md:col-span-3 col-span-1">
            <span className="tagline">{item?.subName}</span>
            <h1>
              <span className="wrap-1">{item?.name} </span>
              <span className="wrap">{text}</span>
            </h1>
            <p>{item?.description}</p>
            <a href={item?.link} target="_blank" rel="noopener noreferrer">
              {"Let's Connect"} <ArrowRightCircle />
            </a>
          </div>
          <div className="md:col-span-2 col-span-1 ">
            <img
              className="w-full"
              src={urlForImage(item?.imageurl?.asset)}
              alt="header img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
