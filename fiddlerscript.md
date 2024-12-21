```javascript
import Fiddler;

class Handlers {
    static function OnBeforeRequest(oSession: Session) {
        var routingTable = {
            "ip-data-service": 8089,
            "global-profile-service": 8088,
            "/fulfillment/api/": 8087,
            "/friends/api/": 8086,
            "/emerald/": 8085,
            "/egs/": 8084,
            "/api/v1/assets/": 8083,
            "artifact-delivery": 8082,
            "/account/api": 8081,
            "/launcher/api": 5002,
            "api.kws.ol": 5001,
            "/fortnite/api": 3551,
            "lightswitch": 3552,
            "/caldera/": 3553,
            "events-public-service-live": 3554,
            "/content/api": 3555,
            "fn-service-discovery-search-live": 3556,
            "fn-service-discovery-live": 3557,
            "habanero": 3558,
            "/hotconfigs/v2": 3559,
            ".ol.epicgames.com": 3551
        };

        if (oSession.HTTPMethodIs("CONNECT")) {
            oSession["x-replywithtunnel"] = "EpicTunnel";
            return;
        }

        for (var pattern in routingTable) {
            if (oSession.fullUrl.Contains(pattern)) {
                oSession.fullUrl = "http://127.0.0.1:" + routingTable[pattern] + oSession.PathAndQuery;
                return;
            }
        }
    }
}
```
