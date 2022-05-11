import { defineStore } from "pinia";
import ParkService from "../services/ParkService";

export const useParkStore = defineStore("ParkStore", {
  state() {
    return {
      parks: [],
      park: null,
    };
  },
  getters: {
    numberOfParks: (state) => state.parks.length,
  },
  actions: {
    fetchPark(id) {
      return ParkService.getPark(id)
        .then((response) => {
          this.park = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchParks() {
      return ParkService.getParks()
        .then((response) => {
          this.parks = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
