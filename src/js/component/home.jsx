import React, { useEffect, useState } from "react";
import SongDiv from "./songDiv.jsx";
import AlbumInfoDiv from "./albumInfoDiv.jsx";

const url = "https://assets.breatheco.de/apis/sound/songs";

const Home = () => {
	const [song, setSong] = useState([]);
	const [actualSong, setActualSong] = useState("");
	const [actualIndexSong, setActualIndexSong] = useState();
	const [actualTitleSong, setActualTitleSong] = useState("");

	let manySongs = [];
	useEffect(() => {
		fetch(url, { method: "GET" })
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(songsJson => {
				setSong(songsJson);
			})
			.catch(function(error) {
				console.log(
					"You cannot listen to Justin Bieber is new glorius album",
					error
				);
			});
	}, []);

	for (let i = 19; i < song.length; i++) {
		manySongs.push(
			<SongDiv
				songName={song[i].name}
				artistName="Justin Bieber"
				key={i.toString()}
				url={song[i].url}
				play={() => {
					setActualSong(song[i].url);
					setActualTitleSong(song[i].name);
					setActualIndexSong(i);
				}}
			/>
		);
	}

	return (
		<div className="home-div">
			<AlbumInfoDiv />
			{manySongs}
			<div className="player-class">
				<div className="player-header">
					<button
						className="button-class"
						onClick={() => {
							if (actualIndexSong != 0) {
								setActualSong(song[actualIndexSong - 1].url);
								setActualIndexSong(actualIndexSong - 1);
								setActualTitleSong(
									song[actualIndexSong - 1].name
								);
							} else {
								setActualSong(song[song.length - 1].url);
								setActualIndexSong(song.length - 1);
								setActualTitleSong(song[song.length - 1].name);
							}
						}}>
						<i className="fas playcons fa-chevron-circle-left"></i>
					</button>
					<span className="songName">{actualTitleSong}</span>
					<button
						className="button-class"
						onClick={() => {
							if (actualIndexSong != song.length - 1) {
								setActualSong(song[actualIndexSong + 1].url);
								setActualIndexSong(actualIndexSong + 1);
								setActualTitleSong(
									song[actualIndexSong + 1].name
								);
							} else {
								setActualSong(song[0].url);
								setActualIndexSong(0);
								setActualTitleSong(song[0].name);
							}
						}}>
						<i className="fas playcons fa-chevron-circle-right"></i>
					</button>
				</div>
				<div className="audio-container">
					<audio
						controls
						autoPlay
						src={"https://assets.breatheco.de/apis/sound/".concat(
							actualSong
						)}>
						Your browser does not support the
						<code>audio</code> element.
					</audio>
				</div>
			</div>
		</div>
	);
};

export default Home;
