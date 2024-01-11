"use client";

import {
	Avatar,
	AvatarBorderVariants,
	AvatarVariants
} from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { generateUsers } from "@/lib/data";
import { useState } from "react";

const users = generateUsers(50);

export default function Home() {
	const [size, setSize] = useState<AvatarVariants["size"]>("default");
	const [border, setBorder] =
		useState<AvatarBorderVariants["border"]>("default");

	return (
		<main className="flex min-h-[80vh] flex-col items-center max-w-7xl mx-auto px-2 pt-2">
			<div className="my-2 flex gap-12 w-full">
				<div className="flex items-start justify-center flex-col">
					<h2 className="text-xl font-bold mb-4">Configure o tipo de borda:</h2>
					<div className="flex items-center justify-center gap-4">
						<Select
							onValueChange={(size) => setSize(size as AvatarVariants["size"])}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Tamanho" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="default">Padrão</SelectItem>
								<SelectItem value="sm">Pequeno</SelectItem>
								<SelectItem value="md">Médio</SelectItem>
								<SelectItem value="lg">Grande</SelectItem>
								<SelectItem value="xl">Extra grande</SelectItem>
							</SelectContent>
						</Select>
						<Select
							onValueChange={(border) =>
								setBorder(border as AvatarBorderVariants["border"])
							}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Borda" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="default">Padrão</SelectItem>
								<SelectItem value="none">Nenhuma</SelectItem>
								<SelectItem value="online">Online</SelectItem>
								<SelectItem value="offline">Offline</SelectItem>
								<SelectItem value="busy">Ocupado</SelectItem>
								<SelectItem value="away">Ausente</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
			<div className="mt-24">
				<div className="w-full flex flex-wrap [&>div]:-ml-2 ml-2 [&>div]:mt-4 -mt-4">
					{users.map((user, i) => (
						<Avatar
							key={i}
							username={user.username}
							fallbackText={user.fallbackText}
							imgUrl={user.imgUrl}
							size={size}
							border={border}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
