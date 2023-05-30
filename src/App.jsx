import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import MatchContainer from "./components/Match/MatchContainer";
import Scroll from "./components/Footer/Scroll";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterParameter, setFilterParameter] = useState("Season");
  const [filterValue, setFilterValue] = useState(2008);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/RudarDaman/12e265c67c8d8348e83ed278549176ec/raw/bcba538f22bfc952b0e294f8fb7099f3b6983f99/matches.json"
      );
      const result = await response.json();
      setData(result);
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  useEffect(() => {
    if (filterParameter === "Season") {
      setFilterValue(2008);
    }
    if (filterParameter === "Team") {
      setFilterValue("Kolkata Knight Riders");
    }
  }, [filterParameter]);

  useEffect(() => {
    let newData;
    if (filterParameter === "Season") {
      newData = data.filter((item) => item.season === filterValue);
    }
    if (filterParameter === "Team") {
      newData = data.filter(
        (item) => item.team1 === filterValue || item.team2 === filterValue
      );
    }
    setFilteredData(newData);
  }, [filterParameter, filterValue, data]);

  const onFilter = (value) => {
    setFilterParameter(String(value));
  };

  const onFilterValue = (value) => {
    if (filterParameter === "Season") {
      setFilterValue(Number(value));
    }
    if (filterParameter === "Team") {
      setFilterValue(String(value));
    }
  };

  const seasons = [...new Set(data.map((obj) => obj["season"]))];
  const teams = [...new Set(data.map((obj) => obj["team1"]))];
  return (
    <>
      <Header />
      <Filter
        data={{ seasons, teams }}
        onFilter={onFilter}
        filterParameter={filterParameter}
        onFilterValue={onFilterValue}
        filterValue={filterValue}
      />
      <MatchContainer data={filteredData} />
      <Scroll />
    </>
  );
};

export default App;
