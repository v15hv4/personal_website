function loadSession() {
    refreshForm()
    if('count' in localStorage) {
        var count = localStorage.getItem('count');
    } else {
        var count = 0;
    }
    if(count > 0) {
        document.getElementById('empty_marker').style.display = 'none';
        var count = localStorage.getItem('count');
        var table = document.getElementById('skill_table');
        for(var i = 0; i < count; i++) {
            var entry = Array.from(localStorage.getItem(i).split(','));
            table.innerHTML+='<tr><td>' + entry[0] + '</td><td>' + entry[1] + '</td><td>' + entry[2] + '</td><td>' + entry[3] + '</td></tr>';
        }
    }
}

function addSkill() {
    document.getElementById('empty_marker').style.display = 'none';
    var newName = document.getElementsByName('sf_name')[0].value;
    var newSkill = document.getElementsByName('sf_skill')[0].value;
    var newLvl = document.getElementsByName('sf_lvl')[0].value;
    var newCmt = document.getElementsByName('sf_cmt')[0].value;
    if('count' in localStorage) {
        var count = localStorage.getItem('count');
    } else {
        var count = 0;
    }
    localStorage.setItem(count, [newName, newSkill, newLvl, newCmt])
    count++;
    localStorage.setItem('count', count);
    var table = document.getElementById('skill_table');
    table.innerHTML+='<tr><td>' + newName + '</td><td>' + newSkill + '</td><td>' + newLvl + '</td><td>' + newCmt + '</td></tr>';
    refreshForm();
}

function refreshForm() {
    document.getElementsByName('sf_name')[0].value = '';
    document.getElementsByName('sf_lvl')[0].value = '';
    document.getElementsByName('sf_cmt')[0].value = '';
    document.getElementsByName('sf_skill')[0].value = '';
}