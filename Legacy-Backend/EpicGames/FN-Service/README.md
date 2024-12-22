# FN-Service
## This handles the main game endpoints!

## Features:
- [ ] Cloudstorage
- [ ] Auto shop (purchasing skins and items)  
- [ ] Full Battle Pass integration  
- [ ] Challenges system (daily and weekly challenges)
- [ ] Working MCP
- [ ] Purchasing from item shop
- [ ] Universal backend (multi-version support)
- [ ] Seasonal events (Christmas, Halloween)
- [ ] Save The World

## Fiddlerscript:
```javascript
import Fiddler;

class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if(oSession.fullUrl.Contains("/fortnite/api"))
        {
            if (oSession.HTTPMethodIs("CONNECT"))
            {
                oSession["x-replywithtunnel"] = "FortniteTunnel";
                return;
            }
            oSession.fullUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
        }
    }
}
```