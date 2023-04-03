const button = document.getElementById("button")

button.addEventListener('click', function (e) {
    e.preventDefault()

    console.log("Button is working");

    const english = document.getElementById("eng").value;
    const math = document.getElementById("math").value;
    const physics = document.getElementById("phy").value;
    const chemistry = document.getElementById("chem").value;
    const computer = document.getElementById("comp").value;

    if (
        english == "" || math == "" || physics == "" || chemistry == "" || computer == ""
    ) {
        alert("All fields are required")
    }
    if (
        english > 100 || math > 100 || physics > 100 || chemistry > 100 || computer > 100
    ) {
        alert("Please enter marks in range of 100")
    } else if (
        english < 0 || math < 0 || physics < 0 || chemistry < 0 || computer < 0
    ) {
        alert("Please enter marks in range of 100")
    } else {

        // total marks
        const totalMarks = parseFloat(english) + parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer);
        document.getElementById('total').innerHTML = "Total marks are : " + totalMarks;

        // average marks
        const average = totalMarks / 5
        document.getElementById('average').innerHTML = "Your average marks are : " + average;

        // grading

        if (average >= 90 && average <= 100) {
            document.getElementById("grade").innerHTML = " You got A Grade";
        }
        if (average >= 80 && average <= 89) {
            document.getElementById("grade").innerHTML = " You got B Grade";
        }
        if (average >= 70 && average <= 79) {
            document.getElementById("grade").innerHTML = " You got C Grade";
        }
        if (average >= 60 && average <= 69) {
            document.getElementById("grade").innerHTML = " You got D Grade";
        }
        if (average <= 60) {
            document.getElementById("grade").innerHTML = " You got F Grade";
        }

        if (
            english <=35 || math <=35|| physics <=35|| chemistry <=35|| computer <=35
        ){
            document.getElementById("grade").innerHTML = " You are failed";
        }

    }

})