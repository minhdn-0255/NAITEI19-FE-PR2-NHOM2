import axios from "../setup/axios";
const getComments = (limit, page, idShowing) => {
  return axios.get(
    `/api/v1/comment?limit=${limit}&page=${page}&idShowing=${idShowing}`
  );
};
export { getComments };
