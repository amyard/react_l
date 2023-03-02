import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {
    return (
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
    )
}

export default TeamMemberCard;