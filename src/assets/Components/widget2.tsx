export default function widget(props){
    return (
        <div className="flex flex-col grow px-5 pt-12 pb-5 w-full bg-blue-darker rounded-[30px] max-md:mt-10 gap-12">
            <div className="mt-5 text-xl text-justify text-white max-md:mt-10 ">
                {props.title}
            </div>
            <div className="justify-center self-start px-8 py-4 mt-20 ml-4 text-2xl text-center text-white whitespace-nowrap bg-yellow-darker rounded-xl max-md:px-5 max-md:ml-2.5 w-32.36 h-20">
                {props.buttonText}
            </div>
        </div>
    )
}