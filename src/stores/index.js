import { defineStore } from "pinia";
import ParkService from "../services/ParkService";

export const useParkStore = defineStore("ParkStore", {
  state() {
    return {
      parks: [],
      park: null,
      planparks: [],
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
    fetchParks(page) {
      return ParkService.getParks(page)
        .then((response) => {
          this.parks = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    addPark(park) {
      return ParkService.postPark(park)
        .then(() => {
          this.planparks.push(park);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});
