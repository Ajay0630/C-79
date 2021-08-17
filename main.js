studnames = [];
function submit() {
    var n1 = document.getElementById("stud1").value;
    var n2 = document.getElementById("stud2").value;
    var n3 = document.getElementById("stud3").value;
    var n4 = document.getElementById("stud4").value;
    var n5 = document.getElementById("stud5").value;

    studnames.push(n1);
    studnames.push(n2);
    studnames.push(n3);
    studnames.push(n4);
    studnames.push(n5);

    console.log(studnames);

    document.getElementById("div").innerHTML = studnames;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
};

function sort() {
    studnames.sort();
    console.log(studnames);
    document.getElementById("div").innerHTML = studnames;
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("sort").style.display = "none";
}