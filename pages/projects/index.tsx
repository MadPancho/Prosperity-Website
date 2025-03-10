import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import A from "@components/A";
import { projectPageDataGetAll } from "@lib/lib";
import Metadata from "@components/Metadata";
import HighlightLinkBanner from "@components/HighlightLinkBanner";

export async function getStaticProps() {
	const allData = await projectPageDataGetAll();

	return { props: { allData } };
}

export default function Projects({ allData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="markdown">
			<Metadata
				title="Built On Prosperity"
				description="Explore the builds, farms, and projects created on Prosperity"
			/>
			<section className="flex flex-col gap-12 text-center markdown">
				<header className="text-4xl type-header">Built On Prosperity</header>
				<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
					Explore the builds, farms, and projects created on Prosperity.
				</p>
				<section className="columns-1 md:columns-2 w-full overflow-hidden gap-8 space-y-8">
					{allData.map((p) =>
						p.imageFiles.map((i) => (
							<A
								href={`/projects/${i.replace(/(_+.\.png)|(\.png)/, "")}`}
								className="block relative group">
								<Image
									className="bg-zinc-800 rounded-lg"
									src={`/projects/${i}`}
									width={1920}
									height={1080}
									quality={50}
									alt={p.meta?.short || ""}
								/>
								<p className="text-left select-none w-full px-4 py-4 rounded-b-lg bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 duration-150 absolute bottom-0 left-0">
									{p.meta?.short}
								</p>
							</A>
						))
					)}
				</section>
				<HighlightLinkBanner
					content="Looking to add your creation to the project gallery?"
					linkContent="Contribution Guide"
					href="/wiki/wiki-contribution"
				/>
			</section>
		</div>
	);
}
