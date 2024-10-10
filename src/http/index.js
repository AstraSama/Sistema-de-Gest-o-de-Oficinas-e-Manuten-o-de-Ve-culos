import e from "express";
import "dotenv/config.js";
import "../database/conn.js";
import maintenance_router from "../http/routers/maintenance_router.js";
import vehicle_router from "../http/routers/vehicle_router.js";
import workshop_router from "../http/routers/workshop_router.js";

const app = e();


app.get("/", (req, res) => {
  res.send("servidor rodando");
})

app.use(e.json());
app.use("/maintenance", maintenance_router);
app.use("/vehicle", vehicle_router);
app.use("/workshop", workshop_router);

// como faço uso do post/get/show de modo que a partir do postman consiga visualizar os resultados?

app.listen(process.env.API_PORT, () => console.log("Server running"));
