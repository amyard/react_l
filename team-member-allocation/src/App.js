import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from "./Employee";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
    // get value from localStorage or default value
    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB");
    const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem("employeeList")) ||  [
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
    
    useEffect(() => {
        localStorage.setItem("employeeList", JSON.stringify(employee))
    }, [employee]);

    useEffect(() => {
        localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))
    }, [selectedTeam]);
    
  return (
    <Router>
        <Nav />
        <Header selectedTeam={selectedTeam}
              teamMemberCount = {employee.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path="/"
                element={<Employee employee={employee} selectedTeam={selectedTeam}
                                   handleTeamSelectedChange={handleTeamSelectedChange}
                                   handleEmployeeCardClick={handleEmployeeCardClick} />}>
          </Route>  
          <Route path="/GroupedTeamMembers" 
                 element={<GroupedTeamMembers employees={employee} selectedTeam={selectedTeam}
                                              setTeam={setTeam}/>}>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
