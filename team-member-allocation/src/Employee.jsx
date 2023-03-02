import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employee = ({employee, selectedTeam, handleTeamSelectedChange, handleEmployeeCardClick}) => {
    
    
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select name="" id="" className="form-select form-select-lg" 
                            value={selectedTeam} onChange={handleTeamSelectedChange} >
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            
            
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employee.map((employee) => (
                                <div className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2")} 
                                    id={employee.id} style={{cursor: "pointer"}} key={employee.id} 
                                    onClick={handleEmployeeCardClick}>
                                    {(employee.gender === 'male')
                                        ? <img src={maleProfile} className="card-img-top" alt="" />
                                        : <img src={femaleProfile} className="card-img-top" alt="" />
                                    }
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Full name: {employee.fullName}
                                        </h5>
                                        <p className="card-text">
                                            <b>Designation:</b> {employee.designation}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employee;