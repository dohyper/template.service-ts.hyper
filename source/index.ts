import morgan from "morgan";
import bodyParser from "body-parser";
import { config } from "dotenv";
import registry from "./services/discovery.hyper/index";

config();
const NAME = "{{name}}.service.hyper";

const definitions = [
    {
        name: "resource",
        applicability: {
            read: true,
            create: false,
            update: false,
            delete: false,
        }
    }
];

const configurations: string[] = []


registry
  .register(NAME, { url: process.env.URL, definitions, configurations })
  .catch((error: any) => {
    console.log(error);
  });

const api = require("express")();

api.use(morgan("dev"));
api.use(bodyParser.json({ limit: "50mb" }));

api.listen(process.env.PORT, () => {
    console.log(`${NAME} is running on port ${process.env.PORT}`);
});
