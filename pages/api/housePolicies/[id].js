import dbConnect from "../../../lib/mongodb";
import { HousePolicies } from "../../../lib/schema";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const policies = await HousePolicies.findOne({ id });
        if (!policies) {
          return res.status(404).json({ message: "Policies not found" });
        }
        res.status(200).json(policies);
      } catch (error) {
        console.error("Error fetching policies:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    case "POST":
      try {
        const newPolicies = new HousePolicies(req.body);
        await newPolicies.save();
        res.status(201).json({ message: "Policies added successfully!" });
      } catch (error) {
        console.error("Error adding policies:", error);
        res.status(500).json({ message: "Failed to add policies.", error: error.message });
      }
      break;

    case "PUT":
      try {
        const updatedPolicies = await HousePolicies.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedPolicies) {
          return res.status(404).json({ message: "Policies not found" });
        }
        res.status(200).json(updatedPolicies);
      } catch (error) {
        console.error("Error updating policies:", error);
        res.status (500).json({ message: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedPolicies = await HousePolicies.findOneAndDelete({ id });
        if (!deletedPolicies) {
          return res.status(404).json({ message: "Policies not found" });
        }
        res.status(200).json({ message: "Policies deleted successfully" });
      } catch (error) {
        console.error("Error deleting policies:", error);
        res.status(500).json({ message: "Server error", error: error.message });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
