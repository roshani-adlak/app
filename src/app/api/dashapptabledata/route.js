const Dashapptabledata = [
    {
		id: 1,
		img:'/images/featured-app/feat-img1.png',
		title: 'Jet attack move',
        pageview: '3463',
        date: '1 July 2024'
	  },
    {
		id: 2,
		img:'/images/featured-app/feat-img4.png',
		title: 'C-RAM CIWS simulator',
        pageview: '3460',
        date: '3 July 2024'
	  },
    {
		id: 3,
		img:'/images/featured-app/feat-img6.png',
		title: 'Road to Valor: Empires',
        pageview: '463',
        date: '5 July 2024'
	  },
];
export async function GET(request) {
return new Response(JSON.stringify(Dashapptabledata), {
    headers: { 'Content-Type': 'application/json' },
});
}
    // export default Appsdata;