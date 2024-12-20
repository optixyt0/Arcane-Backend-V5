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
        } else if(oSession.fullUrl.Contains("/fortnite/api"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
        }
        else if(oSession.fullUrl.Contains("lightswitch"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:3552" + oSession.PathAndQuery;
        } else if(oSession.fullUrl.Contains("artifact-delivery"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:8082" + oSession.PathAndQuery;
        } else if(oSession.fullUrl.Contains("/api/v1/assets/"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:8083" + oSession.PathAndQuery;
        }
    }
}
```
