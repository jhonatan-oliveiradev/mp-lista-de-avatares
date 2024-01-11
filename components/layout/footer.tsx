import Link from "next/link";

export const Footer = () => {
	return (
		<div className="border-t border-muted-foreground/50">
			<footer className="flex items-center justify-between max-w-7xl mx-auto pt-2 px-2">
				<div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between w-full">
					<span className="font-light text-sm">
						&copy; {new Date().getFullYear()} - Todos os direitos reservados.
					</span>
					<span className="font-light text-sm">
						Feito por{" "}
						<Link
							className="hover:underline"
							href="https://github.com/jhonatan-oliveiradev"
							target="_blank"
						>
							Jhonatan Oliveira
						</Link>
						.
					</span>
				</div>
			</footer>
		</div>
	);
};
