import { url } from '../../api';

export const getSealStatus = () => (
  fetch(`${url()}/v1/sys/seal-status`).then(
    resp => resp.json()
  )
)
