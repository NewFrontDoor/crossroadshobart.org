/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
	return (
		<div
			sx={{
				zIndex: 0,
				position: "relative",
				width: "100%",
				paddingTop: "2rem",
				paddingBottom: "2rem",
				backgroundColor: "dark",
				color: "white"
			}}
		>
			<div
				sx={{
					maxWidth: "1170px",
					margin: "auto",
					minHeight: "1em",
					fontSize: "0.85rem",
					textAlign: "center"
				}}
			>
				<p>© Crossroads Presbyterian Church 2022</p>
				<p>25 Tasma St, North Hobart TAS 7000, Australia</p>
			</div>
		</div>
	);
};

export default Footer;
