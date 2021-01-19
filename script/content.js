
function openPage(pageName){

    // hide class tabContent by default
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(pageName).style.display = 'block';
}
