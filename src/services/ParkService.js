import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://developer.nps.gov/api/v1/parks?&API_KEY=Ernt9S3tcAQD6ZL3eZviVgGKVHY5X1hdhTh0Thru",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getParks() {
    return apiClient.get("/parks");
  },
  getPark(id) {
    return apiClient.get("/parks" + id);
  },
};
