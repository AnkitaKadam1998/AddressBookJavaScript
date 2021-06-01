class EmployeePayRollRegex
{
//property
id;
salary;
gender;

//constructor

constructor(...params)
{
this.id=params[0];
this.name=params[1];
this.salary=params[2];
this.gender=params[3];
}

//getter and setter method
get name()
{
return this._name;
}
set name(name)
{
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
                this._name=name;
        else throw "Name is Incorrect";
}

//method
toString()
{
        return "id="+this.id+",name='"+this.name+",salary="+this.salary+","+"gender="+this.gender;
}
}
let employeePayRollRegex= new EmployeePayRollRegex(1,"Ankita",33000,"F");
console.log(employeePayRollRegex.toString());
try
{
        employeePayRollRegex.name="ankita";
        console.log(employeePayRollRegex.toString());
}catch(e)
{
        console.error(e);
}
let newEmployeePayRollRegex = new EmployeePayRollRegex(1,"sanket",35000,"M");
console.log(newEmployeePayRollRegex.toString());
