student_array = [];

function submit() {
    display_student_array = [];
    for (var j = 1; j <= 4; j++) {
        var name = document.getElementById("student_" + j).value;
        student_array.push(name)
    }
    console.log(student_array)
    var length = student_array.length;

    for (var k = 0; k < length; k++) {
        display_student_array.push("<h4> NAME : " + student_array[k] + "</h4>");

    }
    console.log(display_student_array)
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ")
    console.log(remove_commas)
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "block";





}

function sorting() {
    display_student_array = []
    student_array.sort();
    var length = student_array.length;

    for (var k = 0; k < length; k++) {
        display_student_array.push("<h4> NAME : " + student_array[k] + "</h4>");

    }
    console.log(display_student_array)
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ")
    console.log(remove_commas)
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}