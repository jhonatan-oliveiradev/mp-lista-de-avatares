import { ModeToggle } from "../mode-toggle";

export const Header = () => {
	return (
		<div className="border-b border-muted-foreground/50">
			<header className="flex items-center justify-between max-w-7xl mx-auto py-2 px-2">
				<div>
					<span className="font-bold hidden md:block">
						TailwindCSS + shadcn-ui
					</span>
				</div>
				<div>
					<ModeToggle />
				</div>
			</header>
		</div>
	);
};
