import React from "react";

const Player = () => {
	return (
		<div className="player-class">
			<audio controls>Your browser does not support the audio tag.</audio>
		</div>
	);
};

export default Player;

// INFO DEL AUDIO CONTRORL, pone que dentro del tag audio se pone el enlace a la música...
// https://www.w3schools.com/tags/tag_audio.asp

/*
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
*/
