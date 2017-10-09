const Http = document.Http;

const actionButton = document.getElementById("apply");
actionButton.addEventListener("click", function()
{
    let var_1 = document.getElementById("1_input").value;
    let var_2 = document.getElementById("2_input").value;
    let arg = {first: var_1, secound: var_2};

    Http.FetchPost("/sum", arg)
        .then((response) =>
    {
        print_sum(response);
    });
    Http.FetchPost("/multiplication", arg)
        .then((response) =>
    {
        print_mul(response);
});
    Http.FetchPost("/min", arg)
        .then((response) =>
    {
        print_min(response);
});
    Http.FetchPost("/max", arg)
        .then((response) =>
    {
        print_max(response);
});
});

function print_sum (sum) {
    alert("sum = " + sum.answer);
}

function print_mul (mul) {
    alert("mul = " + mul.answer);
}

function print_min (min) {
    alert("min = " + min.answer);
}

function print_max (max) {
    alert("max = " + max.answer);
}