import { writeToJsonData, readJson } from "../utils/jsonHndler.js";

export async function getScoreController(req, res) {
    const { score } = req.body;
    if (!score) {
        res.status(400).json({ message: 'score not found' });
    }
    else {
        await writeToJsonData(score)
        res.status(201).json({message: 'score recived succefully', data: await readJson() })
    }
}