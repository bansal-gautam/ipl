import TeamInfo from "./TeamInfo";
import "./Match.css";

const Match = ({ data }) => {
  const getDate = (value) => {
    const [day, month, year] = value.split("-");
    const jsDate = new Date(`20${year}-${month - 1}-${day}`);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return jsDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className="match-card">
      <h6 className="match-date">{getDate(data.date)}</h6>
      <p className="match-venue">{`${data.venue}, ${data.city}`}</p>
      <div className="team-names">
        <TeamInfo title={data.team1} team={1} />
        <p>vs</p>
        <TeamInfo title={data.team2} team={2} />
      </div>
      <div className="toss">
        <p>
          <strong>Toss:</strong> {data.toss_winner}
        </p>
        <p>
          <strong>Decison:</strong>{" "}
          {data.toss_decision === "bat" ? "Bat" : "Field"} first
        </p>
      </div>
      <div className="result">
        {data.result === "normal" && (
          <h6>
            {data.winner} won by{" "}
            {data.win_by_wickets !== 0
              ? `${data.win_by_wickets} wickets`
              : `${data.win_by_runs} runs`}{" "}
            {data.dl_applied === 1 && "(DLS Method)"}
          </h6>
        )}
        {data.result === "tie" && <h6>Match Tied</h6>}
        {data.result === "no result" && <h6>No Result</h6>}
      </div>
      <div className="player-of-match">
        Player of the match: {data.player_of_match}
      </div>
      <div className="umpires">
        <h6>Umpires</h6>
        <div className="umpires-container">
          <div>Umpire 1 - {data.umpire1}</div>
          <div>Umpire 2 - {data.umpire2}</div>
        </div>
      </div>
    </div>
  );
};
export default Match;
