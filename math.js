function generatenumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("o valor minimo tem que se MENOR que o valor máximo")
    } else {
        console.log(min, max)

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }
}