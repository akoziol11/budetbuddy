// Future work: add more options and the ability to allocate
// a certain amount of the budget to each expense

const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createOption = (label, value) => {
  return axios({
    method: "post",
    url: `${url}/options`,
    data: {
      label,
      value
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllOptions = () => {
  return (
    axios
      // .get(`${url}/users`)
      .get("./Services/options.json")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
      })
  );
};
