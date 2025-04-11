import { url } from "inspector";

export interface CogProps {
	onClick: () => void;
}

export const Cog: React.FC<CogProps> = ({ onClick }) => {
	return (
		<svg
			onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="size-8 text-blue-200 cursor-pointer hover:text-blue-300 hover:rotate-12 transition-all duration-300 ease-in-out">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
			/>
		</svg>
	);
};

export const XClose: React.FC<CogProps> = ({ onClick }) => {
	return (
		<svg
			onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			className="size-8 text-red-700 cursor-pointer hover:text-red-500 hover:rotate-12 transition-all duration-300 ease-in-out ml-auto mt-4">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	);
};

export const PRFlag: React.FC = () => {
	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 36 36"
			aria-hidden="true"
			role="img"
			className="size-8 ml-1"
			preserveAspectRatio="xMidYMid meet">
			<path
				fill="#EA0B19"
				d="M32 5H4a3.978 3.978 0 0 0-2.629.99L6.923 10H36V9a4 4 0 0 0-4-4z"></path>
			<path fill="#EEE" d="M13.846 15H36v-5H6.923z"></path>
			<path fill="#EA0B19" d="M18 18l-4.154 3H36v-6H13.846z"></path>
			<path fill="#EEE" d="M6.923 26H36v-5H13.846z"></path>
			<path
				fill="#EA0B19"
				d="M1.371 30.01c.703.615 1.621.99 2.629.99h28a4 4 0 0 0 4-4v-1H6.923l-5.552 4.01z"></path>
			<path
				fill="#0F55EC"
				d="M13.846 21L18 18l-4.154-3l-6.923-5l-5.552-4.01A3.988 3.988 0 0 0 0 9v18c0 1.201.532 2.276 1.371 3.01L6.923 26l6.923-5z"></path>
			<path
				fill="#FFF"
				d="M8.187 18.838l2.313-1.675H7.641l-.888-2.726l-.89 2.726H3l2.315 1.677l-.89 2.723l2.325-1.684l2.325 1.684z"></path>
		</svg>
	);
};

