import FilterInput from "./FilterInput";
import "./Filter.css";

const Filter = (props) => {
  return (
    <>
      <div className="filter-container">
        <h4>Filter By</h4>
        <div>
          <FilterInput
            title="Filter Type"
            data={["Season", "Team"]}
            onFilter={props.onFilter}
            value={props.filterParameter}
          />
          <FilterInput
            title="Filter Value"
            data={
              props.filterParameter.length !== 0
                ? props.filterParameter === "Season"
                  ? props.data.seasons
                  : props.data.teams
                : null
            }
            onFilter={props.onFilterValue}
            value={props.filterValue}
          />
        </div>
      </div>
      <div className="filter-head">
        Currently Showing Data For:{" "}
        <span>{`${props.filterParameter === "Season" ? "Season" : ""} ${
          props.filterValue
        }`}</span>
      </div>
    </>
  );
};
export default Filter;
