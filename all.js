Quill.register("modules/imageUploader", ImageUploader);

var quill = new Quill( "#description", {
    theme: "snow", // 模板
    modules: {
        imageResize: {
            displaySize: true
        },
        imageUploader: {
            upload: (file) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
                }, 3500);
              });
            }
        }, 
        toolbar: [
            // 工具列列表[註1]
            [{ 'font': [] }], // 字體
            [{ 'size': ['small', false, 'large', 'huge'] }], // 文字大小
            ['bold', 'italic', 'underline', 'strike'], // 粗體、斜體、底線和刪節線
            [{ 'color': [] }, { 'background': [] }], // 顏色
            [{ 'script': 'sub'}, { 'script': 'super' }], // 上標、下標
            [{ 'header': 1 }, { 'header': 2 }], // 標題1、標題2
            ['blockquote', 'code-block'], // 區塊、程式區塊
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }], // 清單、縮排
            [{ 'direction': 'rtl' }, { 'align': [] }], // 文字方向
            ['link', 'image', 'video', 'formula'],// 連結、圖片、影片、Fx 
            [ 'clean' ] // 清除文字格是
        ]
    }
});