exports.getPublic = (req, res) => {
    res.send(req.originalUrl);
}