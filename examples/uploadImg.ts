import path from 'path';
import { client } from '../src/index';

const token = 'f59b1a6bb0asdasq613d1c6af315d';

const files = new Map<string, string>();
files.set('image', path.resolve(__dirname, './pic.png'));

const resp = client.call({
  api: 'youzan.materials.storage.platform.img.upload',
  version: '3.0.0',
  token,
  params: {},
  files,
});

resp.then((data) => {
  console.log(data);
});
