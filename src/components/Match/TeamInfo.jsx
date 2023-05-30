import "./TeamInfo.css";

const TeamInfo = (props) => {
  const imageSelector = (title) => {
    const word = title.split(" ")[0];
    return word;
  };
  return (
    <div className="team-info">
      <img
        src={`/src/assets/images/${imageSelector(props.title)}.png`}
        width={24}
      />
      <h6>{props.title}</h6>
    </div>
  );
};
export default TeamInfo;
