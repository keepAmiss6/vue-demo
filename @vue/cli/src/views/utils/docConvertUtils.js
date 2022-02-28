/*
 * @Description: 文档数据转换
 * @Author: hanty
 * @Date: 2021-08-06 10:55:25
 * @LastEditTime: 2021-08-06 18:11:04
 */

import mammoth from "mammoth"
import * as XLSX from "xlsx";
export const getWord = ({url}) => {
  url = '/files/test.docx'
  console.log(url)
  // /files/test.docx
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      console.log(xhr)
      if (xhr.status == 200) {
        console.log(new Uint8Array(xhr.response))
        mammoth.convertToHtml({arrayBuffer:xhr.response}).then((resultObject) => {
          resolve(resultObject.value)
        });
      } else reject(`word文件转换失败：${xhr.status}`)
    };
    xhr.send();
  })
    
}

export const getExcel = ({url}) => {
  url = '/files/test.xlsx'

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      console.log(xhr)
      if (xhr.status == 200) {
        var data = new Uint8Array(xhr.response);
        var workbook = XLSX.read(data, { type: "array" });
        var sheetNames = workbook.SheetNames; // 工作表名称集合
        var worksheet = workbook.Sheets[sheetNames[0]];
                
        resolve(XLSX.utils.sheet_to_json(worksheet))
      } else reject(`Excel文件转换失败：${xhr.status}`)
    };
    xhr.send();
  })
}