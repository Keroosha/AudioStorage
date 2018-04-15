import vModule from "./module";
import $ from "axios";

export default class AudioLibrary extends vModule{
  constructor () {
    super();

    this.module.name = "AudioLibrary";
    this.module.state = {
      Artists: [],
      Albums: []
    };

    this.module.actions = {
      loadAlbums: ({state, mutations}) => {
        $.get("http://localhost:9000/api/Music/Albums")
          .then((data) => {
            mutations.bindAlbums(data);
          })
          .catch((error) => {
            debugger;
            console.log(error);
          });
      }
    };

    this.module.mutations = {
      bindAlbums: (state, payload) => {
        state[this.module.name].Albums = [];
        state[this.module.name].Albums = payload;
      }
    }
  }
}