export const USFlag: React.FC = () => {
	return (
		<svg
			className="size-8 ml-1"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512">
			<path
				style={{ fill: "#f5f5f5" }}
				d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
	c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
	C512,105.443,494.833,88.276,473.655,88.276z"
			/>
			<g>
				<path
					style={{ fill: "#FF4B55" }}
					d="M2.109,114.08H509.89c-5.196-15.017-19.452-25.804-36.235-25.804H38.345
		C21.561,88.276,7.306,99.063,2.109,114.08z"
				/>
				<rect
					y="191.49"
					style={{ fill: "#FF4B55" }}
					width="512"
					height="25.803"
				/>
				<rect
					y="139.88"
					style={{ fill: "#FF4B55" }}
					width="512"
					height="25.803"
				/>
				<path
					style={{ fill: "#FF4B55" }}
					d="M0,260.074c0,4.875,3.953,8.828,8.828,8.828H512v-25.804H0V260.074z"
				/>
				<rect
					y="346.32"
					style={{ fill: "#FF4B55" }}
					width="512"
					height="25.804"
				/>
				<path
					style={{ fill: "#FF4B55" }}
					d="M509.891,397.92H2.109c5.197,15.017,19.453,25.804,36.236,25.804h435.31
		C490.439,423.724,504.694,412.937,509.891,397.92z"
				/>
				<rect
					y="294.71"
					style={{ fill: "#FF4B55" }}
					width="512"
					height="25.803"
				/>
			</g>
			<path
				style={{ fill: "#41479B" }}
				d="M8.828,268.902h220.69c4.875,0,8.828-3.953,8.828-8.828V97.103c0-4.876-3.953-8.828-8.828-8.828
	H38.345C17.167,88.276,0,105.443,0,126.621v133.453C0,264.95,3.953,268.902,8.828,268.902z"
			/>
			<g>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M24.789,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928L24,122.841l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C23.463,107.778,24.535,107.778,24.789,108.537z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M24.789,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928L24,153.496l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,138.433,24.535,138.433,24.789,139.191z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M24.789,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928L24,184.151l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,169.087,24.535,169.087,24.789,169.846z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M24.789,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928L24,214.805l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,199.741,24.535,199.741,24.789,200.5z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M24.789,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928L24,245.459l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,230.396,24.535,230.396,24.789,231.154z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M48.582,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,122.808,48.329,122.808,48.582,123.566z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M48.582,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,153.462,48.329,153.462,48.582,154.221z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M48.582,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,184.116,48.329,184.116,48.582,184.875z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M48.582,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,214.771,48.329,214.771,48.582,215.529z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M72.375,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C71.049,107.778,72.122,107.778,72.375,108.537z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M72.375,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,138.433,72.122,138.433,72.375,139.191z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M72.375,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,169.087,72.122,169.087,72.375,169.846z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M72.375,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,199.741,72.122,199.741,72.375,200.5z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M72.375,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,230.396,72.122,230.396,72.375,231.154z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M96.169,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,122.808,95.916,122.808,96.169,123.566z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M96.169,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,153.462,95.916,153.462,96.169,154.221z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M96.169,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,184.116,95.916,184.116,96.169,184.875z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M96.169,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,214.771,95.916,214.771,96.169,215.529z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M119.962,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.591l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C118.636,107.778,119.709,107.778,119.962,108.537z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M119.962,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,138.433,119.709,138.433,119.962,139.191z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M119.962,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.593l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,169.087,119.709,169.087,119.962,169.846z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M119.962,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,199.741,119.709,199.741,119.962,200.5z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M119.962,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,230.396,119.709,230.396,119.962,231.154z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M143.755,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,122.808,143.502,122.808,143.755,123.566z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M143.755,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,153.462,143.502,153.462,143.755,154.221z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M143.755,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,184.116,143.502,184.116,143.755,184.875z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M143.755,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,214.771,143.502,214.771,143.755,215.529z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M167.549,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C166.222,107.778,167.296,107.778,167.549,108.537z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M167.549,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,138.433,167.296,138.433,167.549,139.191z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M167.549,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,169.087,167.296,169.087,167.549,169.846z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M167.549,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,199.741,167.296,199.741,167.549,200.5z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M167.549,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,230.396,167.296,230.396,167.549,231.154z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M191.342,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,122.808,191.089,122.808,191.342,123.566z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M191.342,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,153.462,191.089,153.462,191.342,154.221z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M191.342,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,184.116,191.089,184.116,191.342,184.875z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M191.342,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,214.771,191.089,214.771,191.342,215.529z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M215.136,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C213.81,107.778,214.882,107.778,215.136,108.537z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M215.136,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,138.433,214.882,138.433,215.136,139.191z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M215.136,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,169.087,214.882,169.087,215.136,169.846z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M215.136,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889
		c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67
		c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,199.741,214.882,199.741,215.136,200.5z"
				/>
				<path
					style={{ fill: "#f5f5f5" }}
					d="M215.136,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67
		l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889
		l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,230.396,214.882,230.396,215.136,231.154z"
				/>
			</g>
		</svg>
	);
};

