// app/become-expert/page.jsx
import { connect } from '../../../lib/mongodb';
import { Property } from '../../../lib/hotels';

export const dynamic = 'force-dynamic'; // Enable dynamic rendering

const getData = async () => {
  await connect(); // Ensure the model is loaded and connected
  const movies = await Property.find({}).lean();
  return JSON.parse(JSON.stringify(movies));
};

const BecomeExpert = async () => {
  const movies = await getData();

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((property) => (
          <li key={property._id}>{property.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BecomeExpert;
