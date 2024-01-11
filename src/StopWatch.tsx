import React from "react";

interface StopWatchInterface {
  time: number;
}

export default function StopWatch({ time }: StopWatchInterface) {
  return (
    <div>
      <h2>00:00:00</h2>
      <p>{time}</p>
    </div>
  );
}