// export const HorizontalGradientLogo = () => {
// 	return (
// 		<svg
// 			width="565px"
// 			height="126px"
// 			version="1.1"
// 			xmlns="http://www.w3.org/2000/svg"
// 			xmlnsXlink="http://www.w3.org/1999/xlink"
// 			xmlSpace="preserve"
// 			style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
// 			<g transform="matrix(1,0,0,1,-5.49,-8.17)">
// 				<path
// 					d="M178.11,35.04L177.59,35.04L177.59,62.06L162.34,62.06L162.34,10.39C162.34,8.91 163.01,8.17 164.49,8.17L221.93,8.17C223.41,8.17 224.08,8.91 224.08,10.39L224.08,24.9L210.02,29.64L209.35,29.64L209.35,22.46C209.35,21.87 209.13,21.65 208.68,21.65L179,21.65C177.96,21.65 177.59,22.02 177.59,22.98L177.59,33.64L202.31,33.64L202.31,45.71L182.1,45.71L178.1,35.05L178.11,35.04Z"
//           style={{fill:"url(#_Linear1)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M230.52,62.06L212.89,62.06L212.89,61.47L239.91,9.95C240.58,8.62 241.02,8.17 242.72,8.17L261.3,8.17C263,8.17 263.52,8.61 264.26,9.95L291.06,61.47L291.06,62.06L244.95,62.06L240.51,50.36L240.51,48.88L255.61,48.88C261.98,48.88 264.64,48.95 267.16,49.18L267.38,48.66C266.12,46.51 265.09,44.88 261.98,38.59L253.47,21.57C253.25,21.2 252.95,21.05 252.43,21.05L251.54,21.05C251.1,21.05 250.8,21.2 250.58,21.57L230.52,62.06Z"
//           style={{fill:"url(#_Linear2)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M368.26,62.06L368.26,21.57C368.26,20.83 367.89,20.39 367.15,20.39L366.34,20.39C365.67,20.39 365.23,20.76 365.01,21.35L350.28,60.36C349.76,61.69 348.95,62.06 347.39,62.06L329.85,62.06C328.22,62.06 327.48,61.69 326.96,60.36L312.3,21.35C312.08,20.76 311.63,20.39 310.89,20.39L310.15,20.39C309.41,20.39 308.97,20.83 308.97,21.57L308.97,62.06L294.69,62.06L294.69,10.39C294.69,8.91 295.36,8.17 296.76,8.17L321.11,8.17C322.81,8.17 323.78,8.91 324.22,10.17L337.47,48.66C337.54,48.96 337.77,49.1 338.21,49.1L339.54,49.1C339.91,49.1 340.06,48.95 340.13,48.66L353.45,10.17C353.89,8.91 354.78,8.17 356.49,8.17L380.55,8.17C381.96,8.17 382.62,8.91 382.62,10.39L382.62,62.06L368.26,62.06Z"
//           style={{fill:"url(#_Linear3)",fillRule:"nonzero"}}
// 				/>
// 				<rect
// 					x="388.76"
// 					y="8.17"
// 					width="15.25"
// 					height="53.89"
//           style={{fill:"url(#_Linear4)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M425.4,8.17L425.4,46.22C425.4,47.4 425.84,48 427.18,48L469.37,48L469.37,62.06L414.08,62.06C411.19,62.06 410.16,60.58 410.16,57.91L410.16,8.17L425.41,8.17L425.4,8.17Z"
//           style={{fill:"url(#_Linear5)",fillRule:"nonzero"}}
// 				/>
// 				<rect
// 					x="473.14"
// 					y="8.17"
// 					width="15.25"
// 					height="53.89"
//           style={{fill:"url(#_Linear6)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M509.71,62.06L492.09,62.06L492.09,61.47L519.11,9.95C519.78,8.62 520.22,8.17 521.92,8.17L540.5,8.17C542.2,8.17 542.72,8.61 543.46,9.95L570.26,61.47L570.26,62.06L524.14,62.06L519.7,50.36L519.7,48.88L534.8,48.88C541.17,48.88 543.83,48.95 546.35,49.18L546.57,48.66C545.31,46.51 544.28,44.88 541.17,38.59L532.66,21.57C532.44,21.2 532.14,21.05 531.62,21.05L530.73,21.05C530.29,21.05 529.99,21.2 529.77,21.57L509.71,62.06Z"
//           style={{fill:"url(#_Linear7)",fillRule:"nonzero"}}=
// 				/>
// 				<path
// 					d="M178.11,109.95L177.59,109.95L177.59,133.56L162.34,133.56L162.34,81.89C162.34,80.41 163.01,79.67 164.49,79.67L206.24,79.67C220.9,79.67 226.23,86.92 226.23,98.84L226.23,103.21C226.23,115.57 220.75,121.72 206.98,121.72L182.63,121.72L178.11,109.95ZM178.56,93.15C177.89,93.15 177.6,93.52 177.6,94.19L177.6,108.55L204.32,108.55C209.21,108.55 210.98,106.7 210.98,102.26L210.98,99.59C210.98,94.56 209.2,93.15 204.32,93.15L178.56,93.15Z"
//           style={{fill:"url(#_Linear8)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M248.21,107.58L248.21,133.56L232.96,133.56L232.96,81.89C232.96,80.41 233.63,79.67 235.03,79.67L277.15,79.67C290.55,79.67 295.36,86.26 295.36,96.92L295.36,100.77C295.36,111.21 290.55,117.65 277.74,117.65L276.19,117.65C274.71,117.65 273.6,117.65 272.56,117.58L272.56,118.1C273.82,119.28 275.15,120.77 276.33,122.25L284.92,132.98L284.92,133.57L267.75,133.57L248.73,107.59L248.21,107.59L248.21,107.58ZM249.24,93.15C248.65,93.15 248.2,93.52 248.2,94.41L248.2,106.18L274.4,106.18C278.4,106.18 280.02,104.85 280.02,100.48L280.02,98.63C280.02,94.48 278.39,93.15 274.4,93.15L249.23,93.15L249.24,93.15Z"
//           style={{fill:"url(#_Linear9)",fillRule:"nonzero"}}
// 				/>
// 				<rect
// 					x="301.87"
// 					y="79.67"
// 					width="15.25"
// 					height="53.89"
//           style={{fill:"url(#_Linear10)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M350.2,79.67C352.42,79.67 353.16,80.34 353.9,81.82L374.33,120.53C374.63,121.05 375.07,121.42 375.74,121.42L376.55,121.42C377.29,121.42 377.73,120.98 377.73,120.24L377.73,79.68L391.57,79.68L391.57,131.42C391.57,132.83 390.9,133.57 389.5,133.57L367.59,133.57C365.52,133.57 364.7,133.05 363.81,131.42L342.64,92.78C342.34,92.19 341.97,91.89 341.23,91.89L340.49,91.89C339.68,91.89 339.31,92.33 339.31,93.07L339.31,133.56L325.47,133.56L325.47,81.89C325.47,80.41 326.14,79.67 327.54,79.67L350.2,79.67Z"
//           style={{fill:"url(#_Linear11)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M439.25,93.15L439.25,133.57L424,133.57L424,93.15L401.65,93.15L396.69,80.27L396.69,79.68L468.12,79.68C469.6,79.68 470.27,80.42 470.27,81.9L470.27,95.89L456.13,101.15L455.54,101.15L455.54,93.97C455.54,93.38 455.32,93.16 454.73,93.16L439.26,93.16L439.25,93.15Z"
//           style={{fill:"url(#_Linear12)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M115.36,101.88L61.22,101.88L61.22,132.88L118.44,132.88C127.29,132.88 134.47,125.82 134.47,117.12L134.47,86.36C132.75,95.2 124.86,101.88 115.36,101.88Z"
//           style={{fill:"url(#_Linear13)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M74.61,80.46L106.27,80.46C108.75,80.46 110.76,78.48 110.76,76.04L110.76,57.01C110.76,54.57 108.75,52.59 106.27,52.59L75.6,52.59L89.03,66.02L74.61,80.44L74.61,80.46Z"
//           style={{fill:"url(#_Linear14)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M117.84,8.45L34.21,8.45L57.55,31.96L114.61,31.96C124.6,31.96 132.9,38.99 134.71,48.29L134.71,25.04C134.71,15.88 127.16,8.45 117.84,8.45Z"
//           style={{fill:"url(#_Linear15)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M83.86,66.04L70.43,52.61L45.46,52.61L45.27,42.63L38.87,52.61L30.69,52.61L30.69,31.97L52.37,31.97L29.44,8.82L21.15,8.82C19.19,8.82 17.22,9.13 15.42,9.93C15.41,9.93 15.4,9.93 15.39,9.94C9.55,12.55 5.49,18.32 5.49,25.04L5.49,116.41C5.49,125.57 13.04,133 22.36,133L30.7,133L30.7,80.46L40.34,80.46L46.12,85.77L46.01,80.46L69.45,80.46L83.87,66.04L83.86,66.04Z"
//           style={{fill:"url(#_Linear16)",fillRule:"nonzero"}}
// 				/>
// 				<path
// 					d="M44.29,68.76L44.55,82.35L35.41,73.95L21.84,81.88L30.07,69.05L20.98,60.69L35.43,60.69L43.87,47.53L44.13,60.69L58.08,60.69L44.29,68.76Z"
// 					style={{fill:"white",fillRule:"nonzero"}}
// 				/>
// 			</g>
// 			<defs>
// 				<linearGradient
// 					id="_Linear1"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(1.29261e-15,21.11,-21.11,1.29261e-15,193.21,22.72)">
// 					<stop offset="0"
//             style={{stopColor:"rgb(82,104,186)",stopOpacity:1}}/>
// 					<stop
// 						offset="0.21"
//             style={{stopColor:"rgb(71,98,182)",stopOpacity:1}}
// 					/>
// 					<stop
// 						offset="0.57"
//             style={{stopColor:"rgb(41,83,174)",stopOpacity:1}}
// 					/>
// 					<stop offset="1"
//           style={{stopColor:"rgb(0,63,162)",stopOpacity:1}}
//           />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear2"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,19910.2,1232.55)">
// 					<stop offset="0"

