import { useSearchParams } from "react-router-dom";
export default function test(props) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col px-9 py-7 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full whitespace-nowrap w-[839px]">
          <div className="flex gap-2.5 items-center self-start text-sm text-black">
            <div className="grow self-stretch my-auto">Home</div>
            <img
              loading="lazy"
              srcSet="..."
              className="self-stretch w-5 aspect-square"
            />
            <div className="self-stretch my-auto">Test</div>
            <img
              loading="lazy"
              srcSet="..."
              className="self-stretch w-5 aspect-square"
            />
            <div className="grow self-stretch my-auto text-indigo-600">
              Test-Detail
            </div>
          </div>
          <div className="self-end mt-2 text-5xl font-medium text-orange-400 max-md:text-4xl">
            <span className="text-black">วิชา</span>{" "}
            <span className="text-orange-400">{searchParams.get("id")}</span>
          </div>
        </div>
        <div className="px-8 pt-7 pb-36 mt-10 text-base text-black bg-white rounded-xl max-md:px-5 max-md:pb-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris
          nibh, facilisis eu posuere a, vulputate sed sem. Pellentesque eget
          magna viverra risus tincidunt rutrum nec eu lectus. Nullam
          ullamcorper, massa ac iaculis semper, sapien ante imperdiet ex, eget
          facilisis nulla ex quis ipsum. Nam molestie sagittis lorem, et dictum
          purus volutpat nec. Sed nec sapien feugiat, mollis ante vitae, finibus
          erat. Donec sapien sapien, lobortis in est ut, facilisis egestas
          lectus. Integer suscipit ipsum rhoncus erat rutrum elementum.
          Vestibulum pharetra lacus id lorem iaculis, in feugiat orci eleifend.
          Etiam vel felis at lorem imperdiet aliquam vitae quis orci.
          Suspendisse nec enim sed nibh hendrerit finibus non nec purus.
          <br />
          Maecenas nec rutrum nulla. Sed efficitur et ligula id tempor. Nam
          pharetra sem sit amet ligula interdum, in posuere quam vehicula.
          Praesent blandit dui consectetur eros pulvinar, id ornare velit
          iaculis. Mauris vitae gravida lorem. Nullam eget aliquet leo, at
          bibendum diam. Cras justo leo, tempor non mi in, posuere posuere
          risus.
          <br />
          Morbi et egestas sapien. Etiam vehicula dignissim nisi, non egestas
          dolor feugiat nec. Vestibulum id facilisis sapien, sed consequat
          lorem. Maecenas vestibulum sodales ullamcorper. Nullam accumsan in
          turpis at mollis. Quisque consequat eget tortor condimentum lobortis.
          Nam sed faucibus tellus. Sed euismod, mi in volutpat aliquam, arcu
          libero ornare ipsum, ac suscipit ante ex vitae nibh. Aliquam sit amet
          molestie turpis, at convallis nisl. Donec sit amet vehicula orci, ut
          vestibulum dolor. Proin eget ultrices risus, nec feugiat lorem.
          Suspendisse potenti.
        </div>
        <div className="justify-center self-center px-9 py-5 mt-8 text-3xl text-white whitespace-nowrap bg-indigo-600 rounded-xl max-md:px-5">
          Start
        </div>
      </div>
    </div>
  );
}