export const url = () => 'http://localhost:3000';

export const healthCheck = () => (
  fetch(`${url()}/v1/sys/health?sealedcode=200`).then((resp) => {
    if (resp.status !== 200) {
      throw new Error('health check failed');
    }
    return resp;
  }).then(resp => resp.json())
);
