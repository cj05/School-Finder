import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="flex flex-col justify-center text-justify whitespace-nowrap bg-white rounded-2xl max-w-[500px]">
      <div className="flex flex-col px-20 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="text-4xl text-black">Test result not found</div>
        <div className="overflow-hidden relative flex-col self-center px-12 pt-5 pb-3 mt-16 text-3xl text-white aspect-[3.33] fill-indigo-600 max-md:px-5 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41fa1041200ce6c366cd3ebfc7b8f0d8bce7c13125809fbaf1b79e5ef78bbbdb?"
            className="object-cover absolute inset-0 size-full"
          />
          go test
        </div>
      </div>
    </div>
  );
}


