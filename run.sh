#!/bin/bash

exec node index.js --vault.pki.role=${VAULT_ROLE} \
--certCN=${VAULT_COMMON_NAME} \
--certTTL=${VAULT_TTL}
