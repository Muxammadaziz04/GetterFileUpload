function setFileExtension(fileName, defaultExtension) {
    let [name, extension] = fileName.split('.');
    name = name.slice(0, -97)
    return extension ? `${name}.${extension}` : `${name}.${defaultExtension}`
}

module.exports = setFileExtension