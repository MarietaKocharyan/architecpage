global.fetch = require('node-fetch');
const config = require('universal-config');
const Unspalsh = require('unsplash').default;
const toJonson = require('unspalsh').toJson;
const express = require('express')

const unsplash = new Unspalsh({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('secret'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhotos(1, 30)
        .then(toJonson)
        .thean(json => res.json(json))
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server starts on port ${PORT}`));