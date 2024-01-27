import * as React from "react";

function Admin(props) {
  return (
    <div className="bg-white pr-2">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
          <div className="border-r-[color:var(--line,#D9D9D9)] bg-white flex w-full grow flex-col items-stretch mx-auto py-12 border-r border-solid">
            <div className="flex items-stretch justify-between gap-2.5 px-5">
              <div className="flex w-[68px] shrink-0 h-[65px] flex-col rounded-[50%]" />
              <div className="text-black text-center text-2xl font-bold my-auto">
                Chain Of <br />
                Trust
              </div>
            </div>
            <div className="justify-between items-stretch bg-neutral-200 bg-opacity-50 flex gap-5 mt-9 px-9 py-4 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad02e9840ad69dfdad7a74b7fa290ac3d047d057bf6eecfc4ca5a43cc14a9f1?"
                className="aspect-[1.33] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-sm self-start">Dashboard</div>
            </div>
            <div className="flex flex-col mt-4 mb-96 px-10 max-md:mb-10 max-md:px-5">
              <div className="self-stretch flex items-stretch justify-between gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc4c14cf2c0b65e6cfa51f708d673190d7db44137cf64d322fe5f012d502022?"
                  className="aspect-[1.33] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-sm self-center my-auto">
                  Staff
                </div>
              </div>
              <div className="self-center flex gap-4 mt-8 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fbd31e239d0fa8717348b08b4cbf1e22fe44febcd66e0080f7ca80a4f249d4d?"
                  className="aspect-[1.8] object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-sm self-stretch">
                  Property
                  <br />
                </div>
              </div>
              <div className="self-stretch flex justify-between gap-5 mt-8 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69d393a7597680d9ab82d374a25ad98a83cc51cf6fe95ad157daf668be3c79b4?"
                  className="aspect-[1.33] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-sm mt-1">Request</div>
              </div>
              <div className="flex gap-4 ml-3.5 mt-8 self-start items-start max-md:ml-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97bb291dd16f955189c716aaf968527a2ad60cebf0190f374b86e9d57b4caa98?"
                  className="aspect-[1.93] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-sm">Department</div>
              </div>
              <div className="self-center flex gap-4 mt-8 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceee87204e3e65e2d8871851862747793012e2ffd76d779d0b9c5b29536d1c52?"
                  className="aspect-[1.54] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-sm mt-1">Category</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-1.5 max-md:max-w-full">
            <div className="border-b-[color:var(--line,#D9D9D9)] bg-white flex w-full justify-between gap-5 pt-2.5 pb-6 px-3.5 border-b border-solid items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="items-stretch content-center flex-wrap bg-zinc-900 bg-opacity-10 flex gap-2 mt-3 px-2 py-2 rounded-md max-md:max-w-full">
                <div className="items-stretch content-center flex-wrap flex justify-between gap-1 rounded-lg max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca47a23ff7fc50d577b5bec0e920dffe5cc9d8e75625490df545fc649001109?"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-zinc-900 text-opacity-20 text-xs leading-4 grow self-start max-md:max-w-full">
                    Search
                  </div>
                </div>
                <div className="text-zinc-900 text-opacity-20 text-xs leading-4 grow whitespace-nowrap self-start">
                  ⌘/
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/685c4890d5ca7c7cbc2a45dcf5fe8938922e7112b9910a0658f14f3002f6b333?"
                className="aspect-[1.04] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full mt-3"
              />
              <div className="text-black text-center text-base leading-4">
                Organization
                <br />
                Name{" "}
              </div>
            </div>
            <div className="flex flex-col mt-8 px-10 items-start max-md:max-w-full max-md:px-5">
              <div className="text-black text-center text-sm self-stretch max-md:max-w-full">
                Quick stat
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-8 pr-7 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch shadow-sm bg-white flex grow basis-[0%] flex-col px-4 py-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Total Property
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    450
                  </div>
                </div>
                <div className="items-stretch shadow-sm bg-white flex grow basis-[0%] flex-col px-4 py-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Available Property
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    400
                  </div>
                </div>
                <div className="items-stretch shadow-sm bg-white flex grow basis-[0%] flex-col px-4 py-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Assigned Property
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    450
                  </div>
                </div>
                <div className="items-stretch shadow-sm bg-white flex grow basis-[0%] flex-col px-4 py-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Pending Request
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    10
                  </div>
                </div>
              </div>
              <div className="text-black text-xs leading-3 self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                Request overview
              </div>
              <div className="flex justify-between gap-5 ml-5 mt-4 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col pt-5 pb-7 px-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Total Pending Request
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    4
                  </div>
                </div>
                <div className="items-stretch shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col pt-5 pb-7 px-5 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    Request Resolved
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    40
                  </div>
                </div>
                <div className="items-stretch shadow-sm bg-white flex grow basis-[0%] flex-col px-5 py-6 rounded-xl">
                  <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                    {" "}
                    Property Request
                  </div>
                  <div className="text-black text-base font-semibold leading-7 mt-1.5">
                    2
                  </div>
                </div>
              </div>
              <div className="text-black text-xs leading-3 self-stretch mt-9 max-md:max-w-full">
                Report
              </div>
              <div className="shadow-sm bg-white flex w-[85px] max-w-full flex-col items-stretch ml-12 mt-1.5 px-2.5 py-3 rounded-xl max-md:ml-2.5">
                <div className="text-zinc-900 text-xs leading-3 whitespace-nowrap">
                  Generate report
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[1.25] object-contain object-center w-[35px] overflow-hidden self-center max-w-full"
                />
              </div>
              <div className="w-[618px] max-w-full ml-2.5 mt-10 max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[85%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch bg-slate-50 flex w-full grow flex-col mx-auto pl-5 pr-9 pt-5 pb-12 rounded-xl max-md:mt-10 max-md:pr-5">
                      <div className="text-zinc-900 text-sm font-semibold leading-5 whitespace-nowrap">
                        Assets
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-3">
                        <div className="justify-between items-stretch flex basis-[0%] flex-col">
                          <div className="text-zinc-900 text-opacity-40 text-right text-xs leading-5 whitespace-nowrap">
                            100
                          </div>
                          <div className="text-zinc-900 text-opacity-40 text-right text-xs leading-5 whitespace-nowrap">
                            50
                          </div>
                          <div className="text-zinc-900 text-opacity-40 text-right text-xs leading-5 whitespace-nowrap">
                            25
                          </div>
                          <div className="text-zinc-900 text-opacity-40 text-right text-xs leading-5 whitespace-nowrap">
                            0
                          </div>
                        </div>
                        <div className="items-stretch flex grow basis-[0%] flex-col">
                          <div className="flex items-stretch justify-between gap-0">
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-12 px-3">
                              <div className="rounded-3xl bg-indigo-300 flex shrink-0 h-4 flex-col mt-3" />
                              <div className="bg-indigo-300 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-indigo-300 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-indigo-300 flex shrink-0 h-4 flex-col" />
                            </div>
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-4 px-3">
                              <div className="rounded-3xl bg-green-200 flex shrink-0 h-4 flex-col" />
                              <div className="bg-green-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-green-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-green-200 flex shrink-0 h-4 flex-col" />
                              <div className="bg-green-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-green-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-green-200 flex shrink-0 h-4 flex-col" />
                            </div>
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-12 px-3">
                              <div className="rounded-3xl bg-zinc-900 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-zinc-900 flex shrink-0 h-4 flex-col" />
                              <div className="bg-zinc-900 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-zinc-900 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-zinc-900 flex shrink-0 h-4 flex-col" />
                            </div>
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col px-3">
                              <div className="rounded-3xl bg-sky-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-4 flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-4 flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-sky-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-sky-200 flex shrink-0 h-4 flex-col" />
                            </div>
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-12 px-3">
                              <div className="rounded-3xl bg-indigo-300 flex shrink-0 h-[15px] flex-col mt-7" />
                              <div className="bg-indigo-300 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-indigo-300 flex shrink-0 h-4 flex-col" />
                            </div>
                            <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-8 px-3">
                              <div className="rounded-3xl bg-emerald-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-emerald-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-emerald-200 flex shrink-0 h-4 flex-col" />
                              <div className="bg-emerald-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="bg-emerald-200 flex shrink-0 h-[15px] flex-col" />
                              <div className="rounded-none bg-emerald-200 flex shrink-0 h-4 flex-col" />
                            </div>
                          </div>
                          <div className="items-stretch flex gap-0 mt-1.5">
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5 grow whitespace-nowrap">
                              computer
                            </div>
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5">
                              vehicle
                            </div>
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5">
                              land
                            </div>
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5">
                              Windows
                            </div>
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5">
                              Android
                            </div>
                            <div className="text-zinc-900 text-opacity-40 text-center text-xs leading-5 grow whitespace-nowrap">
                              Other
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[15%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff44cf3604222fcd1cfa8a167299e9f52934e585a0179153f54722b42ab97?"
                      className="aspect-[1.05] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
          <div className="border-l-[color:var(--line,#D9D9D9)] bg-white flex grow flex-col w-full pt-12 pb-6 px-3 border-l border-solid items-start">
            <div className="text-black text-center text-sm leading-4 whitespace-nowrap ml-3 max-md:ml-2.5">
              Recent Transaction
            </div>
            <div className="shadow-sm bg-white self-stretch flex w-full flex-col mt-3.5 pl-3 pt-6 pb-12 rounded-sm items-start">
              <div className="content-start flex-wrap flex gap-2 pl-2 pr-16 py-2 rounded-xl items-start max-md:pr-5">
                <div className="justify-center items-center bg-sky-100 flex aspect-square flex-col w-[18px] h-[18px] px-1 rounded-lg">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acbc987b090d4112b78c9d79b457e3c46d85cfe632a1b264a8c7a4b3d241628b?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col rounded-lg">
                  <div className="overflow-hidden text-zinc-900 text-ellipsis text-sm leading-5 whitespace-nowrap">
                    You fixed a bug.
                  </div>
                  <div className="text-zinc-900 text-opacity-40 text-xs leading-5 whitespace-nowrap">
                    Just now
                  </div>
                </div>
              </div>
              <div className="content-start flex-wrap flex gap-1.5 px-3 py-1.5 rounded-xl items-start">
                <div className="justify-center items-center bg-slate-200 flex aspect-[1.8823529411764706] flex-col pl-1 pr-5 py-1 rounded-md">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1e6d652cc2af93a43bd8b26bb1ee5025fc46fca23d039412e5111ae72d1b5d?"
                    className="aspect-square object-contain object-center w-[11px] overflow-hidden"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="overflow-hidden text-zinc-900 text-ellipsis text-sm leading-5">
                    New user registered.
                  </div>
                  <div className="text-zinc-900 text-opacity-40 text-xs leading-5">
                    59 minutes ago
                  </div>
                </div>
              </div>
              <div className="content-start flex-wrap flex gap-1.5 mt-2 px-3 py-1.5 rounded-xl items-start">
                <div className="justify-center items-center bg-sky-100 flex aspect-[1.8823529411764706] flex-col pl-1 pr-5 py-1 rounded-md">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c4e903551ce009c0fb239582ab4ba72d6167142b4912ffd2fcebd1779203fd9?"
                    className="aspect-square object-contain object-center w-[11px] overflow-hidden"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col rounded-md">
                  <div className="overflow-hidden text-zinc-900 text-ellipsis text-sm leading-5">
                    You fixed a bug.
                  </div>
                  <div className="text-zinc-900 text-opacity-40 text-xs leading-5">
                    12 hours ago
                  </div>
                </div>
              </div>
              <div className="content-start flex-wrap flex gap-2 mt-2 mb-20 px-3 py-2 rounded-xl items-start max-md:mb-10">
                <div className="justify-center items-center bg-slate-200 flex aspect-[1.3333333333333333] flex-col pl-1 pr-2.5 py-1 rounded-lg">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d414a9e54bf675c65b1f9f43c1ebade78a4df3536d206257e3043cbe8a60b52?"
                    className="aspect-square object-contain object-center w-3 overflow-hidden"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col rounded-lg">
                  <div className="overflow-hidden text-zinc-900 text-ellipsis text-sm leading-5">
                    Andi Lane subscribed to you.
                  </div>
                  <div className="text-zinc-900 text-opacity-40 text-xs leading-5">
                    Today, 11:59 AM
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.10000000149011612)] self-stretch flex w-full flex-col items-stretch mt-3 pl-1 pr-6 py-12 rounded-sm max-md:pr-5">
              <div className="flex items-stretch justify-between gap-3.5">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="flex flex-col items-stretch pl-14 max-md:pl-5">
                    <div className="text-zinc-800 text-sm font-bold">
                      Maintenance
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12f8a40ff6815384bf340b0eb307b8467233da453a9ebd06089ddead84e214e?"
                      className="aspect-[1.21] object-contain object-center w-[98px] overflow-hidden self-center mt-14 max-md:mt-10"
                    />
                  </div>
                  <div className="flex justify-between gap-3.5 mt-12 items-start max-md:mt-10">
                    <div className="bg-rose-400 flex w-3.5 shrink-0 h-2.5 flex-col rounded-sm" />
                    <div className="text-zinc-800 text-sm self-stretch grow whitespace-nowrap">
                      Pending
                    </div>
                  </div>
                </div>
                <div className="text-zinc-800 text-xs font-semibold grow whitespace-nowrap mt-48 self-end max-md:mt-10">
                  123,456
                </div>
              </div>
              <div className="flex w-full justify-between gap-5 mt-2 mb-20 items-start max-md:mb-10">
                <div className="flex gap-3.5 items-start">
                  <div className="bg-cyan-300 flex w-3.5 shrink-0 h-[9px] flex-col rounded-sm" />
                  <div className="text-zinc-800 text-sm self-stretch">
                    Resolved
                  </div>
                </div>
                <div className="text-zinc-800 text-xs font-semibold">
                  100,789
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Admin;
