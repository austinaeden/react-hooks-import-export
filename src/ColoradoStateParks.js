import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  RMFunctions.wildlife();//=> "Elk, Bighorn Sheep, Moose"
  console.log(RMFunctions.trees);

  return (
    <div>
      <MesaVerde/>
      <h1>Colorado State Parks!</h1>
    </div>

  );
}

export default ColoradoStateParks;