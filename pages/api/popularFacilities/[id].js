import dbConnect from "../../../lib/mongodb";
import { PopularFacilities } from "../../../lib/schema";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const facilities = await PopularFacilities.findOne({ id });
        if (!facilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json(facilities);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    case "POST":
      try {
        const newFacilities = new PopularFacilities(req.body);
        await newFacilities.save();
        res.status(201).json({ message: "Facilities added successfully!" });
      } catch (error) {
        res.status(500).json({ message: "Failed to add facilities." });
      }
      break;

    case "PUT":
      try {
        const updatedFacilities = await PopularFacilities.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedFacilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json(updatedFacilities);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    case "DELETE":
      try {
        const deletedFacilities = await PopularFacilities.findOneAndDelete({ id });
        if (!deletedFacilities) {
          return res.status(404).json({ message: "Facilities not found" });
        }
        res.status(200).json({ message: "Facilities deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
