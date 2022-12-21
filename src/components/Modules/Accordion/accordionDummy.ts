export interface accordionDummyProps {
	id: number;
	title: string;
	content: string;
}

export const accordionDummy = [
	{
		id: 1,
		title: "What is your refund policy?",
		content: `If you're unhappy with your purchase for any reason, email us
  within 90 days and we'll refund you in full, no questions asked.`,
	},
	{ id: 2, title: "Do you offer technical support?", content: "  No." },
	{
		id: 3,
		title: "Does drinking coffee make you smarter?",
		content: " So you've bought coffee... now what?",
	},
	{
		id: 4,
		title: "Is tech making coffee better or worse?",
		content: "The most innovative things happening in coffee",
	},
];
