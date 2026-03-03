const fs = require('fs').promises;
const path = require('path');

async function getFolders(directoryPath) {
    try {
        // Читаем содержимое с флагом с возвратом объектов Dirent
        const entries = await fs.readdir(directoryPath, { withFileTypes: true });
        
        // Фильтруем только папки
        const folderNames = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name);
            
        return folderNames;
    } catch (err) {
        console.error('Ошибка при чтении директории:', err);
    }
}

// Пример использования:
getFolders('./articles').then(folders => console.log(folders));