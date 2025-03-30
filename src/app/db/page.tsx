import React from 'react'

async function Database() {
    let data=await fetch('http://localhost:5000/post')
    let posts=await data.json();
    

  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {posts.map((post :any, index:any) => (
          
          <div key={index} className="border p-6 shadow-md rounded-lg bg-white text-center flex flex-col items-center justify-center">

            <p><strong>Name:</strong> {post.name}</p>
            <p><strong>Age:</strong> {post.age}</p>
            <p><strong>Role:</strong> {post.role}</p>
            <p><strong>Salary:</strong> {post.salary}</p>
            <p><strong>Experience:</strong> {post.experience}</p>
            <p><strong>Tax:</strong> {post.tax}</p>
            <p><strong>Total Salary:</strong> {(post.salary -post.tax)}</p>
           

          </div>
        )
        
        )
        
        }
      </div>
  </div>
  )
}

export default Database