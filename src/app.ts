import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import contactsRouter from "./routers/contacts-router.js";
import { handleApplicationErrors } from "./middleware/error-handling-middleware.js";


const app = express();
app.use(json());
app.use(cors());
app.use('/contacts', contactsRouter);
app.use(handleApplicationErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));