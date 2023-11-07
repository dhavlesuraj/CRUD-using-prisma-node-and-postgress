import fs from "fs";

//const fs = require("fs");

const listOfSkillConcept = [
  {
    type: "skill",
    name: "Vendor Management",
  },
  {
    type: "skill",
    name: "Risk Management",
  },
  {
    type: "skill",
    name: "Ecommerce",
  },
  {
    type: "skill",
    name: "Event Management",
  },
  {
    type: "skill",
    name: "Customer Relationship Management",
  },
  {
    type: "skill",
    name: "Product Management",
  },
  {
    type: "skill",
    name: "Business Management",
  },
  {
    type: "skill",
    name: "International Business",
  },
  {
    type: "skill",
    name: "Banking & Insurance",
  },
  {
    type: "skill",
    name: "Project Management",
  },
  {
    type: "skill",
    name: "Operations Management",
  },
  {
    type: "skill",
    name: "Warehouse Operations",
  },
  {
    type: "skill",
    name: "Retail Management",
  },
  {
    type: "skill",
    name: "Personal Finance",
  },
  {
    type: "skill",
    name: "Sales & Business Development",
  },
  {
    type: "skill",
    name: "Omnichannel",
  },
  {
    type: "skill",
    name: "Business Tools & Software",
  },
  {
    type: "skill",
    name: "Logistics & Supply Chain Management",
  },
  {
    type: "skill",
    name: "Treasury Management",
  },
  {
    type: "skill",
    name: "Human Resource Management",
  },
  {
    type: "skill",
    name: "Graphic Design",
  },
  {
    type: "skill",
    name: "Media buying",
  },
  {
    type: "skill",
    name: "Cloud Computing",
  },
  {
    type: "skill",
    name: "Database Management",
  },
  {
    type: "skill",
    name: "Business Intelligence",
  },
  {
    type: "skill",
    name: "Big Data",
  },
  {
    type: "skill",
    name: "Design Thinking",
  },
  {
    type: "skill",
    name: "Deep Learning",
  },
  {
    type: "skill",
    name: "Architecture",
  },
  {
    type: "skill",
    name: "Interior Design",
  },
  {
    type: "skill",
    name: "Instructional Design",
  },
  {
    type: "skill",
    name: "Product Design",
  },
  {
    type: "skill",
    name: "Accounting & Auditing",
  },
  {
    type: "skill",
    name: "Brand Marketing",
  },
  {
    type: "skill",
    name: "Financial Risk Management",
  },
  {
    type: "skill",
    name: "Budgeting & Forecasting",
  },
  {
    type: "skill",
    name: "Corporate Finance",
  },
  {
    type: "skill",
    name: "Product Marketing",
  },
  {
    type: "skill",
    name: "Research and insight",
  },
  {
    type: "skill",
    name: "Public Relations",
  },
  {
    type: "skill",
    name: "Search Engine Marketing",
  },
  {
    type: "skill",
    name: "International Finance",
  },
  {
    type: "skill",
    name: "Investment Banking",
  },
  {
    type: "skill",
    name: "Mergers & Acquisitions",
  },
  {
    type: "skill",
    name: "Private Equity Venture Capitalist",
  },
  {
    type: "skill",
    name: "Tax Planning & Compliance",
  },
  {
    type: "skill",
    name: "Working Capital Management",
  },
  {
    type: "skill",
    name: "Portfolio Management",
  },
  {
    type: "skill",
    name: "Back-End Developer",
  },
  {
    type: "skill",
    name: "Cybersecurity & Information Security",
  },
  {
    type: "skill",
    name: "Front-End Developer",
  },
  {
    type: "skill",
    name: "Full Stack Developer",
  },
  {
    type: "skill",
    name: "Hardware & Networking",
  },
  {
    type: "skill",
    name: "Software Development",
  },
  {
    type: "skill",
    name: "Advertising",
  },
  {
    type: "skill",
    name: "Digital Marketing",
  },
  {
    type: "skill",
    name: "Entrepreneurship",
  },
  {
    type: "skill",
    name: "Social Media Marketing",
  },
  {
    type: "skill",
    name: "Marketing Analytics",
  },
  {
    type: "skill",
    name: "Calligraphy",
  },
  {
    type: "concept",
    name: "SQL",
  },
  {
    type: "concept",
    name: "SQL",
  },
  {
    type: "concept",
    name: "Software Development",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "React",
  },
  {
    type: "concept",
    name: "React",
  },
  {
    type: "concept",
    name: "React",
  },
  {
    type: "concept",
    name: "Project Management",
  },
  {
    type: "concept",
    name: "PHP",
  },
  {
    type: "concept",
    name: "Operating System",
  },
  {
    type: "concept",
    name: "Mongoose",
  },
  {
    type: "concept",
    name: "Mongoose",
  },
  {
    type: "concept",
    name: "MongoDB",
  },
  {
    type: "concept",
    name: "Machine Learning",
  },
  {
    type: "concept",
    name: "Machine Learning",
  },
  {
    type: "concept",
    name: "Machine Learning",
  },
  {
    type: "concept",
    name: "Machine Learning",
  },
  {
    type: "concept",
    name: "Javascript",
  },
  {
    type: "concept",
    name: "Javascript",
  },
  {
    type: "concept",
    name: "Javascript",
  },
  {
    type: "concept",
    name: "Javascript",
  },
  {
    type: "concept",
    name: "HTML",
  },
  {
    type: "concept",
    name: "HTML",
  },
  {
    type: "concept",
    name: "DSA",
  },
  {
    type: "concept",
    name: "DSA",
  },
  {
    type: "concept",
    name: "DSA",
  },
  {
    type: "concept",
    name: "DSA",
  },
  {
    type: "concept",
    name: "Deep Learning",
  },
  {
    type: "concept",
    name: "Database Management",
  },
  {
    type: "concept",
    name: "CSS",
  },
  {
    type: "concept",
    name: "CSS",
  },
  {
    type: "concept",
    name: "CSS",
  },
  {
    type: "concept",
    name: "Computer Architecture",
  },
  {
    type: "concept",
    name: "Cloud Computing",
  },
  {
    type: "concept",
    name: "Cloud computing",
  },
  {
    type: "concept",
    name: "Cloud Computing",
  },
  {
    type: "concept",
    name: "Business Intelligence",
  },
  {
    type: "concept",
    name: "Architecture",
  },
  {
    type: "concept",
    name: "Architecture",
  },
  {
    type: "concept",
    name: ".NET",
  },
  {
    type: "concept",
    name: "3D Modeling, VFX & Animation",
  },
  {
    type: "concept",
    name: "Accounting & Auditing",
  },
  {
    type: "concept",
    name: "Advertising",
  },
  {
    type: "concept",
    name: "Architecture",
  },
  {
    type: "concept",
    name: "Banking & Insurance",
  },
  {
    type: "concept",
    name: "Brand Marketing",
  },
  {
    type: "concept",
    name: "Business Management",
  },
  {
    type: "concept",
    name: "Business Tools & Software",
  },
  {
    type: "concept",
    name: "Calligraphy",
  },
  {
    type: "concept",
    name: "Corporate Finance",
  },
  {
    type: "concept",
    name: "Design Thinking",
  },
  {
    type: "concept",
    name: "Design Thinking",
  },
  {
    type: "concept",
    name: "Digital Currency",
  },
  {
    type: "concept",
    name: "Digital Marketing",
  },
  {
    type: "concept",
    name: "Ecommerce",
  },
  {
    type: "concept",
    name: "Entrepreneurship",
  },
  {
    type: "concept",
    name: "Event Management",
  },
  {
    type: "concept",
    name: "Event Management",
  },
  {
    type: "concept",
    name: "Event Management",
  },
  {
    type: "concept",
    name: "Fashion Design- Clothing",
  },
  {
    type: "concept",
    name: "Financial Management",
  },
  {
    type: "concept",
    name: "Financial Management",
  },
  {
    type: "concept",
    name: "Financial Management",
  },
  {
    type: "concept",
    name: "Financial Risk Management",
  },
  {
    type: "concept",
    name: "Financial Risk Management",
  },
  {
    type: "concept",
    name: "Forecasting and Planning",
  },
  {
    type: "concept",
    name: "Gem & Jewellery Design",
  },
  {
    type: "concept",
    name: "Graphic Design",
  },
  {
    type: "concept",
    name: "Instructional Design",
  },
  {
    type: "concept",
    name: "Interior Design",
  },
  {
    type: "concept",
    name: "International Business",
  },
  {
    type: "concept",
    name: "International Finance",
  },
  {
    type: "concept",
    name: "International Finance",
  },
  {
    type: "concept",
    name: "Investment Banking",
  },
  {
    type: "concept",
    name: "Marketing Analytics",
  },
  {
    type: "concept",
    name: "Media Buying",
  },
  {
    type: "concept",
    name: "Media Buying",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Omnichannel",
  },
  {
    type: "concept",
    name: "Operations Management",
  },
  {
    type: "concept",
    name: "Operations Management",
  },
  {
    type: "concept",
    name: "Personal Finance",
  },
  {
    type: "concept",
    name: "Portfolio Management",
  },
  {
    type: "concept",
    name: "Portfolio Management",
  },
  {
    type: "concept",
    name: "Private Equity Venture Capitalist",
  },
  {
    type: "concept",
    name: "Product Design",
  },
  {
    type: "concept",
    name: "Product Design",
  },
  {
    type: "concept",
    name: "Product Management",
  },
  {
    type: "concept",
    name: "Product Marketing",
  },
  {
    type: "concept",
    name: "Project Management",
  },
  {
    type: "concept",
    name: "Project Management",
  },
  {
    type: "concept",
    name: "Project Management",
  },
  {
    type: "concept",
    name: "Public Relations",
  },
  {
    type: "concept",
    name: "Retail Management",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "Risk Management",
  },
  {
    type: "concept",
    name: "Sales & Business Development",
  },
  {
    type: "concept",
    name: "Search Engine Marketing",
  },
  {
    type: "concept",
    name: "Search Engine Optimization",
  },
  {
    type: "concept",
    name: "Social Media Marketing",
  },
  {
    type: "concept",
    name: "Social Media Marketing",
  },
  {
    type: "concept",
    name: "Tax Planning & Compliance",
  },
  {
    type: "concept",
    name: "Treasury Management",
  },
  {
    type: "concept",
    name: "UI/UX (Web design)",
  },
  {
    type: "concept",
    name: "Vendor Management",
  },
  {
    type: "concept",
    name: "Warehouse Operations",
  },
  {
    type: "concept",
    name: "Working Capital Management",
  },
  {
    type: "concept",
    name: "Working Capital Management",
  },
  {
    type: "concept",
    name: "Mergers & Acquisitions",
  },
  {
    type: "concept",
    name: "Project Management",
  },
];

