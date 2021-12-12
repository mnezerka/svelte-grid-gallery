import Gallery from './Gallery.svelte';

const images = [
		{ src: "images/dsc00308_sharp.jpg", thumbnail: "images/dsc00308_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00309_sharp.jpg", thumbnail: "images/dsc00309_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "Kaplicka na paprsku" },
		{ src: "images/dsc00311_sharp.jpg", thumbnail: "images/dsc00311_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00312_sharp.jpg", thumbnail: "images/dsc00312_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00319_sharp.jpg", thumbnail: "images/dsc00319_sharp_th.jpg", thumbnail_width:167, thumbnail_height:250, title: "some title" },
		{ src: "images/dsc00323_sharp.jpg", thumbnail: "images/dsc00323_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00324_sharp.jpg", thumbnail: "images/dsc00324_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00329_sharp.jpg", thumbnail: "images/dsc00329_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00330_sharp.jpg", thumbnail: "images/dsc00330_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00332_sharp.jpg", thumbnail: "images/dsc00332_sharp_th.jpg", thumbnail_width:167, thumbnail_height:250, title: "some title" },
		{ src: "images/dsc00333_sharp.jpg", thumbnail: "images/dsc00333_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00335_sharp.jpg", thumbnail: "images/dsc00335_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00337_sharp.jpg", thumbnail: "images/dsc00337_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00340_sharp.jpg", thumbnail: "images/dsc00340_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00346_sharp.jpg", thumbnail: "images/dsc00346_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00348_sharp.jpg", thumbnail: "images/dsc00348_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00352_sharp.jpg", thumbnail: "images/dsc00352_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00359_sharp.jpg", thumbnail: "images/dsc00359_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00361_sharp.jpg", thumbnail: "images/dsc00361_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00367_sharp.jpg", thumbnail: "images/dsc00367_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00378_sharp.jpg", thumbnail: "images/dsc00378_sharp_th.jpg", thumbnail_width:167, thumbnail_height:250, title: "some title" },
		{ src: "images/dsc00382_sharp.jpg", thumbnail: "images/dsc00382_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00383_sharp.jpg", thumbnail: "images/dsc00383_sharp_th.jpg", thumbnail_width:167, thumbnail_height:250, title: "some title" },
		{ src: "images/dsc00385_sharp.jpg", thumbnail: "images/dsc00385_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00395_sharp.jpg", thumbnail: "images/dsc00395_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00398_sharp.jpg", thumbnail: "images/dsc00398_sharp_th.jpg", thumbnail_width:167, thumbnail_height:250, title: "some title" },
		{ src: "images/dsc00399_sharp.jpg", thumbnail: "images/dsc00399_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" },
		{ src: "images/dsc00402_sharp.jpg", thumbnail: "images/dsc00402_sharp_th.jpg", thumbnail_width:250, thumbnail_height:167, title: "some title" } 
	]

const app = new Gallery ({
    target: document.body,
    props: {
        images
    }
});

export default app;