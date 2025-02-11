import dbConnect from "../../../lib/mongodb";
import { Destinations } from "../../../lib/schema";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const destinations = await Destinations.findOne({ id });
        if (!destinations) {
          return res.status(404).json({ message: "Destinations not found" });
        }
        res.status(200).json(destinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "POST":
      try {
        const newDestinations = new Destinations(req.body);
        await newDestinations.save();
        res.status(201).json({ message: "Destinations added successfully!" });
      } catch (error) {
        console.error("Error adding destinations:", error);
        res.status(500).json({ message: "Failed to add destinations.", error: error.message });
      }
      break;

    case "PUT":
      try {
        const updatedDestinations = await Destinations.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedDestinations) {
          return res.status(404).json({ message: "Destinations not found" });
        }
        res.status(200).json(updatedDestinations);
      } catch (error) {
        console.error("Error updating destinations:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedDestinations = await Destinations.findOneAndDelete({ id });
        if (!deletedDestinations) {
          return res.status(404).json({ message: "Destinations not found" });
        }
        res.status(200).json({ message: "Destinations deleted successfully" });
      } catch (error) {
        console.error("Error deleting destinations:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
