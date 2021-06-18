import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import axios from "axios";

export interface Photo {
  id: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  image: Image;
  displayOrder: number;
}
export interface Image {
  url: string;
  height: number;
  width: number;
}

// define your typings for the store state
export interface State {
  photos: Photo[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    photos: [],
  },
  mutations: {
    increment(state, photos) {
      state.photos = photos;
    },
  },
  actions: {
    async getPhotos(context) {
      const res = await axios.get(
        "https://ispec-test.microcms.io/api/v1/photo",
        {
          headers: { "x-api-key": process.env.VUE_APP_X_API_KEY },
        }
      );
      context.commit("increment", res.data.contents);
    },
  },
  getters: {
    getPhotos: (state) => {
      return state.photos.sort((a, b) => a.displayOrder - b.displayOrder);
    },
  },
});
