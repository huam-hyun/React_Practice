console.log('Nothing is worth more than laughter.');

let rocker: string;
rocker = "Joan Jett";

let cher = {
    firstName: "Cherilyn",
    lastName: "Sarkisian"
};

type WithFirstName = {
	firstName: string;
};

type WithLastName = {
	lastName: string;
};

const hasBoth = {
	firstName: "Lucille",
	lastName: "Clifton",
};

// Ok
let withFirstName: WithFirstName = hasBoth;

// Ok
let withLastName: WithLastName = hasBoth;

type Books = {
    author?: string;
    pages: number;
}

let newBook: Books = {
    pages: 1
}