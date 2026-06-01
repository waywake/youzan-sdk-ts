/**
 * HTTP 请求工具
 */

import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import * as configHttp from '../config/http';

// 创建预配置的 axios 实例
const httpClient = axios.create({
  baseURL: configHttp.getBaseUrl(),
  headers: {
    'User-Agent': 'YZY-Open-Client 1.0.0 - Node',
  },
});

/**
 * 发起 POST 请求
 *
 * @param url 支持绝对路径、相对路径
 * @param params POST 参数
 */
export async function post(url: string, params?: Record<string, unknown>) {
  const resp = await httpClient.post(url, params, {
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
  });
  return resp;
}

/**
 * 发起上传文件请求
 *
 * @param url 支持绝对路径、相对路径
 * @param files 上传文件参数，支持 Map 或 Object。示例: {"image": "/path/to/filename.jpg"}
 */
export async function upload(url: string, files: Map<string, string> | Record<string, string>) {
  const form = new FormData();

  if (files instanceof Map) {
    files.forEach((filePath, key) => {
      form.append(key, fs.createReadStream(filePath));
    });
  } else {
    for (const [key, filePath] of Object.entries(files)) {
      form.append(key, fs.createReadStream(filePath));
    }
  }

  const resp = await httpClient.post(url, form, {
    headers: form.getHeaders(),
  });
  return resp;
}
