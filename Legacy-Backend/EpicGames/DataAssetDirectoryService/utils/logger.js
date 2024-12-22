function formatMessage(colorCode, label, ...args) {
    const msg = args.join(" ");
    console.log(`\x1b[${colorCode}m${label}\x1b[0m ${msg}`);
}

function backend(...args) {
    formatMessage(35, "[DATA-ASSET-DIRECTORY-SERVICE]", ...args);  
}

module.exports = {
    formatMessage,
    backend
}