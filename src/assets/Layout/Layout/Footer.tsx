//import { useRef } from 'react';

export default function MyComponent() {
    //const windowSize = useRef([window.innerWidth, window.innerHeight]);
    return (
    <div className="flex flex-col bg-white">
      <div className="z-10 px-16 py-4 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between mt-2.5 text-xl text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col flex-1">
                <div className="flex gap-5 justify-between">
                  <div>About us</div>
                  <div>Contact us</div>
                  <div>User</div>
                </div>
              </div>
              <div className="whitespace-nowrap">Privacy</div>
              <div className="items-start self-start whitespace-nowrap max-md:pl-2.5">
                Cookies
              </div>
              <div className="grow self-start whitespace-nowrap">
                Terms & Conditions
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="w-px bg-black h-[159px]" />
              <div className="flex flex-col flex-1 self-start mt-3 max-md:max-w-full">
                <div className="text-3xl font-medium tracking-wider text-indigo-600 max-md:max-w-full">
                  Subscribe to our newletter
                </div>
                <div className="flex gap-5 justify-between mt-6 text-2xl h-20 w-80 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="grow justify-center items-start py-2 pr-16 pl-4 my-auto bg-white rounded-xl border-black border-solid border-[3px] max-md:pr-5">
                    Enter your email
                  </div>
                  <img
                    loading="lazy"
                    srcSet="img/BackArrow.png"
                    className="aspect-square w-max-30px h-max-30px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-16 py-5 w-full text-sm text-white whitespace-nowrap bg-indigo-600 blur-[1px] max-md:px-5 max-md:max-w-full">
         © 2024 All rights resered
      </div>
    </div>
    );
}
