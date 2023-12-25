const { default: axios } = require("axios");

const getTracks = (async (req, res) => {
    const id = req.params.id;
    
    try {
        const response = await axios.get(`https://api.deezer.com/artist/${id}/top?limit=50`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await response.json();

        return res.status(200).json({ user })
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

})

module.exports = {
    getTracks
}