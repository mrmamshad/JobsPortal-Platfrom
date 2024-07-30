import React from "react";

export default function JobHading({ name }) {
    return (
        <div className="inline-flex  items-center gap-x-2 ">
            <span className="w-2 h-2 bg-white   inline-block   "></span>
            <h3 className="font-bold text-lg">{name}</h3>
        </div>
    );
}
