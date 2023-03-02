import Teams from "./Teams";
import TeamMembers from "./TeamMembers";

const Employee = ({employee, selectedTeam, handleTeamSelectedChange, handleEmployeeCardClick}) => {
    
    
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleTeamSelectedChange={handleTeamSelectedChange} />
                </div>
            </div>
            
            
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        <TeamMembers 
                            employees={employee}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            selectedTeam={selectedTeam} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employee;