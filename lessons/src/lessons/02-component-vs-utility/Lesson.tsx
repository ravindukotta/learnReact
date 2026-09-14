// Lesson 2: Component vs Utility Function
//
// The component's job: render UI. It calls plain (non-React) functions from
// utils.ts to do data work — formatting and filtering — instead of doing
// that logic inline in JSX.

import { formatCurrency, filterInStock, type Product } from './utils'

const products: Product[] = [
  { id: '1', name: 'Keyboard', price: 49.99, inStock: true },
  { id: '2', name: 'Monitor', price: 199.5, inStock: false },
  { id: '3', name: 'Mouse', price: 24.0, inStock: true },
]

export default function Lesson02ComponentVsUtility() {
  const available = filterInStock(products)

  return (
    <div>
      <h2>Component vs Utility Function</h2>
      <p>Question: What belongs in a React component vs a utility function?</p>
      <div className="answer">
        Answer: A component handles rendering UI and state/effects tied to
        that UI. Pure data transformations (formatting, filtering, math)
        belong in utility modules — reusable and testable independently of
        React.
      </div>

      <div className="demo">
        <p>
          <code>formatCurrency</code> and <code>filterInStock</code> live in{' '}
          <code>utils.ts</code> — no React, no JSX, no hooks. This component
          only renders.
        </p>
        <ul>
          {available.map((product) => (
            <li key={product.id}>
              {product.name} — {formatCurrency(product.price)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
