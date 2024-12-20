# AccountService
## This handles the accounts and authentication
# Hosts:
- account-public-service-prod.ol.epicgames.com
- account-public-service-prod03.ol.epicgames.com

## Features:
- [ ] Authentication
- [ ] Database
- [ ] HWID Bans (hardware bans)  
- [ ] IP Bans (ban based on IP address) 

## Fiddlerscript:
```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if (oSession.fullUrl.Contains("/account/api"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:8081" + oSession.PathAndQuery;
        }
    }
}
```