
/**
 * Render and manage the entire doc
 */
export class Doc {

    constructor(config){
        this.element = config.editor ?? '';
        this.content = config.content ?? '';
        this.showOptionsBar = config.showOptionsBar ?? true;
        this.render();
    }

    render(){
        //Default options bar...

        //Editor
        let editor = document.createElement('div');
        editor.contentEditable = 'true';
        editor.classList.add('editor-element');
        
        //generate all the elements inside the editor...

        this.element.classList.add('editor-container');
        editor.textContent = this.content;
        this.editor = editor;
        this.element.append(editor);
    }




}