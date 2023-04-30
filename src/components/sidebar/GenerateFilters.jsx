const GenerateFilters = ({ data }) => {
  const { id, title } = data;
  return (
    <>
      <li className="py-1">
        <label htmlFor={id} className="flex items-center">
          <input
            id={id}
            type="checkbox"
            className="form-checkbox h-3 w-3 text-indigo-600"
          />
          <span className="ml-2 text-sm font-semibold">{title}</span>
        </label>
      </li>
    </>
  );
};

export default GenerateFilters;
