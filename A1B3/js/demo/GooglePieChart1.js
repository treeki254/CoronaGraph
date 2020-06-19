google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() 
{
    var data = google.visualization.arrayToDataTable(
        [["Covid19","Totalcases"],["서울",855],["경기",828],["인천",203],["강원",57],["충북",60],["세종",47],["충남",146],["대전",45],["경북",1379],["전북",21],["대구",6882],["전남",19],["광주",32],["경남",123],["울산",50],["부산",146],["제주",14]]
    );
    var options = {
        title: "국내 Covid19 확진자 도시별 "
    };
    var chart = new google.visualization.PieChart(document.getElementById("piechart_div"));
    chart.draw(data, options);
}