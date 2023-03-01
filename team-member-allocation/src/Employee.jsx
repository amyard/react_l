﻿import {useState} from "react";
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employee = () => {
    const [selectedTeam, setTeam] = useState("TeamB");
    const [employee, setEmployee] = useState([
    {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }]);
    
    function handleTeamSelectedChange(event) {
        setTeam(event.target.value)
    }
    
    function handleEmployeeCardClick(event) {
        const transformedEmployee = employee.map((employee) => employee.id === parseInt(event.currentTarget.id)
            ? (employee.teamName === selectedTeam) ? {...employee, teamName:''} : {...employee, teamName:selectedTeam}
            : employee
        );
        
        setEmployee(transformedEmployee);
    }
    
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