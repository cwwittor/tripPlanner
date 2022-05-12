import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://developer.nps.gov/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    API_KEY: "Ernt9S3tcAQD6ZL3eZviVgGKVHY5X1hdhTh0Thru",
  },
});

export default {
  getParks(page = 1) {
    console.log(page);
    return apiClient.get("/parks", {
      params: { start: (page - 1) * 50 },
    });
  },
  getPark(id) {
    return apiClient.get("/parks", {
      params: { parkCode: id },
      transformResponse: axios.defaults.transformResponse.concat(
        (data) => data.data[0]
      ),
    });
  },
  postPark(park) {
    return apiClient.post("/parks", park);
  },
};
