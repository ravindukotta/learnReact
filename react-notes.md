# React & JS/TS Notes

## Basic

### What is the use of package-lock.json?
It is a snapshot of dependencies (and their sub-dependencies) that locks their exact versions.

### What is a React Fragment?
An empty tag `<></>` used to group children without adding an extra DOM node.

### What is the use of the `key` prop?
A unique identifier (string or number) that helps React distinguish elements in a list.

---

## Component Structure

### What belongs in a React component vs a utility function?
A React component should handle rendering UI and managing state/effects that directly influence that UI. Pure data transformations (like formatting dates, math operations, or API helpers) belong in utility modules so they can be reused and tested independently.

### What are the main differences between functional and class components?
Class components use lifecycle methods (`componentDidMount`, etc.) and `this.state`, while functional components use hooks (`useState`, `useEffect`) for state and side-effects. Functional components are simpler, encourage smaller units, and avoid issues with `this`.

### How do you typically organize files/folders in a React project?
Many prefer feature-based structure: each feature has its own folder with component, styles, tests, and hooks. This scales better than grouping by type because related code lives together.

---

## Local State Management

### When would you use useState vs useReducer?
`useState` is best for simple or independent values (e.g., toggle, input field). `useReducer` is better when state transitions are complex, involve multiple fields, or need a predictable state machine.

### Why should React state be treated as immutable?
React relies on object identity to detect changes. If you mutate state directly, React might not re-render. By creating new objects/arrays (`...spread`, `concat`, etc.), React sees that the reference has changed and triggers updates.

### What's the risk of duplicating derived state?
If you store both raw data and derived values (like `count` and list length), they can get out of sync. Derived state should be calculated on render (`items.length`) or memoized with `useMemo`.

---

## Hooks

### Explain dependency arrays in useEffect.
The array tells React when to re-run the effect. If it's empty (`[]`), it only runs on mount/unmount. If dependencies are included, React re-runs when those values change. Missing dependencies can cause stale closures or bugs.

### When should you use useMemo and useCallback?
Use `useMemo` for expensive calculations so they're not re-run unnecessarily. Use `useCallback` to memoize functions so child components relying on referential equality don't re-render.

### What are common pitfalls with useEffect?
Forgetting cleanup (leaks), missing dependencies (stale data), adding too many dependencies (infinite loops), or mixing unrelated logic in one effect.

---

## Intermediate

### Context Providers

**When should you use Context instead of props?**
Use Context when many components need the same data (like theme, user, or locale) and prop-drilling would be cumbersome. Props are still better for local or narrowly scoped data.

**How do you prevent unnecessary re-renders with Context?**
Memoize the context value, split contexts by concern, or use libraries like `use-context-selector`. Without this, any context update re-renders all consumers.

### Component Attributes & Children

**What is the purpose of the key prop in lists?**
Keys help React identify items when reconciling lists. They must be stable and unique (like IDs). Using array index is risky if items are reordered or removed.

**How do you pass children to a component and when would you use render props?**
Children allow composition (`<Card><Button /></Card>`). Render props (children as a function) let parent components control how children are rendered, useful for advanced patterns like animations or data fetching.

### Lifecycle

**How do lifecycle methods map to hooks?**
- `componentDidMount` → `useEffect(..., [])`
- `componentDidUpdate` → `useEffect` with dependencies
- `componentWillUnmount` → cleanup inside `useEffect`

**Where do you fetch data in a React app and why?**
Typically inside `useEffect` after mount. This avoids fetching on every render and allows proper cleanup (`AbortController`) if the component unmounts before fetch completes.

---

## Intermediate (JS/TS)

### Explain `this` in JavaScript. How does it differ in arrow functions?
- In normal functions, `this` depends on how the function is called (`obj.method()`, `call`/`apply`/`bind`).
- In arrow functions, `this` is lexically bound (inherited from the surrounding scope).

### What is the difference between interface and type in TypeScript?
Both can define object shapes.
- `interface` supports declaration merging and extension.
- `type` can alias unions, primitives, tuples.
- Often `interface` is for objects, `type` for more complex unions.

### Explain event bubbling and event capturing. How can you stop propagation?
- Bubbling → event goes from target up to ancestors.
- Capturing → event goes from root down to target.
- Use `event.stopPropagation()` or `event.stopImmediatePropagation()` to stop it.

### What are generics in TypeScript? Why are they useful?
Generics let you write reusable code with placeholders for types (`function identity<T>(arg: T): T`). They allow type safety while being flexible.

### What is the difference between synchronous and asynchronous JavaScript?
- Sync → tasks block until finished.
- Async → tasks can be deferred, allowing non-blocking execution.
- Async code uses callbacks, promises, and async/await.

### Controlled vs Uncontrolled

**What's the difference between controlled and uncontrolled components?**
Controlled inputs use React state (`value` + `onChange`) as the source of truth. Uncontrolled inputs use the DOM's internal state (`defaultValue`, refs). Controlled gives more power (validation, conditional UI), uncontrolled is simpler and faster for basic forms.
