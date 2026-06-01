/**
 * 密文解密
 */

import { createDecipheriv } from 'crypto';

/**
 * 密文解密，适用于订购等消息
 *
 * @param messages 应用收到的密文（收到的原始密文消息，无需解码）
 * @param clientSecret 应用的 clientSecret（可在有赞云控制台查看）
 */
export function decrypt(messages: string, clientSecret: string): string {
  if (!messages || !clientSecret) {
    throw new Error('参数异常: messages clientSecret 不可为空');
  }

  const algorithm = decodeURIComponent(messages);
  const key = clientSecret.substring(0, 16);
  const iv = '0102030405060708';

  const decipher = createDecipheriv('aes-128-cbc', key, iv);
  let dec = decipher.update(algorithm, 'base64', 'utf-8');
  dec += decipher.final();
  return dec;
}
