"use client";
import React, { useState, useEffect } from "react";

function page({ handleClick }: any) {
  const [staffList, setStaffList] = useState<any[]>([]);
  const [details, setDetails] = useState({
    name: "",
    age: 18,
    role: "",
    salary: "",
    experience: "",
    tax: ""
  });

  const [totalsalary, setTotalsalary] = useState<number>(0);
  const [salary, setSalary] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  useEffect(() => {
    setTotalsalary(salary - tax);
  }, [salary, tax]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addStaff = (e: any) => {
    e.preventDefault();
    setStaffList([...staffList, { ...details, totalsalary }]);
    setDetails({ name: "", age: 18, role: "", salary: "", experience: "", tax: "" });
    setSalary(0);
    setTax(0);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Personal Details</h1>
      <form onSubmit={addStaff} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg shadow-md bg-gray-50">

        <div className="space-y-4">

          <label>Name: </label>
          <input type="text" name="name" placeholder="Name" value={details.name} onChange={handleChange} className="w-full p-2 border rounded" />
          
          <label>Age: </label>
          <input type="number" name="age" placeholder="Age" value={details.age} onChange={handleChange} className="w-full p-2 border rounded" />
          
          <label>Role: </label>
          <input type="text" name="role" placeholder="Role" value={details.role} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>


        <div className="space-y-4">
          <h1 className='text-2xl font-semibold'>Salary Details</h1>
          
          <label>Salary: </label>
          <input type="number" name="salary" placeholder="Salary" value={details.salary} onChange={(e) => { setSalary(Number(e.target.value)); handleChange(e); }} className="w-full p-2 border rounded" />
          
          <label>Experience: </label>
          <input type="number" name="experience" placeholder="Years" value={details.experience} onChange={handleChange} className="w-full p-2 border rounded" />
          
          <label>Tax: </label>
          <input type="number" name="tax" placeholder="Tax" value={details.tax} onChange={(e) => { setTax(Number(e.target.value)); handleChange(e); }} className="w-full p-2 border rounded" />
          
          <h3 className='text-lg font-semibold'>Total Salary: {totalsalary}</h3>

        </div>

        <button type="submit" className="col-span-1 md:col-span-2 mt-4 p-2 bg-red-500 text-white rounded">Add Staff</button>
      </form>

      
    </div>
  );
}

export default page;