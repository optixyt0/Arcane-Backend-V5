async function region(fastify, options) {
    fastify.get('/region', (request, reply) => {
        reply.status(200).send({
            "continent": {
                "code": "EU",
                "geoname_id": 6255148,
                "names": {
                    "de": "Europa",
                    "en": "Europe",
                    "es": "Europa",
                    "fr": "Europe",
                    "ja": "ヨーロッパ",
                    "pt-BR": "Europa",
                    "ru": "Европа",
                    "zh-CN": "欧洲"
                }
            },
            "country": {
                "geoname_id": 2921044,
                "is_in_european_union": true,
                "iso_code": "DE",
                "names": {
                    "de": "Deutschland",
                    "en": "Germany",
                    "es": "Alemania",
                    "fr": "Allemagne",
                    "ja": "ドイツ連邦共和国",
                    "pt-BR": "Alemanha",
                    "ru": "ФРГ",
                    "zh-CN": "德国"
                }
            },
            "subdivisions": [
                {
                    "geoname_id": 2905330,
                    "iso_code": "HE",
                    "names": {
                        "de": "Hessen",
                        "en": "Hesse",
                        "es": "Hessen",
                        "fr": "Hesse",
                        "ru": "Гессен"
                    }
                }
            ]
        })
    })

    fastify.post('/region/check', (request, reply) => {
        reply.status(200).send({
            "content_id": "AF9yLAAsklQALFTy",
            "allowed": true,
            "resolved": true,
            "limit": "Res=656"
        })
    })
}

module.exports = region;