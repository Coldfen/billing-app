export interface ITarif {
	creationDate: string;
	tarifName: string;
	price: string;
	messageLimit: number;
	dateStart: string;
	dateEnd: string;
}

export interface User {
  email: string
  password: string
  userId?: string
  auth?: boolean
}

