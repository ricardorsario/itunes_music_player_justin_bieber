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
			setHeartIcon(<i className="fas fa-heart new-icon-class"></i>);
			setFill(false);
		} else {
			setHeartIcon(<i className="far fa-heart heart-icon-class"></i>);
			setFill(true);
		}
	};

	const changeDownloadIcon = () => {
		if (fill == true) {
			setDownloadIcon(
				<i className="far fa-arrow-alt-circle-down new-icon-class icon-left icon-top"></i>
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
					<img src="https://images-na.ssl-images-amazon.com/images/I/81MP3AopvxL._SL1400_.jpg"></img>
				</span>
			</div>
			<div className="album-info-div">
				<div className="titles">
					<span className="p3">Justice</span>
					<span className="p2">
						<i className="fas fa-user-circle"></i> Justin Bieber
					</span>
					<span className="p4">POP • 2021</span>
					<div>
						<span onClick={() => changeHeart()}>{heartIcon}</span>
						<span onClick={() => changeDownloadIcon()}>
							{downloadIcon}
						</span>
					</div>
				</div>
				<div className="circle icon-top icon-right">
					<i className="fab fa-2x green-icon-class fa-itunes-note"></i>
				</div>
			</div>
		</Fragment>
	);
};

export default AlbumInfoDiv;
