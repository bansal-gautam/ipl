import "./FilterInput.css";

const FilterInput = (props) => {
  const changeHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <select
      className=" filter-input"
      value={props.value}
      onChange={changeHandler}
    >
      <option value="TITLE" disabled>
        {props.title}
      </option>
      {props.data
        ? props.data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))
        : null}
    </select>
  );
};
export default FilterInput;
