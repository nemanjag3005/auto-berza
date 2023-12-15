import React, { useState, useEffect } from "react";

const Countdown = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date(endTime);
      const difference = end - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft("Auction ended");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        if (days > 0) {
          setTimeLeft(`${days} day${days > 1 ? "s" : ""}`);
        } else {
          setTimeLeft(
            `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
          );
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return <p className="ml-1 font-medium">{timeLeft}</p>;
};

export default Countdown;
