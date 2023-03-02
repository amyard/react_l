import {useState} from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    
    function groupTeamMembers() {
        let teams = [];
        let teamNames = ['TeamA','TeamB','TeamC','TeamD'];
        
        teamNames.map((teamName) => {
            let teamMembers = employees.filter((employee) => employee.teamName === teamName);
            let team = { team: teamName, members: teamMembers, collapsed: selectedTeam !== teamName };
            teams.push(team);
        })
        
        return teams;
        
        // let teamName = 'TeamA';
        // let teamMembers = employees.filter((employee) => employee.teamName === teamName);
        // let team = { team: teamName, members: teamMembers, collapsed: selectedTeam !== teamName };
        // teams.push(team);
        //
        // teamName = 'TeamB';
        // teamMembers = employees.filter((employee) => employee.teamName === teamName);
        // team = { team: teamName, members: teamMembers, collapsed: selectedTeam !== teamName };
        // teams.push(team);
        //
        // teamName = 'TeamC';
        // teamMembers = employees.filter((employee) => employee.teamName === teamName);
        // team = { team: teamName, members: teamMembers, collapsed: selectedTeam !== teamName };
        // teams.push(team);
        //
        // teamName = 'TeamD';
        // teamMembers = employees.filter((employee) => employee.teamName === teamName);
        // team = { team: teamName, members: teamMembers, collapsed: selectedTeam !== teamName };
        // teams.push(team);
    }
    
    function handleTeamClick(event) {
        var transformedGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
                                                                                ? {...groupedData, collapsed: !groupedData.collapsed}
                                                                                : groupedData);
         setGroupedData(transformedGroupedData);
         setTeam(event.currentTarget.id);
    }
    
    return (
        <header className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card mt-2" style={{cursor:'pointer'}}>
                            <h4 id={item.team} className="card-header text-secondary bg-warning"
                                onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_"+item.team} className={item.collapsed ? "collapse" : ""}>
                                <hr/>
                                {
                                    item.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </header>
    )
}

export default GroupedTeamMembers;