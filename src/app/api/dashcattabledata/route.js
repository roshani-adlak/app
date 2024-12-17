const Dashcattabledata = [
    {
		id: 1,
		title: 'Games',
        apps: '27',
        date: 'Feb 20, 2024'
	  },
    {
		id: 2,
		title: 'Entertainment',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 3,
		title: 'Communication',
        apps: '1',
        date: 'Feb 20, 2024'
	  },
    {
		id: 4,
		title: 'Emails',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 5,
		title: 'Security',
        apps: '9',
        date: 'Feb 20, 2024'
	  },
    {
		id: 6,
		title: 'Tools',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 7,
		title: 'Media',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 8,
		title: 'Internet',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 9,
		title: 'Finance',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 10,
		title: 'Design',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 11,
		title: 'Education',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
    {
		id: 12,
		title: 'IT Tools',
        apps: '0',
        date: 'Feb 20, 2024'
	  },
];
export async function GET(request) {
return new Response(JSON.stringify(Dashcattabledata), {
    headers: { 'Content-Type': 'application/json' },
});
}
    // export default Appsdata;