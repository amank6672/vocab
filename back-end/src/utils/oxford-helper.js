require('dotenv').config()
const axios = require('axios');

const fetchWord = async (search) => {
    try {

        let response = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${search}?fields=definitions,examples,pronunciations,regions,registers,variantForms&strictMatch=false`,{
            headers: {
                'app_id': process.env.APPLICATION_ID,
                'app_key': process.env.APPLICATION_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.response)
        return null;
    }
}

module.exports = {
    fetchWord
}