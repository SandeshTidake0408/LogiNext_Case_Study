import React from "react";

function DeleteConfirmation({ onCancelDelete, onDeleteClick }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-sm min-w-80">
				<p className="mb-4">Do you want to delete this card?</p>
				<div className="flex justify-end gap-4 mt-4">
					<button
						className="px-4 py-1 bg-green-400 text-white rounded-sm"
						onClick={onCancelDelete}
					>
						Cancel
					</button>
					<button
						className="px-4 py-1 bg-red-500 text-white rounded-sm"
						onClick={onDeleteClick}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteConfirmation;
