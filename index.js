// Will only start services coded in javascript!
/* If you would like to use a service on another computer simply copy and paste the folder
   and run npm i on it then node . in the root of the folder*/
async function startServices() {
    console.log(`
                 █████╗ ██████╗  ██████╗ █████╗ ███╗   ██╗███████╗██╗   ██╗███████╗
                ██╔══██╗██╔══██╗██╔════╝██╔══██╗████╗  ██║██╔════╝██║   ██║██╔════╝
                ███████║██████╔╝██║     ███████║██╔██╗ ██║█████╗  ██║   ██║███████╗
                ██╔══██║██╔══██╗██║     ██╔══██║██║╚██╗██║██╔══╝  ╚██╗ ██╔╝╚════██║
                ██║  ██║██║  ██║╚██████╗██║  ██║██║ ╚████║███████╗ ╚████╔╝ ███████║
                ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝  ╚═══╝  ╚══════╝`);
    require("./EpicGames/AccountService/index");
    require("./EpicGames/ArtifactDeliveryService/index");
    require("./EpicGames/DataAssetDirectoryService/index");
    require("./EpicGames/FN-Service/index");
    require("./EpicGames/LightswitchService/index");
}

startServices();