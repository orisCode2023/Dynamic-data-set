import readCsv from "../utils/readFiels.js";

export async function tdController(req, res) {
    try {
        const tData = await readCsv()
        if (tData) {
            res.status(200).json({msg: 'get data complete', data: tData})
        }
    } catch (error) {
        res.status(500).json({ msg: "error" + err.message, data: null });
    }

}