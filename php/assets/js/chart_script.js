/*!
 * Chart_script.js
 * Author       : Bestwebcreator.
 * Template Name: Cryptocash â€“ ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
 * Version      : 1.6
*/
var config = {
type: 'doughnut',
data: {
 
 datasets: [{
  data: [25, 25, 25, 15, 10],
  backgroundColor: ['#00b050','#00b0f0', '#c0504d', '#f79646', '#7030a0'],
  borderColor: [
   'rgba(255,255,255,0.5)',
   'rgba(255,255,255,0.5)',
   'rgba(255,255,255,0.5)',
   'rgba(255,255,255,0.5)',
  ],
  borderWidth: 1,
  label: 'Dataset 1'
 }],
 labels: [
  'Tech Dev, Infrastructure Support and Liquidity',
  'Founders and Key Employees',
  'Community and Ecosystem Rewards',
  'Consortium Network Partners in India, Indonesia and Thailand',
  'Pre Ico Investors'
 ]
},
options: {
 responsive: true,
 legend: {
   display: false,
 },
 title: {
   display: false,
   text: 'Chart.js Doughnut Chart'
 },
 pieceLabel: {
  render: 'percentage',
  fontColor: ['#00b050','#00b0f0','#c0504d','#f79646','#7030a0'],
  fontSize: 14,
  fontStyle: 'bold',
  position: 'outside',
  precision: 2
 },
 animation: {
   animateScale: true,
   animateRotate: true
 }
}
};


window.onload = function() {
var ctx = document.getElementById('token_sale').getContext('2d');
window.myPie = new Chart(ctx, config);
};