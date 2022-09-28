const Account = require('./employees')
 class employees extends Data{
    
 }
let display_Employees = () => {
    let rows = ""
    for (let i = 0; i <= employees.length - 1; i++) {
        rows = rows + `<tr>
        
                <td>${employees[i].id}</td>
                <td>${employees[i].name}</td>
                <td>${employees[i].email}</td>
                    </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}
display_Employees()