import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import {isAuthenticatedUser} from "./Middal/loginMiddal.js"
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Connect to Server

app.get("/signin", function (_req, res) {
   res.render("index", { title: "SignIn" });
});

app.get("/", function (_req, res) {
  res.render("login", { title: "LogIn" });
});

app.get("/authorize",isAuthenticatedUser, function (_req, res) {
  res.render("authorize", { title: " authorize" });
});

// app.get("/", (req, res) => {
//   res.render("/", { logoutUrl: "/api/userLogOut" });
// });

//* Listen Port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//* Route File
import routes from "./routes/index.js";
app.use(routes);