const arr = [
  "objective c",
  "business intelligence",
  "big data",
  "gem & jewellery design",
  "graphic design",
  "product design",
  "instructional design",
  "interior design",
  "ui/ux (web design)",
  "fashion design - accessories",
  "artificial intelligence",
  "fashion design - footwear",
  "fashion design- clothing",
  "design thinking",
  "architecture",
  "3d modeling, vfx & animation",
  "calligraphy",
  "budgeting & forecasting",
  "portfolio management",
  "private equity venture capitalist",
  "treasury management",
  "working capital management",
  ".net",
  "full stack developer",
  "database management",
  "computer architecture",
  "mobile development",
  "iot",
  "machine learning",
  "hardware & networking",
  "c programming",
  "cloud computing",
  "deep learning",
  "dsa",
  "mongodb",
  "software development",
  "mergers & acquisitions",
  "personal finance",
  "international finance",
  "digital currency",
  "accounting & auditing",
  "corporate finance",
  "financial management",
  "financial risk management",
  "banking & insurance",
  "investment banking",
  "tax planning & compliance",
  "product marketing",
  "marketing analytics",
  "social media marketing",
  "search engine optimization",
  "public relations",
  "research and insight",
  "search engine marketing",
  "media buying",
  "brand marketing",
  "advertising",
  "event management",
  "digital marketing",
  "product management",
  "business tools & software",
  "logistics & supply chain management",
  "human resource management",
  "omnichannel",
  "ecommerce",
  "sales & business development",
  "retail management",
  "forecasting and planning",
  "vendor management",
  "warehouse operations",
  "operations management",
  "entrepreneurship",
  "risk management",
  "project management",
  "international business",
  "business management",
  "customer relationship management",
  "objective c",
  "jquery",
  "golang",
  "c++",
  "cybersecurity & information security",
  "operating system",
  "sql",
  "python",
  "php",
  "machine learning",
  "nodejs",
  "c# ",
  "mongoose",
  "back-end engineer",
  "back-end developer",
  "hardware & networking",
  "deep learning",
  "c programming",
  "dsa",
  "c# ",
  "javascript",
  "html",
  "css",
  "front-end developer",
  "react",
];

const skills = listOfSkillConcept.map((ele) => {
    if (ele.type == "skill") return ele.name.toLowerCase(); //it is return array of object
});


//console.log("skills=",skills);
let skill_arr = [];
let concept_arr = [];

arr.forEach((ele) => {
  if (skills.includes(ele)) {
    skill_arr.push(ele);
    fs.writeFile("skill_data.txt", JSON.stringify(skill_arr)+'\n', (err) => {
      console.log("error=", err);
    });
  } else {
    concept_arr.push(ele);
     fs.writeFile(
       "concept_data.txt",
       JSON.stringify(concept_arr) + "\n",
       (err) => {
         console.log("error=", err);
       }
     );
  }
});

//async function write(path,array) {
// }
// write("../skill.txt",skill_arr);
//console.log("skill arr=", skill_arr, "concept arr=", concept_arr);
