function formatFileSize(size) {
    if (size >= 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(1).replace('.', ',') + ' МБ';
    } else if (size >= 1024) {
        return (size / 1024).toFixed(1).replace('.', ',') + ' КБ';
    } else {
        return size + ' Б';
    }
}

const uploadArea = $('.file-uploader__area');
const fileInput = uploadArea.find('input')[0];
const fileList = $('.file-uploader__list');
const dataTransfer = new DataTransfer();
const uploadButton = $("#submitBtn")

uploadArea.on('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
});

uploadArea.on('dragleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
});

uploadArea.on('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');

    const files = e.originalEvent.dataTransfer.files;
    handleFiles(checkFiles(files));
});

function checkFiles(files) {
    const formats = ["image/jpeg", "image/png"];

    for (let index = 0; index < files.length; index++) {
        const file = files[index]
        if (file && formats.indexOf(file.type) != -1) {
            dataTransfer.items.add(file)
        }
    }

    return dataTransfer.files

}

fileInput ? fileInput.addEventListener('change', () => {

    handleFiles(checkFiles(fileInput.files));

}): null;

function handleFiles(files) {
    updateFileInput()
    fileList.html("")

    Array.from(files).forEach(file => {
        const fileItem = $('<li class="file-uploader__file text-m"></li>');
        const loader = $('<div class="file-uploader__file-icon"></div>');
        const fileName = $('<div class="file-uploader__file-name"></div>').text(file.name);
        const fileSize = $('<div class="file-uploader__file-size"></div>').text(formatFileSize(file.size));
        const removeButton = $('<div class="file-uploader__file-delete"></div>');

        fileItem.append(loader, fileName, fileSize, removeButton);
        fileList.append(fileItem);

        // Simulate file upload
        // setTimeout(() => {
        //     loader.removeClass("file-uploader__file-icon_loader");
        // }, 2000);

        removeButton.on('click', function () {
            const index = Array.from(dataTransfer.files).findIndex(f => f.name === file.name && f.size === file.size);
            if (index !== -1) {
                dataTransfer.items.remove(index);
                updateFileInput();
            }
            fileItem.remove();
        });
    });
    toggleUploadButton()
}

function updateFileInput() {
    fileInput.files = dataTransfer.files;
}

function toggleUploadButton() {
    if (dataTransfer.files.length > 0) {
        uploadButton.prop('disabled', false);
    } else {
        uploadButton.prop('disabled', true);
    }
}

