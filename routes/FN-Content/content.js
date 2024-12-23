const errors = require("../../responses/errors.json");
const createError = require("../../utils/error");

const functions = require("../../utils/functions");

async function content(fastify, options) {
    fastify.get('/content/api/pages/fortnite-game', (request, reply) => {
        const content = require("../../responses/fortniteConfig/fortnite-game.json");
        const memory = functions.GetVersionInfo(request);

        // backgrounds
        const backgrounds = content.dynamicbackgrounds.backgrounds.backgrounds;
        const season = `season${memory.season}${memory.season >= 21 ? "00" : ""}`;
        backgrounds[0].stage = season;
        backgrounds[1].stage = season;

        // random news
        const images = [
            "https://cdn2.unrealengine.com/s25-lobby-4k-4096x2048-4a832928e11f.jpg",
            "https://cdn2.unrealengine.com/t-bp20-lobby-2048x1024-d89eb522746c.png",
            "https://cdn2.unrealengine.com/s21-lobby-background-2048x1024-2e7112b25dc3.jpg",
            "https://cdn2.unrealengine.com/t-bp23-lobby-2048x1024-2048x1024-26f2c1b27f63.png",
            "https://cdn2.unrealengine.com/t-ch4s2-bp-lobby-4096x2048-edde08d15f7e.jpg",
            "https://cdn2.unrealengine.com/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png",
            "https://cdn2.unrealengine.com/nss-lobbybackground-2048x1024-f74a14565061.jpg",
            "https://cdn2.unrealengine.com/t-s25-14dos-lobby-4096x2048-2be24969eee3.jpg",
            "https://cdn2.unrealengine.com/Fortnite/fortnite-game/battleroyalenews/v42/BR04_MOTD_Shield-1024x512-75eacc957ecc88e76693143b6256ba06159efb76.jpg"
        ]
        const titles = [
            "Keep Your Account Secure",
            "ArcaneV5, Powering better multiplayer experiences than before!",
            "Welcome to Arcane Backend",
            "RetroNite is free", // thanks theRevisitor
            "Thanks for using ArcaneV5",
            "Thanks for choosing Arcane Backend!"
        ]
        const descriptions = [
            "Avoid scam sites offering free V-Bucks. Epic will never ask for your password. Enable Two-Factor Authentication to help stay secure!",
            "Keep Your Account Secure",
            "Welcome to Arcane Backend \n We hope you have an amazing experience!",
            "RetroNite is free", // thanks theRevisitor
            "Thanks for using ArcaneV5 \n We hope you have an amazing experience!",
            "Thanks for choosing Arcane Backend! \n We hope you have an amazing experience!"
        ]

        const randomImages = [
            functions.getRandomElement(images),
            functions.getRandomElement(images)
        ]

        const randomTitles = [
            functions.getRandomElement(titles),
            functions.getRandomElement(titles)
        ]

        const randomDescs = [
            functions.getRandomElement(descriptions),
            functions.getRandomElement(descriptions)
        ]

        let newsv1 = [];
        for (let i = 0; i < 2; i++) {
            newsv1.push({
                "image": randomImages[i],
                "hidden": false,
                "messagetype": "normal",
                "_type": "CommonUI Simple Message Base",
                "title": randomTitles[i],
                "body": randomDescs[i],
                "spotlight": false
            })
        }
        content.battleroyalenews.news.messages = newsv1;
        content.creativenews.news.messages = newsv1;
        content.savetheworldnews.news.messages = newsv1;

        reply.status(200).send(content);
    })

    fastify.get('/content/api/pages/fortnite-game/:subkey', (request, reply) => {
        const content = require("../../responses/fortniteConfig/fortnite-game.json");
        if (content[request.params.subkey]) {
            return reply.status(200).send(content[request.params.subkey]);
        } else {
            return createError.createError(errors.NOT_FOUND.common, 404, reply);
        }
    })
}

module.exports = content