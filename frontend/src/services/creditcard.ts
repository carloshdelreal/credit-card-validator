import axios from 'axios';

const api = 'http://localhost:3001';

const validate = async(creditCardNumber: string) => {
    return await axios.post(`${api}/validate`, { creditCardNumber });
};

export {
    validate
};
