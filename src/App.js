import Employee from './components/Employee'
import { useState } from 'react'

function App() {
  const showEmployees = true
  const [role, setRole] = useState('GIS Analyst')
  return (
    <div className="App">
      <main>
        {showEmployees ? (
          <>
            <input
              type="text"
              placeholder="Type here..."
              value={role}
              onChange={(e) => {
                console.log('Input changed')
                console.log(e.target.value)
                setRole(e.target.value)
              }}
            />
            <Employee name="Alice" role="Developer" />
            <Employee name="Bob" role="Designer" />
            <Employee name="Charlie" role="Manager" />
            <Employee name="Diana" role="QA" />
            <Employee name="Ethan" role="Support" />
            <Employee name="Fiona" exp="Intern" />
            <Employee name="Emeka" role={role} exp="Senior" />
          </>
        ) : (
          <h3>No employees to show</h3>
        )}
      </main>
    </div>
  )
}
export default App
