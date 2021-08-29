import React from "react";
import PropTypes from "prop-types";

// aquí está el div que tiene 1 canción que luego duplicamos varias veces en home

const SongDiv = props => {
	return (
		<header
			onClick={() => {
				props.play();
			}}>
			<div className="titles">
				<span className="p1 uppercase">{props.songName}</span>
				<span className="p2">{props.artistName}</span>
			</div>

			<div className="dropdown icon-right dropstart">
				<button
					className="btn"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					<i className="fas fa-ellipsis-h heart-icon-class fa-xs"></i>
				</button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							<i className="far fa-heart"></i> Like
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							<i className="fas fa-ban"></i> Hide song
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							<i className="fas fa-plus"></i> Add to playlist
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

SongDiv.propTypes = {
	songName: PropTypes.string,
	artistName: PropTypes.string,
	play: PropTypes.func
};

export default SongDiv;
