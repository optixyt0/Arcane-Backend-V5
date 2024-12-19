```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if (oSession.hostname.Contains("account-public-service-prod-m.ol.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prod-origin.ak.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prod.ak.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prod.ol.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prod03.ol.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prodint.ol.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-prodqa.ol.epicgames.com") ||
            oSession.hostname.Contains("account-public-service-aws-test.ol.epicgames.com"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "AccountService";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:8081" + oSession.PathAndQuery
        }
    }
}
```
