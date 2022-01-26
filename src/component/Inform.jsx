import "../styles.css";

export default function Inform({ data }) {
  return (
    <div className="App">
      <ul className="List">
        {data.map((data) => (
          <li key={data.id}>
            <strong>Name:</strong> {data.name}
            <br />
            <strong>Username:</strong>
            {data.username}
            <br />
            <strong>Email:</strong>
            {data.email}
            <br />
            <strong>Adress:</strong>
            {data.address.city}, {data.address.street}, {data.address.suite}
            <br />
            <strong>Phone:</strong>
            {data.phone}
            <br />
            <strong>Website:</strong>
            {data.website}
            <br />
            <strong>Company Name:</strong>
            {data.company.name}
            <br />
            <strong>Company Catchphrase:</strong>
            {data.company.catchPhrase}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
