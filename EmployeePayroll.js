class EmployeePayRollUc11
{
//property
id;
salary;

//constructor
constructor(id,name,salary)
{
this.id=id;
this.name=name;
this.salary=salary;
}

//getter and setter method
get name()
{
return this._name;
}
set name(name)
{
this._name=name;
}

//method
toString()
{
return "id="+this.id+",name='"+this.name+",salary="+this.salary;
}
}
let employeePayRollUc11 = new EmployeePayRollUc11(1,"Ankita",30000);
console.log(employeePayRollUc11.toString());
employeePayRollUc11.name="Ankita";
console.log(employeePayRollUc11.toString());
