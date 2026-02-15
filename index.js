import { Doc } from "./src/doc.js";

document.addEventListener('DOMContentLoaded', () => {

    let editor = document.getElementById('editor');

    let config = {
        content: 'hola',
        editor: editor,
    }

    let doc = new Doc(config);


    console.log('DOC', doc);



})