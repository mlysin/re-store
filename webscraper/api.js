var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on port http://localhost:3000");
});

const scraper = require("./scraper");


app.get("/scrape", async (req, res, next) => {
    var zoom = req.query.zoom,
        lat = req.query.lat,
        long = req.query.long;

    // return scraper(zoom, lat, long).then((resp) =>{

    var resp = await scraper(zoom, lat, long);

    if (resp && !resp.base64Str)
        console.log(res.status)

    console.log("returning response")
    // console.log(res)

    if (!resp) {
        resp = {
            status: 404
        }
    }

    var response = {
        people: ["Tony", "Lisa", "Michael", "Ginger"],
        status: resp.status,
        // req.query
        base64Str: resp.base64Str
    }

    res.setHeader('Content-Type', 'application/json');
    res.json(response);
    // })

});

// console.log('todo list RESTful API server started on: ' + port);
