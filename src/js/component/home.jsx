import React, { useEffect, useState } from "react";
import SongDiv from "./songDiv.jsx";
import AlbumInfoDiv from "./albumInfoDiv.jsx";

const URL_SOURCE = "https://assets.breatheco.de/apis/sound/";

const Home = () => {
	const [songList, setSongList] = useState([]);
	const [actualSong, setActualSong] = useState({});

	useEffect(() => {
		fetch(URL_SOURCE.concat("songs"), {
			method: "GET"
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						"Something went awfully wrong, quite a catastrophe is taking place... May the gods have marcy on us all!"
					);
				}
			})
			.then(responseAsJson => {
				setSongList(responseAsJson);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		if (songList.length) {
			setActualSong({ ...songList[0], position: 0 });
		}
	}, [songList]);

	const nextSong = () => {
		let position = actualSong.position + 1;

		if (position < songList.length) {
			setActualSong({ ...songList[position], position: position });
		} else {
			setActualSong({ ...songList[0], position: 0 });
		}
	};

	const prevSong = () => {
		let position = actualSong.position - 1;

		if (position < 0) {
			setActualSong({
				...songList[songList.length - 1],
				position: setSongList.length - 1
			});
		} else {
			setActualSong({ ...songList[position], position: position });
		}
	};

	const playThisSong = positionFunc => {
		setActualSong({ ...songList[positionFunc], position: positionFunc });
	};

	let manySongs = songList.map((parameterSong, index) => {
		return (
			<SongDiv
				key={index.toString()}
				songName={parameterSong.name}
				chooseSong={playThisSong}
				positionFuncProp={index}
				artistName="BLACKPINK"
			/>
		);
	});

	return (
		<div className="home-div">
			<AlbumInfoDiv />
			{manySongs}

			<div className="audio-player">
				<div className="timeline">
					<div className="progress"></div>
				</div>
				<div className="controls">
					<div className="play-container">
						<div className="toggle-play play"></div>
					</div>
					<div className="time">
						<div className="current">0:00</div>
						<div className="divider">/</div>
						<div className="length"></div>
					</div>
					<div className="Name">Music Song</div>
					<div className="volume-container">
						<div className="volume-button">
							<div className="volume icono-volumeMedium"></div>
						</div>

						<div className="volume-slider">
							<div className="volume-percentage"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="player-class">
				<figure>
					<audio
						controls
						src={URL_SOURCE.concat(actualSong.url)}
						onEnded={() => {
							nextSong();
						}}>
						Sadly, your browser remains uselss against its need to
						support the <code>audio</code> element.
					</audio>
				</figure>
				<div>
					<button
						className="button-class"
						onClick={() => {
							prevSong();
						}}>
						<i className="fas fa-step-backward"></i>
					</button>
					<button
						className="button-class"
						onClick={() => {
							playThisSong();
						}}>
						<i className="fas fa-play-circle fa-2x"></i>
					</button>
					<button
						className="button-class"
						onClick={() => {
							nextSong();
						}}>
						<i className="fas fa-step-forward"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
