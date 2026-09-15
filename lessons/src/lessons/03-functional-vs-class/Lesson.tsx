// Lesson 3: Functional vs Class Components
//
// Same counter, built two ways. Open devtools console and click both
// buttons — notice the setState/useState calls do the same job, and
// componentDidMount / useEffect(..., []) both fire once on mount.

import ClassCounter from './ClassCounter'
import FunctionalCounter from './FunctionalCounter'

export default function Lesson03FunctionalVsClass() {
  return (
    <div>
      <h2>Functional vs Class Components</h2>
      <p>Question: What are the main differences between functional and class components?</p>
      <div className="answer">
        Answer: Class components use lifecycle methods (componentDidMount,
        etc.) and this.state, while functional components use hooks
        (useState, useEffect) for state and side-effects. Functional
        components are simpler, encourage smaller units, and avoid issues
        with `this`.
      </div>

      <div className="demo">
        <h3>Class component</h3>
        <ClassCounter />
      </div>

      <div className="demo">
        <h3>Functional component (equivalent)</h3>
        <FunctionalCounter />
      </div>
    </div>
  )
}
