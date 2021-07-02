const fs = require('fs');
const path = require('path')

// File System

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw err;
//
//     console.log('Папка была создана');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'myNotes.txt'),
//     'Hello World',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан');
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'myNotes.txt'),
//             '\nFrom append file',
//             (err) => {
//                 if (err) throw err;
//                 console.log('Файл был изменен');
//
//                 fs.readFile(path.join(__dirname, 'notes', 'myNotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err;
//                         // console.log(Buffer.from(data).toString());  но можно просто указать кодировку utf-8
//                         console.log(data);
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw err;

        console.log('Файл переименован');

    }
)

