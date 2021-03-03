import request from "@/network/request";

function getFormData(fileBlob,key) {
  let formData = new FormData();
  formData.append("multipartFile", fileBlob);
  formData.append("key",key)
  return formData;
}

//上传图片
export function updateImage(fileBlob, progress, key) {
  const formData = getFormData(fileBlob,key);
  return request({
    method: "post",
    url: "/article/updateFile",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: function(progressEvent) {
      progress((progressEvent.loaded / progressEvent.total) * 100);
    },
  });
}
