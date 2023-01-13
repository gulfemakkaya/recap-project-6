import dbConnect from "@/db/connect";
import Location from "@/db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(location);
  }

  if (request.method === "PUT") {
    const updatedLocation = await Location.findByIdAndUpdate(id, {
      $set: request.body,
    });
    console.log(updatedLocation);

    return response.status(201).json({ status: "Location updated" });
  }

  if (request.method === "PATCH") {
    const changedLocation = await Location.findByIdAndUpdate(
      id,
      {
        $set: request.body,
      },
      { new: true }
    );
    if (!changedLocation)
      return response.status(404).send("Location not found");
    response.send(changedLocation);
  }

  if (request.method === "DELETE") {
    const deletedLocation = await Location.findByIdAndDelete(id);
    return response.status(200).json({ status: "Location deleted" });
  }
}
