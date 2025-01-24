import React, { useState } from "react";

function UpdateDetails({ id, setData, onCancel }) {
	const [newData, setNewData] = useState({
		name: "",
		email: "",
		phone: "",
		website: "",
	});

	const onInputChange = (e) => {
		setNewData({ ...newData, [e.target.name]: e.target.value });
	};

	const onUpdate = () => {
		if (!id) {
			alert("No user selected for update!");
			return;
		}

		for (let key in newData) {
			if (newData[key] === "") {
				alert("All fields are required!");
				return;
			}
		}

		// update in original data object from api
		setData((prevData) =>
			prevData.map((user) =>
				user.id === id ? { ...user, ...newData } : user
			)
		);
		onCancel(); // Close the modal after updating
	};

	return (
		<div className=" fixed inset-0 bg-black bg-opacity-80 flex  flex-col justify-center items-center z-50">
			<div className="bg-white p-6 rounded-sm min-w-80">
				<p className="text-xl font-medium text-gray-700 border-b p-4">
					Update Details
				</p>
				<div className="bg-white p-6 rounded-sm min-w-80 flex flex-col items-end gap-4 ">
					<div className="">
						<label htmlFor="name">Name: </label>
						<input
							onChange={onInputChange}
							value={newData.name}
							className="border border-gray-400 outline-none rounded w-72"
							type="text"
							name="name"
							id=""
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="email">Email: </label>
						<input
							onChange={onInputChange}
							value={newData.email}
							className="border border-gray-400 outline-none rounded w-72"
							type="text"
							name="email"
							id=""
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="phone">Phone: </label>
						<input
							onChange={onInputChange}
							value={newData.phone}
							className="border border-gray-400 outline-none rounded w-72"
							type="text"
							name="phone"
							id=""
							required={true}
						/>
					</div>
					<div>
						<label htmlFor="website">Website: </label>
						<input
							onChange={onInputChange}
							value={newData.website}
							className="border border-gray-400 outline-none rounded w-72"
							type="text"
							name="website"
							id=""
							required={true}
						/>
					</div>
				</div>

				<div className="flex justify-end gap-4 mt-4 text-base border-t pt-4">
					<button
						className="px-5 py-1 border rounded-sm border-gray-400"
						onClick={onCancel}
					>
						Cancel
					</button>
					<button
						className="px-5 py-1 border rounded-sm text-white bg-blue-600"
						onClick={onUpdate}
					>
						Update
					</button>
				</div>
			</div>
		</div>
	);
}

export default UpdateDetails;
