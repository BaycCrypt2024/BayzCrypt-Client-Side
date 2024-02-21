import React from 'react'
import { FaGgCircle } from "react-icons/fa"
import { useState } from 'react'

const ChangeAccount = () => {
  const [userRole, setUserRole] = useState("")
  return (
    <div>
        <form>
          <FaGgCircle size={20}/>
            <select value={userRole} onChange={(e => setUserRole(e.target.value))}>
                <option value="Account">Account</option>
                {/* <button>Search</button>
                <option value="subscriber">✅Subscriber</option>
                <option value="author">Verified</option>
                <option value="admin">Unverified</option>
                <option value="suspended">Suspended</option> */}
            </select>
        </form>
    </div>
  )
}

export default ChangeAccount