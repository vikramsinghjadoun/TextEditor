// java script for rich Text editor

var showingSourceCode = false;
var isEditMode = true;

function enableEditMode(){
    contentText.document.designMode = "On";
}
function execCmd(command){
    contentText.document.execCommand(command ,false,null);
}
function execCommandWithArg(command , arg){
    contentText.document.execCommand(command,false,arg);
}
function toggleSource(){
    if(showingSourceCode){
        contentText.document.getElementsByTagName('body')[0].innerHTML = contentText.document.getElementsByTagName('body')[0].textContent ;
        showingSourceCode = false;
    }else{
        contentText.document.getElementsByTagName('body')[0].textContent = contentText.document.getElementsByTagName('body')[0].innerHTML ;
        showingSourceCode = true;
    }
}
function toggleEdit(argument){
    if(isEditMode){
        contentText.document.getElementsByTagName('body')[0].innerHTML = contentText.document.getElementsByTagName('body')[0].textContent ;
        isEditMode = false;
    }else{
        contentText.document.getElementsByTagName('body')[0].textContent = contentText.document.getElementsByTagName('body')[0].innerHTML ;
        isEditMode = true;
    }
}