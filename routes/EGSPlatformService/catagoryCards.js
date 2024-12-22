async function catagoryCards(fastify, options) {
    fastify.get('/api/v1/egs/category-cards', (request, reply) => {
        reply.status(200).send({
            "__typename": "PaginatedCategoryCards",
            "data": [
                {
                    "images": [
                        "https://cdn1.epicgames.com/spt-assets/01bd1b95902f4a73b04267c0e17161a5/spellbound-survivors-v4auq.jpg",
                        "https://cdn1.epicgames.com/spt-assets/c97bd69018fc427d98808d1435bcc503/garten-of-banban-7-170tp.png",
                        "https://cdn1.epicgames.com/spt-assets/ed48f0c4ab5640b0bc3efc8c4fe0b40b/ivorfall-1g4ao.png"
                    ],
                    "slug": "action-games",
                    "title": "Action Games"
                }
            ],
            "paging": {
                "count": 1,
                "start": 0,
                "total": 40
            }
        })
    })
}

module.exports = catagoryCards;