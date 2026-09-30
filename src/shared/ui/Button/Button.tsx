import style from "./Button.module.scss";

type ButtonProps = {
	title: string;
	onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => {
	return (
		<>
			<button className={style.button} onClick={onClick}>
				{title}
			</button>
		</>
	);
};
