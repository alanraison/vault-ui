export const url = () => 'http://localhost:3000';

export const healthCheck = () => (
  fetch(`${url()}/v1/sys/health?sealedcode=200`).then(resp => resp.json())
);
