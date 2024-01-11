import { ModeToggle } from "../mode-toggle";

export const Header = () => {
	return (
		<header className="flex items-center justify-between max-w-7xl mx-auto py-4 px-2">
			<div>
				<span className="font-bold hidden md:block">
					TailwindCSS + shadcn-ui
				</span>
			</div>
			<div>
				<ModeToggle />
			</div>
		</header>
	);
};
