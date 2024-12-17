const Sliderdata = [
    {
		id: 1,
        image:'/images/slider-1.png',
		title: 'War Thunder Mobile',
        date: 'Nov 08, 2024'
	  },
    {
		id: 2,
        image:'/images/slider-2.png',
		title: 'Grim Soul: Dark Survival RPG',
        date: 'Nov 08, 2024'
	  },
    {
		id: 3,
        image:'/images/slider-3.png',
		title: 'NordVPN – fast VPN for privacy',
        date: 'Nov 08, 2024'
	  },
  
];
export async function GET(request) {
return new Response(JSON.stringify(Sliderdata), {
    headers: { 'Content-Type': 'application/json' },
});
}
    // export default Sliderdata;