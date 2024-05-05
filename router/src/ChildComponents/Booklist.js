import React from 'react'
import { Link, Outlet, useNavigate ,useSearchParams} from 'react-router-dom'
function Booklist() {
   const navigate= useNavigate()
   const [searchParams,setSearchParams]=useSearchParams({n:7})
   let number=searchParams.get('n')
   const navigateToBack=()=>{
    navigate(-1)
   }
  return (
    <div>
      This is Booklist Component
      <ul>
      <li>
          <Link replace to='/books/1'> Book 1</Link>
          </li>
          <br></br>
          <li>
          <Link to='/books/2'> Book 2</Link>
          </li>
          <br></br>
          <li>
          <Link to='/books/new'> New Book</Link>
          </li>
          <br></br>
          <li>
          <Link to={`/books/${number}`}>Search Params for Book</Link>
          </li>
          <br></br>
          <Outlet context={{testContext: 'This component is outlet and nested'}}></Outlet>
          <br></br>
          <button onClick={navigateToBack}>Go Back</button>
          <br></br>
          <input type='number' onChange={(e)=>setSearchParams({n:e.target.value,s:7})}/>
      </ul>
    </div>
  )
}

export default Booklist
