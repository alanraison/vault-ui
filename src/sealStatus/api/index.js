import { url } from '../../core/api';

export default () => (
  fetch(`${url()}/v1/sys/seal-status`).then(resp => resp.json())
);
