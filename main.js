var student_array = [];

function submit() {
    var name = document.getElementById("student1").value;
student_array.push(name);
document.getElementById("display_name").innerHTML = student_array;
}

function sorting(){
    student_array.sort();
    var i = student_array.join("<br>");
    document.getElementById("sorted").innerHTML=i;
    }

function show() {
    var i = student_array.join("<br>");
    document.getElementById("p1").innerHTML=i; 
}

function searching() {
    var s = document.getElementById("s1").value;
    found = 0;
    for(var j = 0; j<student_array.length;j++){
        if (s==student_array[j]){found=found+1;}
    }
    document.getElementById("p2").innerHTML = "name found"+found+"times";
}