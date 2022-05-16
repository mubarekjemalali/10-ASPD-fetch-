$(document).ready(function () {


    $("#view_button").click(function (e) {
        e.preventDefault();
        let date = $("#date").val();

        // let searchparam = new URLSearchParams();
        // searchparam.append('date', date);
        // searchparam.append('api_key', "DEMO_KEY");


        fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`, {
            type: "GET",
            dataType: "json"
        })
            .then(response => response.json())
            .then(data => {
                $("#pic").attr("src", data.url);
                $("#title").text(data.title);
            }

            );

        // const options = {
        //     method: `GET`,
        //     body: searchparam
        // };

        // fetch('https://api.nasa.gov/planetary/apod', options)
        //     .then(response => response.json())
        //     .then(function (data) {
        //         $("#pic").attr('src', data.url);
        //         $("#title").html(data.title);

        //         console.log(data)

        //     }).catch(e => console.log(e));
    })
});

