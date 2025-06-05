export const quizStages = {
  beginner: {
    title: "Beginner Quiz (25 Marks)",
    description: "Basic concepts in computer science and web development",
    passingScore: 15,
    questions: [
      // Computer Basics (10)
      {
        id: 1,
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Processing Unit",
          "Core Processing Unit",
          "Central Performance Unit"
        ],
        correctAnswer: "Central Processing Unit",
        category: "Computer Basics"
      },
      {
        id: 2,
        question: "Which protocol is used to transfer web pages?",
        options: ["FTP", "HTTP", "SMTP", "TCP"],
        correctAnswer: "HTTP",
        category: "Computer Basics"
      },
      {
        id: 3,
        question: "What is the main purpose of RAM?",
        options: [
          "Permanent storage",
          "Temporary storage of active data",
          "Graphics processing",
          "Network management"
        ],
        correctAnswer: "Temporary storage of active data",
        category: "Computer Basics"
      },
      {
        id: 4,
        question: "Which is NOT a programming language?",
        options: ["Python", "Java", "HTML", "Ruby"],
        correctAnswer: "HTML",
        category: "Computer Basics"
      },
      {
        id: 5,
        question: "What does 'URL' stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Reference Link",
          "Uniform Reference Locator",
          "Universal Resource Locator"
        ],
        correctAnswer: "Uniform Resource Locator",
        category: "Computer Basics"
      },
      {
        id: 6,
        question: "Which shortcut copies text?",
        options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
        correctAnswer: "Ctrl+C",
        category: "Computer Basics"
      },
      {
        id: 7,
        question: "What is binary based on?",
        options: ["Base 2", "Base 8", "Base 10", "Base 16"],
        correctAnswer: "Base 2",
        category: "Computer Basics"
      },
      {
        id: 8,
        question: "Which is an operating system?",
        options: ["Word", "Photoshop", "Windows", "Chrome"],
        correctAnswer: "Windows",
        category: "Computer Basics"
      },
      {
        id: 9,
        question: "What does GPU stand for?",
        options: [
          "Graphics Processing Unit",
          "General Processing Unit",
          "Graphical Performance Unit",
          "Global Processing Unit"
        ],
        correctAnswer: "Graphics Processing Unit",
        category: "Computer Basics"
      },
      {
        id: 10,
        question: "What is the main function of an SSD?",
        options: [
          "Data storage",
          "Internet connection",
          "Power supply",
          "Cooling system"
        ],
        correctAnswer: "Data storage",
        category: "Computer Basics"
      },

      // HTML Basics (5)
      {
        id: 11,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language",
        category: "HTML"
      },
      {
        id: 12,
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<hl>", "<hyperlink>"],
        correctAnswer: "<a>",
        category: "HTML"
      },
      {
        id: 13,
        question: "What is the correct way to comment in HTML?",
        options: [
          "<!-- This is a comment -->",
          "// This is a comment",
          "/* This is a comment */",
          "' This is a comment"
        ],
        correctAnswer: "<!-- This is a comment -->",
        category: "HTML"
      },
      {
        id: 14,
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correctAnswer: "<h1>",
        category: "HTML"
      },
      {
        id: 15,
        question: "What is the root element of an HTML document?",
        options: ["<body>", "<head>", "<html>", "<document>"],
        correctAnswer: "<html>",
        category: "HTML"
      },

      // CSS Basics (5)
      {
        id: 16,
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets",
        category: "CSS"
      },
      {
        id: 17,
        question: "Which CSS property is used to change text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: "color",
        category: "CSS"
      },
      {
        id: 18,
        question: "Which property controls space inside an element?",
        options: ["margin", "border", "spacing", "padding"],
        correctAnswer: "padding",
        category: "CSS"
      },
      {
        id: 19,
        question: "How do you select an element with id 'header'?",
        options: [".header", "#header", "*header", "header"],
        correctAnswer: "#header",
        category: "CSS"
      },
      {
        id: 20,
        question: "Which value makes text bold?",
        options: ["bold", "heavy", "700", "both bold and 700"],
        correctAnswer: "both bold and 700",
        category: "CSS"
      },

      // JavaScript Basics (5)
      {
        id: 21,
        question: "Which operator is used for strict equality?",
        options: ["==", "===", "=", "!=="],
        correctAnswer: "===",
        category: "JavaScript"
      },
      {
        id: 22,
        question: "What will 'console.log(typeof [])' output?",
        options: ["array", "object", "list", "undefined"],
        correctAnswer: "object",
        category: "JavaScript"
      },
      {
        id: 23,
        question: "Which method adds an item to array end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
        category: "JavaScript"
      },
      {
        id: 24,
        question: "What is the result of 3 + '3' in JavaScript?",
        options: ["6", "33", "Error", "undefined"],
        correctAnswer: "33",
        category: "JavaScript"
      },
      {
        id: 25,
        question: "Which keyword declares a variable in ES6?",
        options: ["var", "let", "const", "all of these"],
        correctAnswer: "all of these",
        category: "JavaScript"
      }
    ]
  },

  intermediate: {
    title: "Intermediate Quiz (75 Marks)",
    description: "More complex concepts in web development and programming",
    passingScore: 45,
    questions: [
      // HTML Intermediate (10)
      {
        id: 26,
        question: "Which attribute specifies a unique ID for an element?",
        options: ["class", "id", "name", "element-id"],
        correctAnswer: "id",
        category: "HTML"
      },
      {
        id: 27,
        question: "What does the <meta> tag provide?",
        options: [
          "Metadata about the document",
          "A navigation menu",
          "A media player",
          "A form input"
        ],
        correctAnswer: "Metadata about the document",
        category: "HTML"
      },
      {
        id: 28,
        question: "Which tag is used for a line break?",
        options: ["<lb>", "<break>", "<br>", "<newline>"],
        correctAnswer: "<br>",
        category: "HTML"
      },
      {
        id: 29,
        question: "What is semantic HTML?",
        options: [
          "HTML with meaningful element names",
          "HTML with embedded semantics",
          "HTML with CSS styling",
          "HTML with JavaScript"
        ],
        correctAnswer: "HTML with meaningful element names",
        category: "HTML"
      },
      {
        id: 30,
        question: "Which tag defines an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>",
        category: "HTML"
      },
      {
        id: 31,
        question: "What does the 'alt' attribute in <img> do?",
        options: [
          "Alternative text for screen readers",
          "Alignment of the image",
          "Alternative image source",
          "Animation length"
        ],
        correctAnswer: "Alternative text for screen readers",
        category: "HTML"
      },
      {
        id: 32,
        question: "Which HTML5 element is for video content?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correctAnswer: "<video>",
        category: "HTML"
      },
      {
        id: 33,
        question: "What does the 'defer' attribute do in <script>?",
        options: [
          "Delays script execution until page loads",
          "Defers script loading",
          "Disables the script",
          "Defines a deferred function"
        ],
        correctAnswer: "Delays script execution until page loads",
        category: "HTML"
      },
      {
        id: 34,
        question: "Which element is used for a dropdown list?",
        options: ["<input>", "<list>", "<dropdown>", "<select>"],
        correctAnswer: "<select>",
        category: "HTML"
      },
      {
        id: 35,
        question: "What is the purpose of the <canvas> element?",
        options: [
          "Drawing graphics via JavaScript",
          "Displaying images",
          "Creating tables",
          "Playing videos"
        ],
        correctAnswer: "Drawing graphics via JavaScript",
        category: "HTML"
      },

      // CSS Intermediate (15)
      {
        id: 36,
        question: "What does 'box-sizing: border-box' do?",
        options: [
          "Includes padding and border in element's width",
          "Adds a box shadow",
          "Creates a border around the box",
          "Changes the box model"
        ],
        correctAnswer: "Includes padding and border in element's width",
        category: "CSS"
      },
      {
        id: 37,
        question: "Which selector has higher specificity?",
        options: ["class", "id", "element", "universal"],
        correctAnswer: "id",
        category: "CSS"
      },
      {
        id: 38,
        question: "What does 'position: absolute' do?",
        options: [
          "Positions relative to viewport",
          "Positions relative to parent",
          "Positions relative to document",
          "Positions relative to nearest positioned ancestor"
        ],
        correctAnswer: "Positions relative to nearest positioned ancestor",
        category: "CSS"
      },
      {
        id: 39,
        question: "What is Flexbox used for?",
        options: [
          "One-dimensional layouts",
          "Two-dimensional layouts",
          "Text formatting",
          "Animation effects"
        ],
        correctAnswer: "One-dimensional layouts",
        category: "CSS"
      },
      {
        id: 40,
        question: "Which property creates space between flex items?",
        options: ["gap", "margin", "padding", "spacing"],
        correctAnswer: "gap",
        category: "CSS"
      },
      {
        id: 41,
        question: "What does 'z-index' control?",
        options: [
          "Stacking order of elements",
          "Zoom level",
          "Z-axis rotation",
          "Element size"
        ],
        correctAnswer: "Stacking order of elements",
        category: "CSS"
      },
      {
        id: 42,
        question: "Which pseudo-class styles an element when clicked?",
        options: [":hover", ":active", ":focus", ":visited"],
        correctAnswer: ":active",
        category: "CSS"
      },
      {
        id: 43,
        question: "What does 'rem' unit represent?",
        options: [
          "Root element's font size",
          "Parent element's font size",
          "Relative em",
          "Responsive em"
        ],
        correctAnswer: "Root element's font size",
        category: "CSS"
      },
      {
        id: 44,
        question: "Which property creates smooth transitions?",
        options: ["animation", "transform", "transition", "keyframes"],
        correctAnswer: "transition",
        category: "CSS"
      },
      {
        id: 45,
        question: "What does 'display: none' do?",
        options: [
          "Hides element and removes from layout",
          "Makes element invisible but keeps space",
          "Creates a hidden input",
          "Disables the element"
        ],
        correctAnswer: "Hides element and removes from layout",
        category: "CSS"
      },
      {
        id: 46,
        question: "Which CSS Grid property defines columns?",
        options: [
          "grid-template-rows",
          "grid-template-columns",
          "grid-rows",
          "grid-columns"
        ],
        correctAnswer: "grid-template-columns",
        category: "CSS"
      },
      {
        id: 47,
        question: "What does 'fr' unit mean in CSS Grid?",
        options: [
          "Fraction of available space",
          "Fixed ratio",
          "Frame rate",
          "Flexible row"
        ],
        correctAnswer: "Fraction of available space",
        category: "CSS"
      },
      {
        id: 48,
        question: "Which property aligns items vertically in Flexbox?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "flex-align"
        ],
        correctAnswer: "align-items",
        category: "CSS"
      },
      {
        id: 49,
        question: "What is the CSS specificity value for an ID selector?",
        options: ["100", "10", "1000", "1"],
        correctAnswer: "100",
        category: "CSS"
      },
      {
        id: 50,
        question: "Which property creates a shadow effect?",
        options: ["shadow", "box-shadow", "drop-shadow", "text-shadow"],
        correctAnswer: "box-shadow",
        category: "CSS"
      },

      // JavaScript Intermediate (20)
      {
        id: 51,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with access to its outer scope",
          "A way to close variables",
          "A method to end functions",
          "A type of loop"
        ],
        correctAnswer: "A function with access to its outer scope",
        category: "JavaScript"
      },
      {
        id: 52,
        question: "What does 'this' refer to in a method?",
        options: [
          "The object calling the method",
          "The global object",
          "The parent object",
          "The function itself"
        ],
        correctAnswer: "The object calling the method",
        category: "JavaScript"
      },
      {
        id: 53,
        question: "What is hoisting in JavaScript?",
        options: [
          "Moving declarations to the top",
          "A type of function",
          "A DOM manipulation",
          "A performance optimization"
        ],
        correctAnswer: "Moving declarations to the top",
        category: "JavaScript"
      },
      {
        id: 54,
        question: "Which method creates a new array from another?",
        options: ["slice()", "splice()", "map()", "push()"],
        correctAnswer: "map()",
        category: "JavaScript"
      },
      {
        id: 55,
        question: "What is an IIFE?",
        options: [
          "Immediately Invoked Function Expression",
          "Inline Integrated Function Element",
          "Immediate Interface Function Execution",
          "Internal Iteration Function Element"
        ],
        correctAnswer: "Immediately Invoked Function Expression",
        category: "JavaScript"
      },
      {
        id: 56,
        question: "What does JSON stand for?",
        options: [
          "JavaScript Object Notation",
          "JavaScript Oriented Notation",
          "JavaScript Operational Network",
          "JavaScript Object Naming"
        ],
        correctAnswer: "JavaScript Object Notation",
        category: "JavaScript"
      },
      {
        id: 57,
        question: "Which is NOT a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        correctAnswer: "Django",
        category: "JavaScript"
      },
      {
        id: 58,
        question: "What is event bubbling?",
        options: [
          "Events propagating up the DOM tree",
          "Multiple events firing at once",
          "Events triggering animations",
          "A sound effect"
        ],
        correctAnswer: "Events propagating up the DOM tree",
        category: "JavaScript"
      },
      {
        id: 59,
        question: "What does the 'async' keyword do?",
        options: [
          "Makes a function return a promise",
          "Pauses execution",
          "Creates asynchronous code",
          "Both makes a function return a promise and creates asynchronous code"
        ],
        correctAnswer: "Both makes a function return a promise and creates asynchronous code",
        category: "JavaScript"
      },
      {
        id: 60,
        question: "What is the purpose of 'localStorage'?",
        options: [
          "Store data persistently in browser",
          "Store session data",
          "Store server data",
          "Store temporary variables"
        ],
        correctAnswer: "Store data persistently in browser",
        category: "JavaScript"
      },
      {
        id: 61,
        question: "What is a promise in JavaScript?",
        options: [
          "An object representing eventual completion/failure",
          "A type of function",
          "A declaration of intent",
          "A conditional statement"
        ],
        correctAnswer: "An object representing eventual completion/failure",
        category: "JavaScript"
      },
      {
        id: 62,
        question: "Which method converts JSON to an object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.toObject()",
          "JSON.convert()"
        ],
        correctAnswer: "JSON.parse()",
        category: "JavaScript"
      },
      {
        id: 63,
        question: "What is the purpose of 'use strict'?",
        options: [
          "Enables strict mode",
          "Stricts variable types",
          "Forces synchronous code",
          "Enables experimental features"
        ],
        correctAnswer: "Enables strict mode",
        category: "JavaScript"
      },
      {
        id: 64,
        question: "What does the spread operator (...) do?",
        options: [
          "Expands iterables into individual elements",
          "Creates a copy of an object",
          "Spreads data across multiple files",
          "Both expands iterables and creates copies"
        ],
        correctAnswer: "Both expands iterables and creates copies",
        category: "JavaScript"
      },
      {
        id: 65,
        question: "What is destructuring assignment?",
        options: [
          "Unpacking values from objects/arrays",
          "Breaking down complex structures",
          "Destroying variables",
          "Deconstructing functions"
        ],
        correctAnswer: "Unpacking values from objects/arrays",
        category: "JavaScript"
      },
      {
        id: 66,
        question: "Which is NOT a JavaScript data type?",
        options: ["string", "number", "boolean", "character"],
        correctAnswer: "character",
        category: "JavaScript"
      },
      {
        id: 67,
        question: "What is the purpose of 'fetch' API?",
        options: [
          "Make HTTP requests",
          "Retrieve local files",
          "Get user location",
          "Access camera"
        ],
        correctAnswer: "Make HTTP requests",
        category: "JavaScript"
      },
      {
        id: 68,
        question: "What does 'NaN' stand for?",
        options: [
          "Not a Number",
          "Null and Number",
          "Number as Null",
          "No assigned Number"
        ],
        correctAnswer: "Not a Number",
        category: "JavaScript"
      },
      {
        id: 69,
        question: "Which method joins array elements into a string?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correctAnswer: "join()",
        category: "JavaScript"
      },
      {
        id: 70,
        question: "What is the purpose of 'addEventListener'?",
        options: [
          "Attach event handlers",
          "Create new events",
          "Listen for variable changes",
          "Monitor performance"
        ],
        correctAnswer: "Attach event handlers",
        category: "JavaScript"
      },

      // Git & Version Control (10)
      {
        id: 71,
        question: "What does 'git clone' do?",
        options: [
          "Creates a local copy of a repository",
          "Makes a branch copy",
          "Duplicates the entire project",
          "Copies a single file"
        ],
        correctAnswer: "Creates a local copy of a repository",
        category: "Git"
      },
      {
        id: 72,
        question: "Which command stages all changes?",
        options: [
          "git add .",
          "git stage all",
          "git commit -a",
          "git update"
        ],
        correctAnswer: "git add .",
        category: "Git"
      },
      {
        id: 73,
        question: "What does 'git commit -m' do?",
        options: [
          "Commits with a message",
          "Merges branches",
          "Moves commits",
          "Modifies previous commit"
        ],
        correctAnswer: "Commits with a message",
        category: "Git"
      },
      {
        id: 74,
        question: "Which command creates a new branch?",
        options: [
          "git branch new",
          "git checkout -b",
          "git create branch",
          "both git branch new and git checkout -b"
        ],
        correctAnswer: "both git branch new and git checkout -b",
        category: "Git"
      },
      {
        id: 75,
        question: "What is GitHub primarily used for?",
        options: [
          "Hosting Git repositories",
          "Code collaboration",
          "Project management",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Git"
      },
      {
        id: 76,
        question: "What does 'git pull' do?",
        options: [
          "Fetches and merges remote changes",
          "Uploads local changes",
          "Shows differences",
          "Creates a pull request"
        ],
        correctAnswer: "Fetches and merges remote changes",
        category: "Git"
      },
      {
        id: 77,
        question: "Which command shows the commit history?",
        options: ["git log", "git history", "git show", "git commits"],
        correctAnswer: "git log",
        category: "Git"
      },
      {
        id: 78,
        question: "What is a '.gitignore' file for?",
        options: [
          "Specify files to ignore",
          "Ignore Git commands",
          "Hide Git configuration",
          "Disable Git features"
        ],
        correctAnswer: "Specify files to ignore",
        category: "Git"
      },
      {
        id: 79,
        question: "What does 'git stash' do?",
        options: [
          "Temporarily shelves changes",
          "Deletes changes",
          "Commits changes secretly",
          "Shows hidden changes"
        ],
        correctAnswer: "Temporarily shelves changes",
        category: "Git"
      },
      {
        id: 80,
        question: "What is a merge conflict?",
        options: [
          "When Git can't automatically merge changes",
          "When two users argue",
          "When branches can't be created",
          "When repositories disagree"
        ],
        correctAnswer: "When Git can't automatically merge changes",
        category: "Git"
      },

      // Linux Basics (10)
      {
        id: 81,
        question: "Which command lists directory contents?",
        options: ["dir", "list", "ls", "show"],
        correctAnswer: "ls",
        category: "Linux"
      },
      {
        id: 82,
        question: "What does 'cd ~' do?",
        options: [
          "Goes to home directory",
          "Goes to root directory",
          "Creates a directory",
          "Changes file permissions"
        ],
        correctAnswer: "Goes to home directory",
        category: "Linux"
      },
      {
        id: 83,
        question: "Which command creates a file?",
        options: ["mkfile", "create", "touch", "newfile"],
        correctAnswer: "touch",
        category: "Linux"
      },
      {
        id: 84,
        question: "What does 'chmod 755' do?",
        options: [
          "Sets read/write/execute permissions",
          "Changes file owner",
          "Compresses the file",
          "Checks file integrity"
        ],
        correctAnswer: "Sets read/write/execute permissions",
        category: "Linux"
      },
      {
        id: 85,
        question: "Which command shows the current directory?",
        options: ["pwd", "cwd", "where", "here"],
        correctAnswer: "pwd",
        category: "Linux"
      },
      {
        id: 86,
        question: "What does 'grep' do?",
        options: [
          "Searches text using patterns",
          "Groups files",
          "Graphs data",
          "Gets repository files"
        ],
        correctAnswer: "Searches text using patterns",
        category: "Linux"
      },
      {
        id: 87,
        question: "Which command moves/renames files?",
        options: ["move", "rename", "mv", "cp"],
        correctAnswer: "mv",
        category: "Linux"
      },
      {
        id: 88,
        question: "What does 'sudo' stand for?",
        options: [
          "Super User DO",
          "System User Directive",
          "Switch User Directive",
          "Superior User Directive"
        ],
        correctAnswer: "Super User DO",
        category: "Linux"
      },
      {
        id: 89,
        question: "Which command displays manual pages?",
        options: ["help", "doc", "manual", "man"],
        correctAnswer: "man",
        category: "Linux"
      },
      {
        id: 90,
        question: "What does 'rm -rf' do?",
        options: [
          "Forcefully removes files/directories",
          "Refreshes the file system",
          "Recursively finds files",
          "Repairs file system"
        ],
        correctAnswer: "Forcefully removes files/directories",
        category: "Linux"
      }
    ]
  },

  advanced: {
    title: "Advanced Quiz (100 Marks)",
    description: "Expert-level questions on web development and computer science",
    passingScore: 70,
    questions: [
      // React (15)
      {
        id: 91,
        question: "What is the virtual DOM in React?",
        options: [
          "A lightweight DOM copy",
          "3D DOM representation",
          "DOM backup",
          "DOM security layer"
        ],
        correctAnswer: "A lightweight DOM copy",
        category: "React"
      },
      {
        id: 92,
        question: "Which React hook is used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: "useEffect",
        category: "React"
      },
      {
        id: 93,
        question: "In React, props are used to:",
        options: [
          "Store component's state",
          "Pass data from parent to child",
          "Handle user events",
          "Create reusable styles"
        ],
        correctAnswer: "Pass data from parent to child",
        category: "React"
      },
      {
        id: 94,
        question: "What is the React reconciliation algorithm?",
        options: [
          "DOM diffing process",
          "State management",
          "Component lifecycle",
          "Props validation"
        ],
        correctAnswer: "DOM diffing process",
        category: "React"
      },
      {
        id: 95,
        question: "What is the purpose of React Fragments?",
        options: [
          "Group elements without wrapper",
          "Improve performance",
          "Handle errors",
          "Manage state"
        ],
        correctAnswer: "Group elements without wrapper",
        category: "React"
      },
      {
        id: 96,
        question: "Which is NOT a React hook?",
        options: ["useState", "useEffect", "useContext", "useComponent"],
        correctAnswer: "useComponent",
        category: "React"
      },
      {
        id: 97,
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "JavaScript Extension",
          "JS Extensible",
          "JS Syntax Extension"
        ],
        correctAnswer: "JavaScript XML",
        category: "React"
      },
      {
        id: 98,
        question: "What is the purpose of React Router?",
        options: [
          "Handle client-side routing",
          "Manage server routes",
          "Route API requests",
          "Configure build routes"
        ],
        correctAnswer: "Handle client-side routing",
        category: "React"
      },
      {
        id: 99,
        question: "What is Redux used for?",
        options: [
          "State management",
          "Routing",
          "Styling",
          "API calls"
        ],
        correctAnswer: "State management",
        category: "React"
      },
      {
        id: 100,
        question: "What is the purpose of useMemo hook?",
        options: [
          "Memoize expensive calculations",
          "Manage memory allocation",
          "Monitor performance",
          "Memorize component state"
        ],
        correctAnswer: "Memoize expensive calculations",
        category: "React"
      },
      {
        id: 101,
        question: "What is Context API used for?",
        options: [
          "Global state management",
          "Component styling",
          "Routing configuration",
          "API caching"
        ],
        correctAnswer: "Global state management",
        category: "React"
      },
      {
        id: 102,
        question: "What is a higher-order component?",
        options: [
          "A function that takes a component and returns a new component",
          "A component with elevated privileges",
          "A parent component",
          "A component with state"
        ],
        correctAnswer: "A function that takes a component and returns a new component",
        category: "React"
      },
      {
        id: 103,
        question: "What is the purpose of React.lazy?",
        options: [
          "Code splitting and lazy loading",
          "Lazy state updates",
          "Slow rendering",
          "Delayed effects"
        ],
        correctAnswer: "Code splitting and lazy loading",
        category: "React"
      },
      {
        id: 104,
        question: "What is the children prop?",
        options: [
          "Content between component tags",
          "Child components",
          "Nested elements",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "React"
      },
      {
        id: 105,
        question: "What does useCallback hook do?",
        options: [
          "Memoizes callback functions",
          "Handles callbacks",
          "Manages event listeners",
          "Optimizes API calls"
        ],
        correctAnswer: "Memoizes callback functions",
        category: "React"
      },

      // Advanced JavaScript (15)
      {
        id: 106,
        question: "What is the event loop in JavaScript?",
        options: [
          "Mechanism handling asynchronous callbacks",
          "Loop for event handlers",
          "DOM update cycle",
          "Event listener management"
        ],
        correctAnswer: "Mechanism handling asynchronous callbacks",
        category: "JavaScript"
      },
      {
        id: 107,
        question: "What is a prototype in JavaScript?",
        options: [
          "Mechanism for inheritance",
          "Initial version of code",
          "Type of object",
          "Testing framework"
        ],
        correctAnswer: "Mechanism for inheritance",
        category: "JavaScript"
      },
      {
        id: 108,
        question: "What is the Temporal Dead Zone?",
        options: [
          "Area where variables are inaccessible before declaration",
          "Memory allocation phase",
          "Garbage collection period",
          "Time between event and handler"
        ],
        correctAnswer: "Area where variables are inaccessible before declaration",
        category: "JavaScript"
      },
      {
        id: 109,
        question: "What are generator functions?",
        options: [
          "Functions that can be paused and resumed",
          "Functions that generate code",
          "Functions that create other functions",
          "Functions that run in parallel"
        ],
        correctAnswer: "Functions that can be paused and resumed",
        category: "JavaScript"
      },
      {
        id: 110,
        question: "What is WebAssembly?",
        options: [
          "Low-level language for web",
          "Assembly language for web",
          "Web assembly framework",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "JavaScript"
      },
      {
        id: 111,
        question: "What is a decorator in JavaScript?",
        options: [
          "Function that modifies classes/methods",
          "Design pattern",
          "Styling component",
          "Type of comment"
        ],
        correctAnswer: "Function that modifies classes/methods",
        category: "JavaScript"
      },
      {
        id: 112,
        question: "What is the purpose of a WeakMap?",
        options: [
          "Store weak object references",
          "Lightweight map",
          "Unsecured data storage",
          "Temporary mapping"
        ],
        correctAnswer: "Store weak object references",
        category: "JavaScript"
      },
      {
        id: 113,
        question: "What is memoization?",
        options: [
          "Caching function results",
          "Memory optimization",
          "Data serialization",
          "Code minification"
        ],
        correctAnswer: "Caching function results",
        category: "JavaScript"
      },
      {
        id: 114,
        question: "What is currying in JavaScript?",
        options: [
          "Transforming multi-argument functions into nested single-argument functions",
          "Function optimization",
          "Data formatting",
          "Error handling technique"
        ],
        correctAnswer: "Transforming multi-argument functions into nested single-argument functions",
        category: "JavaScript"
      },
      {
        id: 115,
        question: "What is the purpose of the Proxy object?",
        options: [
          "Create custom behavior for fundamental operations",
          "Handle HTTP requests",
          "Manage object properties",
          "All of these"
        ],
        correctAnswer: "Create custom behavior for fundamental operations",
        category: "JavaScript"
      },
      {
        id: 116,
        question: "What are tagged template literals?",
        options: [
          "Function that processes template strings",
          "Marked template strings",
          "Styled components",
          "HTML templates"
        ],
        correctAnswer: "Function that processes template strings",
        category: "JavaScript"
      },
      {
        id: 117,
        question: "What is the purpose of the Reflect API?",
        options: [
          "Provide methods for interceptable operations",
          "Reflect on object structure",
          "Mirror objects",
          "Inspect prototypes"
        ],
        correctAnswer: "Provide methods for interceptable operations",
        category: "JavaScript"
      },
      {
        id: 118,
        question: "What is a Symbol in JavaScript?",
        options: [
          "Unique and immutable primitive",
          "Special character",
          "Type of object",
          "Variable declaration"
        ],
        correctAnswer: "Unique and immutable primitive",
        category: "JavaScript"
      },
      {
        id: 119,
        question: "What are Web Workers?",
        options: [
          "Run scripts in background threads",
          "Web development tools",
          "Service workers",
          "Web assembly workers"
        ],
        correctAnswer: "Run scripts in background threads",
        category: "JavaScript"
      },
      {
        id: 120,
        question: "What is the purpose of Intl object?",
        options: [
          "Internationalization API",
          "Integer operations",
          "Internal JavaScript",
          "Integration layer"
        ],
        correctAnswer: "Internationalization API",
        category: "JavaScript"
      },

      // Advanced CSS (10)
      {
        id: 121,
        question: "What does CSS Grid use to define tracks?",
        options: ["fr units", "px units", "em units", "% units"],
        correctAnswer: "fr units",
        category: "CSS"
      },
      {
        id: 122,
        question: "What is the purpose of Webpack?",
        options: [
          "Module bundling",
          "State management",
          "CSS preprocessing",
          "API testing"
        ],
        correctAnswer: "Module bundling",
        category: "CSS"
      },
      {
        id: 123,
        question: "What does Babel primarily do?",
        options: [
          "Transpile modern JS",
          "Minify code",
          "Optimize images",
          "Manage dependencies"
        ],
        correctAnswer: "Transpile modern JS",
        category: "CSS"
      },
      {
        id: 124,
        question: "Which is a CSS methodology?",
        options: ["BEM", "JWT", "REST", "GraphQL"],
        correctAnswer: "BEM",
        category: "CSS"
      },
      {
        id: 125,
        question: "Which is NOT a CSS preprocessor?",
        options: ["Sass", "Less", "Stylus", "PostHTML"],
        correctAnswer: "PostHTML",
        category: "CSS"
      },
      {
        id: 126,
        question: "Which tool analyzes bundle size?",
        options: [
          "Webpack Bundle Analyzer",
          "ESLint",
          "Prettier",
          "Jest"
        ],
        correctAnswer: "Webpack Bundle Analyzer",
        category: "CSS"
      },
      {
        id: 127,
        question: "What is CSS-in-JS?",
        options: [
          "Writing CSS in JavaScript",
          "JavaScript in CSS",
          "CSS for JavaScript",
          "All of these"
        ],
        correctAnswer: "Writing CSS in JavaScript",
        category: "CSS"
      },
      {
        id: 128,
        question: "What is the purpose of PostCSS?",
        options: [
          "Transform CSS with JavaScript",
          "Post-process CSS",
          "Optimize CSS",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "CSS"
      },
      {
        id: 129,
        question: "What does 'will-change' property do?",
        options: [
          "Hints about upcoming changes",
          "Forces changes",
          "Animates changes",
          "Tracks changes"
        ],
        correctAnswer: "Hints about upcoming changes",
        category: "CSS"
      },
      {
        id: 130,
        question: "What is container queries in CSS?",
        options: [
          "Styles based on container size",
          "Media queries for containers",
          "Container-based layouts",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "CSS"
      },

      // Database & SQL (10)
      {
        id: 131,
        question: "What is a primary key?",
        options: [
          "Unique identifier for a record",
          "Main password",
          "First column",
          "Encryption key"
        ],
        correctAnswer: "Unique identifier for a record",
        category: "Database"
      },
      {
        id: 132,
        question: "Which SQL command retrieves data?",
        options: ["GET", "SELECT", "RETRIEVE", "FIND"],
        correctAnswer: "SELECT",
        category: "Database"
      },
      {
        id: 133,
        question: "What is normalization?",
        options: [
          "Organizing data to reduce redundancy",
          "Standardizing data formats",
          "Making data normal",
          "Optimizing queries"
        ],
        correctAnswer: "Organizing data to reduce redundancy",
        category: "Database"
      },
      {
        id: 134,
        question: "What is an index used for?",
        options: [
          "Speed up data retrieval",
          "Create a table of contents",
          "Number records",
          "Sort tables"
        ],
        correctAnswer: "Speed up data retrieval",
        category: "Database"
      },
      {
        id: 135,
        question: "Which join returns all rows when there's a match in either table?",
        options: [
          "INNER JOIN",
          "LEFT JOIN",
          "FULL OUTER JOIN",
          "CROSS JOIN"
        ],
        correctAnswer: "FULL OUTER JOIN",
        category: "Database"
      },
      {
        id: 136,
        question: "What is a transaction in databases?",
        options: [
          "Sequence of operations treated as a single unit",
          "Data transfer",
          "Table modification",
          "Query execution"
        ],
        correctAnswer: "Sequence of operations treated as a single unit",
        category: "Database"
      },
      {
        id: 137,
        question: "What is NoSQL?",
        options: [
          "Non-relational databases",
          "Databases without SQL",
          "Alternative to SQL",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Database"
      },
      {
        id: 138,
        question: "What is ACID in databases?",
        options: [
          "Transaction properties (Atomicity, Consistency, Isolation, Durability)",
          "Database acid test",
          "Performance metrics",
          "Security protocol"
        ],
        correctAnswer: "Transaction properties (Atomicity, Consistency, Isolation, Durability)",
        category: "Database"
      },
      {
        id: 139,
        question: "What is ORM?",
        options: [
          "Object-Relational Mapping",
          "Object-Role Modeling",
          "Operational Resource Management",
          "Optimized Resource Mapping"
        ],
        correctAnswer: "Object-Relational Mapping",
        category: "Database"
      },
      {
        id: 140,
        question: "What is a stored procedure?",
        options: [
          "Prepared SQL code saved in DB",
          "Data storage method",
          "Backup procedure",
          "Database schema"
        ],
        correctAnswer: "Prepared SQL code saved in DB",
        category: "Database"
      },

      // System Design (10)
      {
        id: 141,
        question: "What is horizontal scaling?",
        options: [
          "Adding more machines",
          "Upgrading existing machines",
          "Increasing storage",
          "Optimizing code"
        ],
        correctAnswer: "Adding more machines",
        category: "System Design"
      },
      {
        id: 142,
        question: "What is a CDN?",
        options: [
          "Content Delivery Network",
          "Code Development Network",
          "Centralized Data Node",
          "Content Distribution Node"
        ],
        correctAnswer: "Content Delivery Network",
        category: "System Design"
      },
      {
        id: 143,
        question: "What is the CAP theorem?",
        options: [
          "Consistency, Availability, Partition tolerance - pick two",
          "Computer Architecture Principle",
          "Code Analysis Protocol",
          "Content Access Policy"
        ],
        correctAnswer: "Consistency, Availability, Partition tolerance - pick two",
        category: "System Design"
      },
      {
        id: 144,
        question: "What is microservices architecture?",
        options: [
          "Small, independent services",
          "Tiny code modules",
          "Minimalist design",
          "Lightweight applications"
        ],
        correctAnswer: "Small, independent services",
        category: "System Design"
      },
      {
        id: 145,
        question: "What is load balancing?",
        options: [
          "Distributing network traffic",
          "Balancing server loads",
          "Equalizing resource usage",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "System Design"
      },
      {
        id: 146,
        question: "What is a reverse proxy?",
        options: [
          "Server that forwards client requests",
          "Backward-facing server",
          "Inverted proxy server",
          "Security proxy"
        ],
        correctAnswer: "Server that forwards client requests",
        category: "System Design"
      },
      {
        id: 147,
        question: "What is database sharding?",
        options: [
          "Horizontal partitioning of data",
          "Data fragmentation",
          "Database splitting",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "System Design"
      },
      {
        id: 148,
        question: "What is eventual consistency?",
        options: [
          "Data becomes consistent over time",
          "Eventually correct data",
          "Temporary inconsistency",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "System Design"
      },
      {
        id: 149,
        question: "What is circuit breaking in distributed systems?",
        options: [
          "Fail-fast mechanism",
          "Electrical circuit analogy",
          "System protection",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "System Design"
      },
      {
        id: 150,
        question: "What is the purpose of message queues?",
        options: [
          "Asynchronous communication",
          "Decoupling services",
          "Handling peak loads",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "System Design"
      },

      // Performance Optimization (10)
      {
        id: 151,
        question: "What is lazy loading?",
        options: [
          "Loading resources as needed",
          "Slow loading",
          "Performance degradation",
          "All of these"
        ],
        correctAnswer: "Loading resources as needed",
        category: "Performance"
      },
      {
        id: 152,
        question: "What is tree shaking?",
        options: [
          "Removing unused code",
          "Shaking dependency tree",
          "Code optimization",
          "All of these"
        ],
        correctAnswer: "Removing unused code",
        category: "Performance"
      },
      {
        id: 153,
        question: "What is code splitting?",
        options: [
          "Splitting code into smaller bundles",
          "Dividing code logically",
          "Separating concerns",
          "All of these"
        ],
        correctAnswer: "Splitting code into smaller bundles",
        category: "Performance"
      },
      {
        id: 154,
        question: "What is memoization used for?",
        options: [
          "Optimizing expensive function calls",
          "Memory management",
          "Caching results",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 155,
        question: "What is critical CSS?",
        options: [
          "CSS needed for above-the-fold content",
          "Important CSS",
          "Core styles",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 156,
        question: "What is the purpose of HTTP/2?",
        options: [
          "Performance improvements",
          "Multiplexing",
          "Header compression",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 157,
        question: "What is a service worker?",
        options: [
          "Client-side proxy",
          "Offline capability",
          "Background sync",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 158,
        question: "What is the purpose of prefetching?",
        options: [
          "Loading resources in advance",
          "Predictive loading",
          "Performance optimization",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 159,
        question: "What is the virtual DOM's performance benefit?",
        options: [
          "Minimizes direct DOM manipulation",
          "Faster updates",
          "Efficient diffing",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },
      {
        id: 160,
        question: "What is the purpose of debouncing?",
        options: [
          "Limit rate of function calls",
          "Performance optimization",
          "Prevent excessive updates",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Performance"
      },

      // Security (10)
      {
        id: 161,
        question: "What is CORS?",
        options: [
          "Cross-Origin Resource Sharing",
          "Cross-Origin Request Security",
          "Cross-Origin Resource Security",
          "Cross-Origin Request Sharing"
        ],
        correctAnswer: "Cross-Origin Resource Sharing",
        category: "Security"
      },
      {
        id: 162,
        question: "What is XSS?",
        options: [
          "Cross-Site Scripting",
          "Cross-Site Security",
          "XML Site Scripting",
          "External Site Scripting"
        ],
        correctAnswer: "Cross-Site Scripting",
        category: "Security"
      },
      {
        id: 163,
        question: "What is CSRF?",
        options: [
          "Cross-Site Request Forgery",
          "Cross-Site Resource Forgery",
          "Client-Side Request Forgery",
          "Cookie-Side Request Forgery"
        ],
        correctAnswer: "Cross-Site Request Forgery",
        category: "Security"
      },
      {
        id: 164,
        question: "What is the purpose of JWT?",
        options: [
          "Secure authentication",
          "Stateless sessions",
          "Token-based auth",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 165,
        question: "What is SQL injection?",
        options: [
          "Injecting malicious SQL",
          "Database attack",
          "Security vulnerability",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 166,
        question: "What is the purpose of HTTPS?",
        options: [
          "Secure communication",
          "Encrypted connection",
          "Data integrity",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 167,
        question: "What is content security policy?",
        options: [
          "Prevent XSS attacks",
          "Control resources",
          "Security layer",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 168,
        question: "What is OAuth?",
        options: [
          "Authorization framework",
          "Secure delegation",
          "Token-based auth",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 169,
        question: "What is Same-Origin Policy?",
        options: [
          "Security measure",
          "Restricts cross-origin requests",
          "Prevents attacks",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },
      {
        id: 170,
        question: "What is the purpose of sanitization?",
        options: [
          "Clean user input",
          "Prevent injection attacks",
          "Security measure",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Security"
      },

      // Testing (10)
      {
        id: 171,
        question: "What is unit testing?",
        options: [
          "Testing individual components",
          "Isolated testing",
          "Small tests",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 172,
        question: "What is TDD?",
        options: [
          "Test-Driven Development",
          "Writing tests first",
          "Red-Green-Refactor",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 173,
        question: "What is Jest?",
        options: [
          "JavaScript testing framework",
          "Test runner",
          "Assertion library",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 174,
        question: "What is mocking in testing?",
        options: [
          "Simulating objects",
          "Creating test doubles",
          "Isolating dependencies",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 175,
        question: "What is integration testing?",
        options: [
          "Testing component interactions",
          "Combined unit tests",
          "System parts testing",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 176,
        question: "What is snapshot testing?",
        options: [
          "Comparing UI output",
          "Catching regressions",
          "Visual testing",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 177,
        question: "What is end-to-end testing?",
        options: [
          "Testing entire workflow",
          "User journey testing",
          "System testing",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 178,
        question: "What is code coverage?",
        options: [
          "Measure of tested code",
          "Quality metric",
          "Testing completeness",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 179,
        question: "What is BDD?",
        options: [
          "Behavior-Driven Development",
          "Tests as specifications",
          "Collaborative approach",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },
      {
        id: 180,
        question: "What is the purpose of CI/CD?",
        options: [
          "Automate testing and deployment",
          "Continuous integration",
          "Continuous delivery",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Testing"
      },

      // DevOps & Tools (10)
      {
        id: 181,
        question: "What is Docker?",
        options: [
          "Containerization platform",
          "Lightweight virtualization",
          "Package software",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 182,
        question: "What is Kubernetes?",
        options: [
          "Container orchestration",
          "Manages containers",
          "Scaling solution",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 183,
        question: "What is Jenkins?",
        options: [
          "CI/CD tool",
          "Automation server",
          "Build automation",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 184,
        question: "What is infrastructure as code?",
        options: [
          "Managing infrastructure with code",
          "Version-controlled infrastructure",
          "Automated provisioning",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 185,
        question: "What is Terraform?",
        options: [
          "Infrastructure as code tool",
          "Cloud provisioning",
          "Multi-cloud deployment",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 186,
        question: "What is GitLab CI?",
        options: [
          "Continuous integration tool",
          "Built into GitLab",
          "Pipeline automation",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 187,
        question: "What is Ansible?",
        options: [
          "Configuration management",
          "Automation tool",
          "IT orchestration",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 188,
        question: "What is Prometheus?",
        options: [
          "Monitoring system",
          "Time-series database",
          "Alerting tool",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 189,
        question: "What is Grafana?",
        options: [
          "Visualization tool",
          "Dashboarding",
          "Metrics analysis",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },
      {
        id: 190,
        question: "What is the purpose of Nginx?",
        options: [
          "Web server",
          "Reverse proxy",
          "Load balancer",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "DevOps"
      },

      // Algorithms & Data Structures (10)
      {
        id: 191,
        question: "What is the time complexity of binary search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: "O(log n)",
        category: "Algorithms"
      },
      {
        id: 192,
        question: "What is a hash table?",
        options: [
          "Key-value data structure",
          "Amortized O(1) access",
          "Uses hash function",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 193,
        question: "What is the purpose of a heap?",
        options: [
          "Priority queue implementation",
          "Efficient min/max access",
          "Tree-based structure",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 194,
        question: "What is Dijkstra's algorithm for?",
        options: [
          "Shortest path in graphs",
          "Non-negative weights",
          "Greedy algorithm",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 195,
        question: "What is dynamic programming?",
        options: [
          "Breaking problems into subproblems",
          "Memoization",
          "Optimization technique",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 196,
        question: "What is a binary search tree?",
        options: [
          "Left < Root < Right",
          "Ordered tree",
          "Efficient search",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 197,
        question: "What is the time complexity of quicksort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: "O(n log n)",
        category: "Algorithms"
      },
      {
        id: 198,
        question: "What is a graph?",
        options: [
          "Nodes + edges",
          "Network representation",
          "Non-linear structure",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 199,
        question: "What is Big O notation?",
        options: [
          "Algorithm complexity",
          "Worst-case analysis",
          "Growth rate",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      },
      {
        id: 200,
        question: "What is recursion?",
        options: [
          "Function calling itself",
          "Divide and conquer",
          "Stack-based",
          "All of these"
        ],
        correctAnswer: "All of these",
        category: "Algorithms"
      }
    ]
  }
};

export const quizQuestions = Object.values(quizStages).flatMap(stage => stage.questions);