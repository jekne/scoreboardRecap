// src/components/Scoreboard.js
import { useState } from "react";
import AddPlayer from "./AddPlayerForm";
import Player from "./Players";
import "./Scoreboard.scss";

function compareScore(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("name");

  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const playersSorteByNameOrScore = [...players].sort(
    sort_by === "name" ? compare_name : compareScore
  );

  const change_sorting = (event) => {
    // console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  //   const [score, setScore] = useState();
  //   console.log(`this is my score ${score} and my  setScore ${setScore}`);

  const incrementScore = (x) => {
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === x) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });

    set_players(new_players_array);
  };
  const resetScore = (x) => {
    const secon_new_array = players.map((player) => ({
      ...player,
      score: 0,
    }));
    set_players(secon_new_array);
  };

  const randomize = (x) => {
    const third_new_array = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 100),
    }));
    set_players(third_new_array);
  };

  const addPlayer = (name) => {
    console.log("Add a new player with the name:", name);
    set_players([...players, { id: Math.random(), name, score: 0 }]);
  };

  //   const playerSortedByALphabetical = [...players].sort((a, b) =>
  //     a.name.localeCompare(b.name)
  //   );
  //   const playerSortedByALphabeticalOrder = [...players].sort(function (a, b) {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   const playersSortedByScore = [...players].sort(compareScore);

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <ul>
        {playersSorteByNameOrScore.map((x) => {
          return (
            <Player
              key={x.id}
              id={x.id}
              name={x.name}
              score={x.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayer addplayerconectwithaddplayer={addPlayer} />
      <button onClick={resetScore}>START AGAIN</button>
      <button onClick={randomize}>RANDOMIZE </button>
    </div>
  );
}
