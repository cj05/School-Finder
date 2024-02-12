import MathJax from 'react-mathjax2'
export default function b(prop) {
    function MathElement(props){
        return <MathJax.Context
        input='ascii'
        onLoad={() => console.log("Loaded MathJax script!")}
        onError={(MathJax, error) => {
          console.warn(error);
          console.log("Encountered a MathJax error, re-attempting a typeset!");
          MathJax.Hub.Queue(
            MathJax.Hub.Typeset()
          );
        }}
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
        options={{
          asciimath2jax: {
            useMathMLspacing: true,
            delimiters: [["$$", "$$"]],
            preview: "none",
          }
        }}
      >
        <MathJax.Text text={props.content} />
      </MathJax.Context>
      }
    return (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl text-black whitespace-nowrap max-md:mt-10">
                    <div className="justify-center items-center px-16 py-8 bg-white boundary-2 rounded-xl max-md:px-5">
                        <MathElement content={`1 )  $$${prop.options[0]}$$`} />
                    </div>
                    <div className="justify-center items-center px-16 py-8 mt-2.5 bg-white boundary-2 rounded-xl max-md:px-5">
                        <MathElement content={`2 )  $$${prop.options[1]}$$`} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl text-black whitespace-nowrap max-md:mt-10">
                    <div className="justify-center items-center px-16 py-8 bg-white boundary-2 rounded-xl max-md:px-5">
                        <MathElement content={`3 )  $$${prop.options[2]}$$`} />
                    </div>
                    <div className="justify-center items-center px-16 py-8 mt-2.5 bg-white boundary-2 rounded-xl max-md:px-5">
                        <MathElement content={`4 )  $$${prop.options[3]}$$`} />
                    </div>
                </div>
            </div>
        </div>)

}