const  Discovery = require("@dohyper/registry.discovery.hyper");

const client = new Discovery(process.env.DISCOVERY_HYPER_URL, {password: process.env.DISCOVERY_HYPER_PASSWORD})

export default client;
