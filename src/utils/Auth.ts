import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL!,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
});

export const initKeycloak = async () => {
  await keycloak.init({ onLoad: 'login-required' });
  return keycloak;
};

export default keycloak;