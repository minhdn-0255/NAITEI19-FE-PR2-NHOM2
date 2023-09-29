import axios from "../setup/axios";
const getAllTicket = () => {
    return axios.get(`/api/v1/ticket`);
};
export { getAllTicket };
