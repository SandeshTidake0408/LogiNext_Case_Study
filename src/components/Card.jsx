import React, { useState } from "react";
import {
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined,
	HeartOutlined,
	EditOutlined,
	DeleteFilled,
	HeartFilled,
} from "@ant-design/icons";

const Card = ({
	image,
	name,
	email,
	phone,
	website,
	onDeleteClick,
	onUpdateClick,
}) => {
	const [isHeartClicked, setIsHeartClicked] = useState(false);

	const handleHeartClick = () => {
		setIsHeartClicked(!isHeartClicked);
	};

	return (
		<div className="flex flex-col gap-2  min-w-72 border border-gray-300 rounded-sm">
			<div className="flex items-center justify-center bg-gray-200 w-full h-[150px]">
				<img
					className="w-full h-full  pt-5 object-contain"
					src={image}
					alt=""
				/>
			</div>

			<div className="px-5 py-3 text-sm">
				<p className="font-medium text-base my-1">{name}</p>
				<div className="flex gap-4 ">
					<MailOutlined />
					<p>{email}</p>
				</div>
				<div className="flex gap-4">
					<PhoneOutlined />
					<p>{phone}</p>
				</div>
				<div className="flex gap-4">
					<GlobalOutlined />
					<a href={website}>{website}</a>
				</div>
			</div>
			<div className="flex justify-between items-center px-5 py-3 border-t bg-gray-100 border-t-gray-300 space-x-1">
				<button
					className="border-r border-gray-300 w-full bg-transparent"
					onClick={handleHeartClick}
				>
					{isHeartClicked ? (
						<HeartFilled className="text-red-500" />
					) : (
						<HeartOutlined />
					)}
				</button>
				<button
					className="border-r border-gray-300 w-full bg-transparent"
					onClick={onUpdateClick}
				>
					<EditOutlined />
				</button>
				<button
					className="px-3 w-full bg-transparent"
					onClick={onDeleteClick}
				>
					<DeleteFilled />
				</button>
			</div>
		</div>
	);
};

export default Card;
