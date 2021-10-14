import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	max-width: 800px;
`;

export const Erro = styled.p`
	color: #f11d1d;
    background-color: #d8d8d8;
    font-size: 25px;
    margin: 0;
    padding: 5px 0px;
`;

export const Form = styled.form`
	padding: 40px;
	background-color: #6F1E51 ;
	display: flex;

	input[type="text"]{
		width: -webkit-fill-available;
		padding: 0 20px;
		font-size: 28px;

		margin: 10px 0;

		background-color: white;
		color: black;

		border: 1px solid #d8d8d8;
		border-bottom: 1px solid blue;

		transition: all 0.2s;
	}

	input[type="submit"] {
		padding: 10px 30px;
		font-size: 18px;

		cursor: pointer;
		margin: 10px 0;

		background-color: black;
		color: white;
		border: 1px solid #007bff;

		transition: all 0.2s;
	}

	input[type="submit"]:hover {
		background-color: white;
		color: #007bff;
		border: 1px solid #007bff;

		transition: all 0.2s;
	}

	input:focus {
		border: 1px solid blue;
	}

	input:focus-visible {
		outline: 0; 
	}
`;

export const Address = styled.div`
	padding: 10px 50px;

	color: black;
	font-size: 20px;
    text-transform: capitalize;
	background-color:#ED4C67 ;

	h2 {
		margin: 20px;
		font-size: 50px;
		color: #ecf0f1;
		text-shadow: 1px 2px gray;

		cursor: default;
	}

	p {
		margin: 5px;
	    font-size: 20px;
	    font-weight: bold;
	    text-transform: none;
	    color: #4b4b4b;
	    cursor: default;
	}

	table {
		text-align: initial;
	}

	td {
		padding: 5px 5px;
	}

	td[align="right"]{
		font-size: 25px;
		font-weight: 500;
	}
`;

export const ProgressBar = styled.div`
	width: 100%;
	height: 5px;

	background:linear-gradient(to right, #007bff, #007166);
	background-color: white;
	
	background-size: 20%;
	background-repeat: repeat-y;
	background-position: -25% 0;

	animation: trajeto 1.2s ease-in-out infinite;

	@keyframes trajeto{
		50%{background-size: 60%}
		100%{background-position: 125% 0;}
	}

`;