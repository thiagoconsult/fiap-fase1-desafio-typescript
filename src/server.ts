import { app } from "./api/app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
