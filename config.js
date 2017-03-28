var rc = require("rc");

var defaults = {
    vault: {
        server: {
            "address": process.env.VAULT_ADDR || "http://localhost:8200",
            "ca-cert": process.env.VAULT_CACERT || undefined,
            "ca-path": process.env.VAULT_CAPATH || undefined,
            "tls-skip-verify": process.env.VAULT_SKIP_VERIFY || false,
            "api-version": "v1"
        }, pki: {
            "path": "pki",
            "role": ""
        },
        "token": process.env.VAULT_TOKEN || "",
        "token-renewable": false
    },
    certCN: require("os").hostname(),
    certAltNames: [],
    certIPs: [],
    certTTL: undefined,
    certFile: "client.pem",
    keyFile: "client.key",
    caFile: undefined,
    onUpdate: undefined,
    renewalCoefficient: 0.9,
    once: false,
// Rancher config
    rancher: {
      server: {
        "address": process.env.RANCHER_URL || "localhost",
        "port": process.env.RANCHER_PORT || "8080",
        "access_key": process.env.RANCHER_ACCESS_KEY || undefined,
        "secret_key": process.env.RANCHER_SECRET_KEY || undefined,
        "projectid": process.env.RANCHER_PROJECT_ID || "1a5"
      }, cert: {
          "certid": process.env.RANCHER_CERT_ID|| undefined
      }
    }
};

module.exports = rc("vault-pki-client", defaults);
