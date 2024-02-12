
function MyComponent(props) {
  return (
    <div className="flex flex-col grow px-7 pt-12 pb-5 w-full whitespace-nowrap rounded-2xl bg-white max-md:px-5 max-md:mt-10">
      <div className="mt-40 text-3xl text-zinc-800 max-md:mt-10">
        {props.title}
      </div>
      <div className="justify-center max-w-40 px-6 py-3.5 mt-2.5 text-base text-white bg-blue-darker rounded-xl max-md:px-5 ">
        {props.buttonText}
      </div>
    </div>
  );
}
export default MyComponent;