
const Teams = ({selectedTeam, handleTeamSelectedChange}) => {
    return (
        <select name="" id="" className="form-select form-select-lg"
                value={selectedTeam} onChange={handleTeamSelectedChange} >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
        </select>
    )
}

export default Teams;