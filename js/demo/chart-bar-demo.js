// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

<?php

//Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "pweb-f");

//Ambil data dari tabel work_hours
$reasondata = mysqli_query($conn, "SELECT reason FROM reasondb GROUP BY reason");
$jmlreason = mysqli_query($conn, "SELECT SUM(jumlah) AS jml FROM reasondb GROUP BY reason");

?>

// Bar Chart Example
var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: [<?php while($row = mysqli_fetch_assoc($reasondata)) 
    { echo '"'.$row['reason'].'",'; } ?>],
    datasets: [
    {
        label: "Coba",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [<?php while($row = mysqli_fetch_assoc($jmlreason)) 
    { echo '"'.$row['jml'].'",'; } ?>]
    }],
},
options: {
    title: {
        display: true,
        text: 'Trend of Reason'
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            // steps: 10,
            // stepValue: 1,
            // max: 10,
            // min: 0,
            }
        }
    }],
    }
});
