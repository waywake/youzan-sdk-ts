import { client } from '../src/index';

const token = 'f59b1a6bb0asdasq613d1c6af315d';

const resp = client.call({
  api: 'youzan.shop.get',
  version: '3.0.0',
  token,
});

resp.then((data) => {
  console.log(data.data);
});
