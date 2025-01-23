import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

const ProfileCard = () => {
	// Component name should start with an uppercase letter
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setData(response.data); // Set the response data
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading...</p> // Display loading text or animation
			) : (
				<ul>
					{data.map((user) => (
						<li key={user.id}>
							<h2>{user.name}</h2>
							<p>Email: {user.email}</p>
							<p>Phone: {user.phone}</p>
							<p>Company: {user.company.name}</p>
							<p>
								Address: {user.address.street},{" "}
								{user.address.suite}, {user.address.city},{" "}
								{user.address.zipcode}
							</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default ProfileCard;
