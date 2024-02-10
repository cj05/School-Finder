export default function widget(props){
    return (
        <div className="flex flex-col grow px-5 pt-12 pb-5 w-full bg-lightgrey rounded-[30px] max-md:mt-10">
            <div className="mt-36 text-xl text-justify text-zinc-800 max-md:mt-10">
                {props.title}
            </div>
            <div className="justify-center self-start px-8 py-4 mt-7 ml-4 text-2xl text-center text-white whitespace-nowrap bg-yellow rounded-xl max-md:px-5 max-md:ml-2.5 w-32.36 h-20">
                {props.buttonText}
            </div>
        </div>
    )
}