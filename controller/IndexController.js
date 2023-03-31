const IndexController = {
    index: (req, res) =>
    {
        res.send("<h1>Hello world</h1>")
    },
    home: (req, res) =>
    {
        res.send("<h1>This is Home Page</h1>")
    }
}
module.exports = IndexController