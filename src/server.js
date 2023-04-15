import app from "./app.js";
import vars from "./config/config.js";
const { PORT } = vars;

app.listen(PORT, (err) => {
    if (err) throw new Error(`Server error: ${err}`);
    console.log(`Running at http://localhost:${PORT}`);
});
