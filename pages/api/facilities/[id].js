import dbConnect from "../../../lib/mongodb";
import { Facilities } from "../../../lib/schema";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const facilities = await Facilities.findOne({ id });
        if (!facilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json(facilities);
      } catch (error) {
        console.error("Error fetching facilities:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "POST":
      try {
        const newFacilities = new Facilities(req.body);
        await newFacilities.save();
        res.status(201).json({ message: "Facilities added successfully!" });
      } catch (error) {
        console.error("Error adding facilities:", error);
        res.status(500).json({ message: "Failed to add facilities.", error: error.message });
      }
      break;

    case "PUT":
      try {
        const updatedFacilities = await Facilities.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedFacilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json(updatedFacilities);
      } catch (error) {
        console.error("Error updating facilities:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedFacilities = await Facilities.findOneAndDelete({ id });
        if (!deletedFacilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json({ message: "Facilities deleted successfully" });
      } catch (error) {
        console.error("Error deleting facilities:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
