import React from "react";
import Review from "../review/Review";
import Table from "../table/Table";

const Tabs = ({ avatarData }) => {
  const [openTab, setOpenTab] = React.useState(1);

  const bg_color = {
    background: "rgb(57,28,132)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "linear-gradient(90deg, rgba(57,28,132,1) 21%, rgba(92,30,135,1) 44%, rgba(119,31,138,1) 100%)",
  };

  const bg_white = {
    background: "white",
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                href="#link1"
                className={`text-sm font-bold rounded-sm uppercase px-5 py-3 block leading-normal
                  ${openTab === 1 ? "text-white" : "text-[#601e87]"}`}
                style={openTab === 1 ? bg_color : bg_white}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Description
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-sm font-bold rounded-sm uppercase px-5 py-3 block leading-normal
                ${openTab === 2 ? "text-white" : "text-[#601e87]"}`}
                style={openTab === 2 ? bg_color : bg_white}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Specification
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-sm font-bold rounded-sm uppercase px-5 py-3 block leading-normal
                ${openTab === 3 ? "text-white" : "text-[#601e87]"}`}
                style={openTab === 3 ? bg_color : bg_white}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border-2 border-[#601e87] rounded-sm">
            <div className="px-16 py-10 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1 className="text-3xl text-[#601e87] font-semibold mb-5">
                    Avatar Full Description
                  </h1>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas fermentum, diam non iaculis finibus, ipsum arcu
                    sollicitudin dolor, ut cursus sapien sem sed purus. Donec
                    vitae fringilla tortor, sed fermentum nunc. Suspendisse
                    sodales turpis dolor, at rutrum dolor tristique id. Quisque
                    pellentesque ullamcorper felis, eget gravida mi elementum a.
                    Maecenas consectetur volutpat ante, sit amet molestie urna
                    luctus in. Nulla eget dolor semper urna malesuada dictum.
                    Duis eleifend pellentesque dui et finibus. Pellentesque
                    dapibus dignissim augue. Etiam odio est, sodales ac aliquam
                    id, iaculis eget lacus. Aenean porta, ante vitae suscipit
                    pulvinar, purus dui interdum tellus, sed dapibus mi mauris
                    vitae tellus.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1 className="text-3xl text-[#601e87] font-semibold mb-5">
                    Specification
                  </h1>
                  <Table avatarData={avatarData} />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Review />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
