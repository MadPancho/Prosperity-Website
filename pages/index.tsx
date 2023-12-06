import Image from "next/image";

import Slideshow from "@components/Slideshow";
import A from "@components/A";

function Highlight(props: { children: React.ReactNode }) {
	return <span className="text-zinc-100">{props.children}</span>;
}

export default function Home() {
	const testimonials: { user: string; iconUrl: string; text: JSX.Element }[] = [
		{
			user: "Interplanetary",
			text: (
				<>
					I joined Prosperity sometime in 2021. It was a super welcoming server with nice, helpful
					people. It was the first TMC server I joined, and frankly, it set my expectations pretty
					high :)
				</>
			),
			iconUrl: "/index/users/interplanetary.webp"
		},
		{
			user: "Takeout",
			text: (
				<>
					I've played here for a bit now, it's a great place to call home. Some very knowledgeable
					technical players as well as talented builders make for a motivating environment. I highly
					encourage if you're looking to build redstone or not to check it out.
				</>
			),
			iconUrl: "/index/users/takeout.webp"
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet.
				</>
			),
			iconUrl: ""
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id? rem
					quibusdam laboriosam ma. Ra.
				</>
			),
			iconUrl: ""
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id? rem
					quibusdam laboriosam ma. Ra.
				</>
			),
			iconUrl: ""
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id? rem
					quibusdam laboriosam ma. Ra.
				</>
			),
			iconUrl: ""
		}
	];

	return (
		<>
			<div
				id="headline"
				className="bg-no-repeat bg-bottom w-full h-[58rem] -z-50 absolute left-0 top-0 opacity-50"
			/>
			<main className="markdown">
				<section className="flex flex-col gap-12 text-center markdown my-60">
					<header className="text-6xl type-header">Go Further Than Ever</header>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
						Prosperity is a Minecraft community focused on high-level technical and building
						gamepolay. <Highlight>Create</Highlight>, <Highlight>engineer</Highlight>, and{" "}
						<Highlight>grow</Highlight> on a server intent on providing the best possible experience
						for everyone.
					</p>
					<div className="space-x-12">
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 inline-block align-middle">
									<path
										fillRule="evenodd"
										d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</A>
						<A href="#learn-more" className="hidden md:inline-flex custom-link type-header">
							More About Prosperity
						</A>
					</div>
				</section>
				<hr id="learn-more" />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">A Playground For Architects</header>
					<p>
						For those who wish to build, this is a great place to be. With no shortage of community
						projects to contribute to, and a technical community giving you access to endless
						resources, you can expand the scope of your builds further than ever before.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Work better together in survival and creative.</Highlight> Take advantage
							of a powerful creative server, real-time schematic syncing, and a cooperative
							community willing to help with large scale builds.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>A wider palette than ever.</Highlight> With more renewable resources
							Prosperity can allow you to build with blocks you never would have dreamed of before.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Building together.</Highlight> With a strong community focus you don't need
							to worry about griefing, trolls, or claims disrupting or ruining your hard work.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Updates in weeks, not months.</Highlight> We work hard to update to the
							most recent version of the game quickly so you can have access to new features faster.
						</p>
					</div>
					<Slideshow
						images={[
							{
								src: "/index/builds/a.png",
								width: 1920,
								height: 1080,
								alt: '"The Aabshaar Minar" by Mhov, Rotor, and gharmonica'
							},
							{
								src: "/index/builds/b.png",
								width: 1920,
								height: 1080,
								alt: '"The Eye Of Index" by Index'
							},
							{
								src: "/index/builds/c.png",
								width: 1920,
								height: 1080,
								alt: "Nether hub by MadPancho"
							},
							{
								src: "/index/builds/d.png",
								width: 1920,
								height: 1080,
								alt: "Sand castle by CarbonGhost"
							}
						]}
					/>
					<A href="/projects" className="block md:flex text-left justify-between mt-8">
						<p className="text-lg text-zinc-400 font-medium">
							Explore more builds, farms, and projects done on the server
						</p>
						<A href="/projects" className="text-lg font-medium custom-link">
							Project Gallery
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-middle">
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</A>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Expanding The Minds of Engineers</header>
					<p>
						Technical gamepolay is at the core of Prosperity, with the server focused heavily on
						allowing experimentation and new ideas.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Redstone without compromise.</Highlight> Build what you want without
							worrying about Redstone functionality being broken and limited. Make your farms,
							storage systems, and machines on your terms.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Start strong.</Highlight> Join an established server and skip the early
							game grind. Prosperity already has existing infrastructure and{" "}
							<Highlight>over 30 perimeters</Highlight>.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Collaborate and learn.</Highlight> Meet an existing community of dedicated
							and talented Redstone engineers with wide ranging-expertise. Study our existing
							schematics and huge creative test world.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Expand your ambitions.</Highlight> Take advantage of our carefully thought
							out additions to Redstone mechanics, farms, and quality-of-life additions. Build new
							farms for sand, Elytra, sponges, and more.
						</p>
					</div>
					<A href="/wiki/features" className="block md:flex text-left justify-between mt-8">
						<p className="text-lg text-zinc-400 font-medium">
							See what's new for technical players
						</p>
						<A href="/wiki/features" className="text-lg font-medium custom-link">
							Mechanics & Features
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-middle">
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</A>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Designed On Prosperity</header>
					<p>Explore the tech created by our members.</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 transition-colors gap-8 w-full">
						<A
							href="/"
							className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<header className="text-lg type-header my-1.5">Neat Machine</header>
							<p className="mb-1.4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore placeat
								molestiae non dolore aut ullam cumque esse.
							</p>
						</A>
						<A
							href="/"
							className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<header className="text-lg type-header my-1.5">Neat Machine</header>
							<p className="mb-1.4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore placeat
								molestiae non dolore aut ullam cumque esse.
							</p>
						</A>
						<A
							href="/"
							className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<header className="text-lg type-header my-1.5">Neat Machine</header>
							<p className="mb-1.4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore placeat
								molestiae non dolore aut ullam cumque esse.
							</p>
						</A>
					</div>
					<A href="/schematics" className="block md:flex text-left justify-between mt-8">
						<p className="text-lg text-zinc-400 font-medium">See the complete schematic archive</p>
						<A href="/schematics" className="text-lg font-medium custom-link">
							Schematic Archive
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-middle">
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</A>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">By The Community, For The Community</header>
					<p>
						Prosperity is it's community. We take community feedback and suggestions to and strive
						to create the best experience possible. See what our members think.
					</p>
					<div className="columns-1 md:columns-2 lg:columns-3 gap-8 overflow-hidden">
						{testimonials.map((comment) => (
							<div className="break-inside-avoid-column border border-zinc-700 p-4 mb-4 rounded-md text-left">
								<div className="flex gap-4 mb-1.5 items-center">
									<Image
										alt=""
										src={comment?.iconUrl}
										width={256}
										height={256}
										className="w-8 h-8 bg-zinc-800 rounded-full border-none"
									/>
									<header className="text-lg">{comment.user}</header>
								</div>
								{comment.text}
							</div>
						))}
					</div>
					<A href="/wiki/admin-overview" className="block md:flex text-left justify-between mt-8">
						<p className="text-lg text-zinc-400 font-medium">
							Read more about how we keep the server safe and civil
						</p>
						<A href="/wiki/admin-overview" className="text-lg font-medium custom-link">
							Public Admin Documentation
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-middle">
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</A>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Fast and Reliable</header>
					<p>
						Key to both technical gamepolay and quality-of-life, we take performance and reliability
						seriously.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>20 TPS.</Highlight> Enjoy consistent, solid, performance without worrying
							about game breaking optimization plugins.{" "}
							<Highlight>Don't just run one world eater</Highlight>, run two, or three!
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Dedicated Hardware.</Highlight> Prosperity is hosted on dedicated high-end
							hardware from a trustworthy host in Los Angeles, California.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Extensive backups and logging.</Highlight> Don't worry about losing days of
							progress if something goes wrong. We take full advantage of complete off-site backups
							and verbose block logging.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Battle tested.</Highlight> We only rely on the best open-source mods and
							software, with talented developers in the community to fix issues if they arise.
						</p>
					</div>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-52">
					<header className="text-5xl">This is Prosperity</header>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
						Ready to join our community? Join our Discord and apply to be whitelisted now.
					</p>
					<div>
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 inline-block align-middle">
									<path
										fillRule="evenodd"
										d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</A>
					</div>
				</section>
			</main>
		</>
	);
}
