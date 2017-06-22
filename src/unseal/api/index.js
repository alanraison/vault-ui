const url = 'http://localhost:8200';

export const getSealStatus = () => (
  fetch(`${url}/v1/sys/seal-status`).then(
    resp => resp.json()
  )
)