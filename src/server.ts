
import app from "./app";
import { PORT } from "./constants/acmeApp.contants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));