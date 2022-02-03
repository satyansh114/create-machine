const url = "http://10.1.76.92:8000";

const ApiConfig = {
  machines: {
    getAllMachines:`${url}/machine/getAllMachines`,
    createMachine: `${url}/machine/create-machine`,
  },
};

export default ApiConfig;
