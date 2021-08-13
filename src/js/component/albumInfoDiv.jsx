import React, { Fragment, useState } from "react";

// esto es puro adorno y decoración pa la cabecera, no hay que tocar nada aquí para lo que falta...

const AlbumInfoDiv = () => {
	const [heartIcon, setHeartIcon] = useState(
		<i className="far fa-heart heart-icon-class"></i>
	);

	const [downloadIcon, setDownloadIcon] = useState(
		<i className="far fa-arrow-alt-circle-down heart-icon-class icon-left icon-top"></i>
	);

	const [fill, setFill] = useState(true);

	const changeHeart = () => {
		if (fill == true) {
			setHeartIcon(<i className="fas fa-heart green-icon-class"></i>);
			setFill(false);
		} else {
			setHeartIcon(<i className="far fa-heart heart-icon-class"></i>);
			setFill(true);
		}
	};

	const changeDownloadIcon = () => {
		if (fill == true) {
			setDownloadIcon(
				<i className="far fa-arrow-alt-circle-down green-icon-class icon-left icon-top"></i>
			);
			setFill(false);
		} else {
			setDownloadIcon(
				<i className="far fa-arrow-alt-circle-down heart-icon-class icon-left icon-top"></i>
			);
			setFill(true);
		}
	};

	return (
		<Fragment>
			<div className="album-cover-div">
				<span className="img-cover">
					<img src="https://images-na.ssl-images-amazon.com/images/I/61%2BWf3mHoOL._SL1200_.jpg"></img>
				</span>
			</div>
			<div className="album-info-div">
				<div className="titles">
					<span className="p3">THE ALBUM</span>
					<span className="p2">
						<i className="fas fa-user-circle"></i> BLACKPINK
					</span>
					<span className="p2">Album · 2020</span>
					<div>
						<span onClick={() => changeHeart()}>{heartIcon}</span>
						<span onClick={() => changeDownloadIcon()}>
							{downloadIcon}
						</span>
					</div>
				</div>
				<i className="fab fa-3x fa-spotify green-icon-class icon-right icon-top"></i>
			</div>
		</Fragment>
	);
};

export default AlbumInfoDiv;