//             style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear3"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,30072.2,1232.55)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear4"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,6433.71,1232.55)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear5"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,26448.3,1232.55)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear6"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,7804.73,1232.55)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear7"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(6.9659e-14,1137.62,-1137.62,6.9659e-14,42013.6,1232.55)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(0,63,162);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear8"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(1.83085e-15,29.9,-29.9,1.83085e-15,194.28,90.04)">
// 					<stop offset="0" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 					<stop
// 						offset="0.22"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="0.6" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop offset="1" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear9"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(9.86827e-14,1611.61,-1611.61,9.86827e-14,16716.5,4932.83)">
// 					<stop offset="0" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 					<stop
// 						offset="0.22"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="0.6" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop offset="1" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear10"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(9.86643e-14,1611.31,-1611.31,9.86643e-14,5021.59,4931.93)">
// 					<stop offset="0" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 					<stop
// 						offset="0.22"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="0.6" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop offset="1" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear11"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(9.86827e-14,1611.61,-1611.61,9.86827e-14,24024.3,4932.83)">
// 					<stop offset="0" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 					<stop
// 						offset="0.22"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="0.6" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop offset="1" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear12"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(9.86643e-14,1611.31,-1611.31,9.86643e-14,32291.4,4931.94)">
// 					<stop offset="0" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 					<stop
// 						offset="0.22"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="0.6" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop offset="1" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear13"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(-95.5,1.16954e-14,-1.16954e-14,-95.5,132.4,109.62)">
// 					<stop offset="0" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 					<stop offset="0.4" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop
// 						offset="0.78"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear14"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(-3452.32,4.22788e-13,-4.22788e-13,-3452.32,4860.87,1906.78)">
// 					<stop offset="0" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 					<stop offset="0.4" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop
// 						offset="0.78"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear15"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(-9597.75,1.17539e-12,-1.17539e-12,-9597.75,13340.4,1138.71)">
// 					<stop offset="0" style="stop-color:rgb(167,21,61);stop-opacity:1" />
// 					<stop offset="0.4" style="stop-color:rgb(179,57,81);stop-opacity:1" />
// 					<stop
// 						offset="0.78"
// 						style="stop-color:rgb(189,87,97);stop-opacity:1"
// 					/>
// 					<stop offset="1" style="stop-color:rgb(193,98,104);stop-opacity:1" />
// 				</linearGradient>
// 				<linearGradient
// 					id="_Linear16"
// 					x1="0"
// 					y1="0"
// 					x2="1"
// 					y2="0"
// 					gradientUnits="userSpaceOnUse"
// 					gradientTransform="matrix(-4037.35,4.94433e-13,-4.94433e-13,-4037.35,6024.29,8814.42)">
// 					<stop offset="0" style="stop-color:rgb(82,104,186);stop-opacity:1" />
// 					<stop
// 						offset="0.21"
// 						style="stop-color:rgb(71,98,182);stop-opacity:1"
// 					/>
// 					<stop
// 						offset="0.57"
// 						style="stop-color:rgb(41,83,174);stop-opacity:1"
// 					/>
// 					<stop offset="1"
//             style={{stopColor:"rgb(0,63,162)",stopOpacity:1}} />
// 				</linearGradient>
// 			</defs>
// 		</svg>
// 	);
// };
