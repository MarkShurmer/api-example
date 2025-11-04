import express from "express";

const app = express();

app.get("/api/health", (_req, res) => {
  res.json({ message: "Hello from API example" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

export default app;
