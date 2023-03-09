

export interface IСardContent {
    id: number;
    avatarImg: string;
    name: string;
    screenWork: string;
    mainDescription: string;
    title: string;
	dropDescription: string;
	 telegram?: string
    linkedIn?: string
    code?: string
	lifePage?: string
	
}

export const cardsContent:IСardContent[]  = [
	{
		id: 1,
		avatarImg: "/img/cardImage/emoportrait01.jpg",
		name: "Петя Пупкин",
		screenWork: "/img/cardImage/screamintothevoid.com_.png",
		telegram: "https://bit.ly/3Yqzlha",
		linkedIn: "https://www.linkedin.com/in/bogdan-kozhoma-79782920b/",
		code: "https://github.com",
		lifePage: "http://localhost:3000/main",
		
		mainDescription:
			"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
		title: "Description:",
		dropDescription:
			"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.",
	},
	{
		id: 2,
		avatarImg: "/img/cardImage/emoportrait01.jpg",
		name: "Вася Пузырьков",
		screenWork: "/img/cardImage/screamintothevoid.com_.png",
		 
		telegram: "https://bit.ly/3Yqzlha",
		linkedIn: "https://www.linkedin.com/in/bogdan-kozhoma-79782920b/",
		code: "https://github.com",
		lifePage: "http://localhost:3000/main",
				mainDescription:
			"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
		title: "Description:",
		dropDescription:
			"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.",
	},
	
	/* ------------- шаблон перед внесением новых данных скопировать и разкоментировать ------------ */
	// {
	// id: указать очерёдность id,
	// 	avatarImg: "",
	// 	name: "",
	// 	screenWork: "",
	// 	telegram: "https://bit.ly/3Yqzlha",
	// linkedIn: "",
	// code: "",
	// lifePage: "",
	// 	mainDescription:"",
	// 	title: "Description:",
	// 	dropDescription: "",
	// },
];
