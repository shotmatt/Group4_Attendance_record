exports.publicContent = (req, res) => {
    res.status(200).send("public content");
};

exports.protectedContent = (req, res) => {
    res.status(200).send("protected content");
};