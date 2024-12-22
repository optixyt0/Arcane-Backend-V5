```javascript
import Fiddler;

class Handlers {
    static function OnBeforeRequest(oSession: Session) {
        if(oSession.fullUrl.Contains(".ol.epicgames.com"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "EpicTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
        }
    }
}
```
