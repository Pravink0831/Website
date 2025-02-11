import dbConnect from "@/lib/dbConnect";
import { Overview } from "@/lib/schema";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const overview = await Overview.findOne({ id });
        if (!overview) {
          return res.status(404).json({ message: "Overview not found" });
        }
        res.status(200).json(overview);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    case "POST":
      try {
        const newOverview = new Overview(req.body);
        await newOverview.save();
        res.status(201).json({ message: "Overview added successfully!" });
      } catch (error) {
        res.status(500).json({ message: "Failed to add overview." });
      }
      break;

    case "PUT":
      try {
        const updatedOverview = await Overview.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedOverview) {
          return res.status(404).json({ message: "Overview not found" });
        }
        res.status(200).json(updatedOverview);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    case "DELETE":
      try {
        const deletedOverview = await Overview.findOneAndDelete({ id });
        if (!deletedOverview) {
          return res.status(404).json({ message: "Overview not found" });
        }
        res.status(200).json({ message: "Overview deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
