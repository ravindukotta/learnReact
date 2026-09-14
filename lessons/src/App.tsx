import { useState } from 'react'
import { lessons } from './lessons/registry'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(lessons[0].id)
  const active = lessons.find((l) => l.id === activeId) ?? lessons[0]
  const ActiveComponent = active.Component

  return (
    <div className="app-shell">
      <nav className="sidebar">
        <h1>React Lessons</h1>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                className={lesson.id === activeId ? 'active' : ''}
                onClick={() => setActiveId(lesson.id)}
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <ActiveComponent />
      </main>
    </div>
  )
}

export default App
