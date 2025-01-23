import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import DeleteConfirmation from "./DeleteConfirmation";
import UpdateDetails from "./UpdateDetails";
import LoadingBar from "./LoadingBar";

const ProfileCard = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
	const [deleteId, setDeleteId] = useState(null);

	const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState(null);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setTimeout(() => {
					setData(response.data);
					setLoading(false);
				}, 2000); // just to show the loading bar
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	// delete handelers
	const handleDeleteClick = (id) => {
		setDeleteId(id);
		setIsDeleteModalVisible(true);
	};

	const handleConfirmDelete = () => {
		setData(data.filter((user) => user.id !== deleteId));
		setIsDeleteModalVisible(false);
	};

	const handleCancelDelete = () => {
		setIsDeleteModalVisible(false);
	};

	//update handlers

	const handleUpdateClick = (user) => {
		setSelectedUserId(user.id);
		setIsUpdateModalVisible(true);
	};

	const handleCancelUpdate = () => {
		setIsUpdateModalVisible(false);
	};
	return (
		<>
			{loading ? (
				<LoadingBar />
			) : (
				<ul className="flex flex-wrap gap-4 justify-center">
					{data.map((user) => (
						<li key={user.id} className="">
							<Card
								image={`https://api.dicebear.com/9.x/avataaars/svg`}
								name={user.name}
								email={user.email}
								phone={user.phone}
								website={user.website}
								onDeleteClick={() => handleDeleteClick(user.id)}
								onUpdateClick={() => handleUpdateClick(user)}
							/>
						</li>
					))}
				</ul>
			)}
			{isDeleteModalVisible && (
				<DeleteConfirmation
					onDeleteClick={handleConfirmDelete}
					onCancelDelete={handleCancelDelete}
				/>
			)}
			{isUpdateModalVisible && (
				<UpdateDetails
					id={selectedUserId}
					setData={setData}
					onCancel={handleCancelUpdate}
				/>
			)}
		</>
	);
};

export default ProfileCard;
