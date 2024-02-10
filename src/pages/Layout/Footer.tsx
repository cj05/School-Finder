//import { useRef } from 'react';

export default function MyComponent() {
    //const windowSize = useRef([window.innerWidth, window.innerHeight]);
    return (
        <div className="flex flex-col pt-4 bg-white outline-black">
            <div className="self-center w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col flex-wrap w-3/5 max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 justify-between px-5 mt-2.5 text-xl text-black flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col flex-1">
                                <div className="flex gap-5 justify-between">
                                    <div>About us</div>
                                    <div>Contact us</div>
                                    <div>User</div>
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="self-end mt-12 aspect-square w-[50px] max-md:mt-10"
                                />
                            </div>
                            <div className="flex flex-col whitespace-nowrap basis-0">
                                <div>Privacy</div>
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="mt-11 aspect-square w-[50px] max-md:mt-10"
                                />
                            </div>
                            <div className="flex flex-col items-start self-start whitespace-nowrap">
                                <div className="ml-3 max-md:ml-2.5">Cookies</div>
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="mt-12 rounded-full aspect-square w-[45px] max-md:mt-10"
                                />
                            </div>
                            <div className="grow self-start whitespace-nowrap">
                                Terms & Conditions
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="w-px bg-black h-[159px]" />
                            <div className="flex flex-col flex-1 px-5 my-auto max-md:max-w-full">
                                <div className="self-center text-xl tracking-widest text-black whitespace-nowrap">
                                    Subscribe to our newletter
                                </div>
                                <div className="flex gap-0 justify-between mt-9 max-md:flex-wrap max-md:max-w-full">
                                    <div className="max-w-full rounded-xl bg-zinc-300 h-[68px] w-[338px]" />
                                    <div className="rounded-xl bg-zinc-300 h-[68px] w-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center px-16 py-5 mt-4 w-full text-sm text-white whitespace-nowrap bg-grey max-md:px-5 max-md:max-w-full">
                © 2024 All rights resered
            </div>
        </div>
    );
}
