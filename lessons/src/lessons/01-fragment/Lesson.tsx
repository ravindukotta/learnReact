// Lesson 1: React Fragment
//
// A component can only return ONE root element (or one array/Fragment).
// If you don't want an extra wrapper <div> polluting your HTML/CSS
// (e.g. breaking a CSS Grid/Flex layout), use a Fragment: <>...</>

function WithDiv() {
  return (
    <div>
      <li>Item A</li>
      <li>Item B</li>
    </div>
  )
}

function WithFragment() {
  return (
    <>
      <li>Item A</li>
      <li>Item B</li>
    </>
  )
}

export default function Lesson01Fragment() {
  return (
    <div>
      <h2>React Fragment</h2>
      <p>
        Question: What is a React Fragment?
      </p>
      <div className="answer">
        Answer: An empty tag <code>&lt;&gt;&lt;/&gt;</code> that groups
        children without adding an extra node to the DOM.
      </div>

      <div className="demo">
        <p>Open devtools and inspect the two lists below.</p>

        <p><strong>Using a wrapping &lt;div&gt;</strong> (invalid HTML here — a div can't be a child of ul):</p>
        <ul>
          <WithDiv />
        </ul>

        <p><strong>Using a Fragment</strong> (clean, valid HTML):</p>
        <ul>
          <WithFragment />
        </ul>
      </div>

      <p style={{ marginTop: '1rem', color: '#8a8f9e' }}>
        Try it: change <code>WithDiv</code> to render 3 items instead of 2, and
        add a <code>key</code> prop practice in the next lesson.
      </p>
    </div>
  )
}
