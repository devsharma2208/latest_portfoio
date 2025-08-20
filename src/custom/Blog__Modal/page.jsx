import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Blog__Modal = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const closeModal = (e) => {
    if (e.target.id === "modalOverlay") setIsOpen(false);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const detailedContent = [
    {
      heading: "Introduction to React.js",
      text: "React.js is a cutting-edge JavaScript library developed by Facebook for building dynamic, interactive, and highly responsive user interfaces. Unlike traditional web development approaches where the entire page reloads for updates, React allows developers to update only the parts of the UI that need changes, improving performance and user experience. Its component-based architecture encourages modular design, making applications easier to scale, maintain, and test. React has also become a foundation for many modern frameworks, including Next.js and React Native.",
      code: `// Simple React component
function HelloWorld() {
  return <h1>Hello, React!</h1>;
}
export default HelloWorld;`,
    },
    {
      heading: "Component-Based Architecture",
      text: "Components are the core building blocks of React. Each component is self-contained, meaning it can manage its own structure, styling, and logic independently. Components can be functional or class-based, and can be nested within each other to create complex UIs. This modularity enhances code reusability and makes collaboration easier in larger projects, as teams can work on separate components simultaneously.",
      code: `// Functional Component
function Card({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}`,
    },
    {
      heading: "Props and State",
      text: "Props (short for properties) are used to pass data from parent components to child components, enabling components to be flexible and reusable. State represents the internal data of a component that can change over time. When a state changes, React automatically re-renders the component, ensuring the UI stays in sync with the underlying data. Together, props and state form the backbone of dynamic and interactive React applications.",
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
    },
    {
      heading: "Declarative Approach",
      text: "React promotes a declarative style of programming. Instead of imperatively telling the browser how to update the UI step by step, developers describe what the UI should look like for a given state. React then handles the efficient updating of the DOM behind the scenes using its virtual DOM. This approach makes applications more predictable, easier to debug, and reduces the chances of UI inconsistencies.",
      code: `// Declarative rendering example
const todos = ["Buy milk", "Walk dog"];
function TodoList() {
  return (
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  );
}`,
    },
    {
      heading: "Hooks and Advanced Features",
      text: "Modern React development heavily relies on Hooks, such as useState and useEffect, which allow functional components to manage state and side effects without using class-based components. React also supports the Context API for global state management, eliminating the need to pass props through multiple layers of components. Developers can integrate routing libraries, form handling libraries, and APIs for fetching and managing data efficiently.",
      code: `import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(setData);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}`,
    },
    {
      heading: "Best Practices for Beginners",
      text: "Beginners should start with small, static components, focusing on understanding JSX, props, and state. Gradually, they can introduce event handling, conditional rendering, and list rendering. Exploring advanced topics like custom hooks, higher-order components, and performance optimization techniques (e.g., memoization) helps in building production-ready applications.",
      code: `// Example: Conditional Rendering
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in"}</h1>;
}`,
    },
    {
      heading: "Ecosystem and Community",
      text: "React has a vast ecosystem with numerous third-party libraries, tools, and frameworks that extend its functionality. Its strong community support ensures constant updates, best practices, and solutions for common challenges. Learning React also opens doors to React Native for mobile app development, making it a highly versatile and valuable skill for web and app developers.",
      code: `// Example: Using a third-party library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`,
    },
  ];

  const demoCode = `function HelloWorld() { return <h1>Hello, React!</h1>; } export default HelloWorld;`;

  const images = [
    require("../../Images/React__Beginners.jpg"),
    require("../../Images/react_begineers.png"),
    require("../../Images/React__Beginners.jpg"),
  ];

  return (
    <AnimatePresence>
      <motion.div
        id="modalOverlay"
        onClick={closeModal}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row max-h-[90vh] overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition shadow-lg cursor-pointer z-50"
          >
            ✕
          </motion.button>

          <motion.div
            className="relative w-full md:w-1/3 h-64 md:h-auto flex-shrink-0"
            variants={itemVariants}
          >
            <Image
              src={images[0]}
              alt="React JS Beginner Guide"
              fill
              quality={100}
              priority
              className="object-cover rounded-tl-2xl rounded-bl-2xl"
            />
          </motion.div>

          <motion.div
            className="p-6 md:w-2/3 flex flex-col overflow-y-auto max-h-[90vh] scrollbar-none"
            variants={itemVariants}
          >
            <>
              <motion.h2
                className="text-2xl font-bold mb-4 text-white font-heading"
                variants={itemVariants}
              >
                Introduction to React.js: A Beginner’s Guide
              </motion.h2>
              {detailedContent.map((item, i) => (
                <motion.div key={i} className="mb-6" variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-2 text-white font-heading">
                    {i + 1}. {item.heading}
                  </h3>
                  <p className="text-gray-200 text-justify font-sans mb-2">
                    {item.text}
                  </p>

                  {item?.extraImage && (
                    <div className="relative w-full h-36 mb-2 rounded-lg overflow-hidden">
                      <Image
                        src={item.extraImage}
                        alt={`Extra ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {item.code && (
                    <SyntaxHighlighter
                      language="javascript"
                      style={solarizedlight}
                      className="rounded-lg p-3 bg-black backdrop-blur-md mb-2"
                    >
                      {item.code}
                    </SyntaxHighlighter>
                  )}
                </motion.div>
              ))}
            </>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Blog__Modal;
