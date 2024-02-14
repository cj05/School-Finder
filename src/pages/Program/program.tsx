import RevertTab from "../../assets/Components/revertTab";
const about = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col justify-center w-full bg-indigo-50 max-md:max-w-full">
        <div className="flex flex-col px-9 pt-6 pb-12 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2.5 self-start text-sm whitespace-nowrap">
            <RevertTab tab={[["Home",""]]} curr="Program"/>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="grow px-12 py-12 w-full bg-white rounded-xl max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                      <div className="justify-center items-center self-stretch px-8 pt-4 my-auto w-full text-6xl text-white whitespace-nowrap bg-black h-[180px] w -[180px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
                        logo
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                        <div className="text-5xl font-medium text-indigo-600 max-md:max-w-full max-md:text-4xl">
                          Thammasat University
                        </div>
                        <div className="mt-3.5 text-4xl text-orange-400 max-md:max-w-full">
                          จำนวน xxx คณะ
                        </div>
                        <div className="flex gap-0 justify-between mt-7 text-2xl text-black max-md:flex-wrap max-md:max-w-full">
                          <img
                            loading="lazy"
                            srcSet="img\Location.png"
                            className="aspec t-square w-[50px] h-[50px]" 
                          />
                          <div className="flex-auto max-md:max-w-full">
                            Mall Road, Krishna Nagar, Dehradun, <br />
                            Uttarakhand
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="grow px-4 py-3.5 w-full bg-white rounded-xl max-md:mt-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                      <div className="mx-auto max-w-full bg-indigo-600 rounded-xl h-[300px] w-[340px] max-md:mt-3" />
                    </div>
                    <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-3">
                        <div className="shrink-0 bg-yellow-400 rounded-none h-[150px]" />
                        <div className="shrink-0 rounded-none bg-zinc-300 h-[150px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-3 pr-10 pb-12 pl-5 mt-5 bg-white rounded-xl shadow-sm max-md:pr-5 max-md:max-w-full">
            <div className="text-3xl text-indigo-600 max-md:max-w-full">
              ข้อมูลที่เกี่ยวข้อง
            </div>
            <div className="self-start mt-5 ml-3 text-2xl text-yellow-400 max-md:ml-2.5">
              คำอธิบาย
            </div>
            <div className="mt-3.5 mb-12 text-base text-black max-md:mb-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vehicula vitae ante quis tristique. Nunc quis efficitur nibh, vel
              accumsan urna. Mauris quam arcu, consectetur et suscipit a,
              lacinia vitae augue. Phasellus elementum a eros non dignissim.
              Fusce tristique et purus vitae aliquam. Nunc molestie accumsan
              euismod. Nullam pellentesque leo in diam faucibus fermentum id ut
              neque. Nulla facilisi. Nunc magna odio, laoreet a fringilla sit
              amet, rutrum ullamcorper purus. In hendrerit est id massa tempor,
              et maximus enim tristique. Fusce nec ante eget dui condimentum
              commodo id nec lorem.
              <br />
              In tincidunt dolor non volutpat viverra. Aliquam erat volutpat.
              Proin leo neque, dapibus eu iaculis in, feugiat quis nulla.
              Curabitur commodo, lectus ac rhoncus volutpat, diam nulla
              consectetur enim, quis fermentum nunc enim ut tortor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Pellentesque mi massa, vestibulum sed elit vitae, vestibulum
              dignissim justo. Mauris gravida hendrerit augue, at interdum ante
              dictum non. Maecenas pulvinar augue sodales ex sagittis auctor.
              Donec tincidunt dictum ante, vitae rhoncus metus.
              <br />
              Sed vitae blandit urna. Nullam sem augue, maximus at ex non,
              bibendum facilisis justo. Duis vulputate mi a porta mattis. Duis a
              neque eu felis lacinia pharetra. Donec vitae ipsum ac purus
              finibus accumsan. Ut ex turpis, bibendum non vehicula vel,
              lobortis eu ipsum. Quisque maximus erat at cursus porta. Aliquam
              porttitor commodo orci id tempor. Nullam tincidunt lorem quis
              libero posuere lobortis. Aenean faucibus, sem a congue dapibus,
              nunc leo mollis augue, vel lobortis purus felis eget velit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Suspendisse mattis id turpis bibendum aliquet. Duis a ligula
              feugiat odio maximus dictum. Donec ac nisl neque. Phasellus
              tristique ornare scelerisque. Vestibulum vehicula enim nec tempor
              accumsan. Nulla facilisi. Pellentesque magna lorem, posuere non
              porta semper, iaculis a dui. Aenean molestie dui ac dolor egestas
              fermentum. Fusce ultrices dictum ipsum. Donec at orci sem. Etiam
              tempus turpis et tincidunt eleifend. Sed iaculis aliquet
              imperdiet. Integer non tellus ullamcorper, tempus mi sed,
              malesuada tellus. In eleifend venenatis nulla. Phasellus quis
              velit eget nulla aliquet ultrices.
            </div>
          </div>
          <div className="mt-11 text-3xl font-medium text-indigo-600 max-md:mt-10 max-md:max-w-full">
            Program
          </div>
          <div className="flex gap-5 justify-between mt-6 text-base whitespace-nowrap max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-5 mb-5 text-base whitespace-nowrap max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
            <div className="flex flex-col flex-1 px-3 pt-12 pb-3.5 bg-white rounded-xl shadow-[0px_4px_4px_rgba(77.00000301003456,77.00000301003456,255,1)]">
              <div className="mt-24 text-xl text-orange-400 max-md:mt-10">
                คณะ..
              </div>
              <div className="mt-5 text-yellow-400">จำนวน....สาขา</div>
              <div className="justify-center px-3 py-2.5 mt-3.5 text-white bg-indigo-600 rounded-xl">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;