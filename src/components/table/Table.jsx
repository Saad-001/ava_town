const Table = ({ avatarData }) => {
  const { title, price, gender, category } = avatarData;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Avatar Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
            >
              {title}
            </td>
            <td className="px-6 py-4 text-gray-600 font-medium">{category}</td>
            <td className="px-6 py-4 text-gray-600 font-medium">{gender}</td>
            <td className="px-6 py-4 text-gray-600 font-medium">${price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
