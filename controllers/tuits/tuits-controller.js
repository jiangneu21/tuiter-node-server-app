import posts from "./tuits.js";
import * as tuitsDao from '../tuits/tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.userName = 'NASA';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislike = 0;
    newTuit.time = 'now';
    newTuit.image = '../../tuiter/images/nasa.jpeg';
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
// import posts from "./tuits.js";
// let tuits = posts;
// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = (new Date()).getTime();
//     newTuit.userName = 'NASA';
//     newTuit.likes = 0;
//     newTuit.liked = false;
//     newTuit.dislike = 0;
//     newTuit.time = 'now';
//     newTuit.image = '../../tuiter/images/nasa.jpeg';
//     tuits.push(newTuit);
//     res.json(newTuit);
// }
// const findTuits = (req, res) => {
//     res.json(tuits);
// }
// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updates = req.body;
//     const tuitIndex = tuits.findIndex(
//         (t) => t._id === tuitdIdToUpdate)
//     tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
//     res.sendStatus(200);
// }
// const deleteTuit = (req, res) => {
//     const tuitIdToDelete = req.params.tid;
//     tuits = tuits.filter((t) =>
//                              t._id !== tuitIdToDelete);
//     res.sendStatus(200);
// }
//
// export default (app) => {
//     app.post('/api/tuits', createTuit);
//     app.get('/api/tuits', findTuits);
//     app.put('/api/tuits/:tid', updateTuit);
//     app.delete('/api/tuits/:tid', deleteTuit);
// }