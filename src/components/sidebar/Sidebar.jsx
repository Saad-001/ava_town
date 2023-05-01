import Category from "./Category";
import GenerateFilters from "./GenerateFilters";
import {
  autoUploadSupportData,
  contentFilterData,
  polygonAmountData,
  priceFilterData,
} from "./filterData";

const Sidebar = () => {
  return (
    <div className="w-1/5 pl-2">
      <div>
        <h3 className="text-xl font-semibold">Category</h3>
        <Category />
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-3">Contents</h3>
        <ul className="list-inside pl-4">
          {contentFilterData.map((data) => (
            <GenerateFilters data={data} key={data.id} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-3">Price</h3>
        <ul className="list-inside pl-4">
          {priceFilterData.map((data) => (
            <GenerateFilters data={data} key={data.id} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-3">Polygon amount</h3>
        <ul className="list-inside pl-4">
          {polygonAmountData.map((data) => (
            <GenerateFilters data={data} key={data.id} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-3">Auto upload support</h3>
        <ul className="list-inside pl-4">
          {autoUploadSupportData.map((data) => (
            <GenerateFilters data={data} key={data.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
