# AccountService
## This handles the accounts and authentication
# Hosts:
- lightswitch-public-service-prod.ol.epicgames.com
- lightswitch-public-service-prod06.ol.epicgames.com

## Fiddlerscript:
```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if(oSession.fullUrl.Contains("artifact-delivery"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:8082" + oSession.PathAndQuery;
        }
    }
}
```