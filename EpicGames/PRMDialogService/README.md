## Fiddlerscript:
```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if(oSession.fullUrl.Contains("/api/v1/fortnite-br/"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:5006" + oSession.PathAndQuery;
        }
    }
}
```