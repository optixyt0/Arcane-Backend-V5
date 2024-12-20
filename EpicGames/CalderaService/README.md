## Fiddlerscript:
```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if(oSession.fullUrl.Contains("/caldera/"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:3553" + oSession.PathAndQuery;
        }
    }
}
```