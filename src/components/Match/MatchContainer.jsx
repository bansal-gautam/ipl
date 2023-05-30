import Match from "./Match";

const MatchContainer = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Match key={item.id} data={item} />
      ))}
    </div>
  );
};
export default MatchContainer;
